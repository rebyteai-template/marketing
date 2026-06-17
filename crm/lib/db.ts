/**
 * DB access layer.
 *
 * Production (Cloudflare Worker): uses the D1 binding `DB` exposed via
 * getCloudflareContext(). D1 is SQLite-compatible, so the existing schema and
 * all queries work unchanged. We wrap D1 so callers keep using the same
 * libsql-style `execute({sql,args})` / `batch([...])` interface — nothing in
 * the API routes or UI had to change.
 *
 * Local ops scripts (run via tsx): fall back to the on-disk libsql file
 * `data.db`. libsql is loaded through a runtime require that is hidden from the
 * bundler, so its native module is never pulled into the Cloudflare build.
 */
import path from "path";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export interface DbStatement {
  sql: string;
  args?: unknown[];
}

export interface DbResult {
  rows: any[];
  rowsAffected: number;
  lastInsertRowid?: number | bigint;
}

export interface DbClient {
  execute(q: string | DbStatement): Promise<DbResult>;
  batch(
    stmts: (string | DbStatement)[],
    mode?: string
  ): Promise<DbResult[]>;
}

// Keep each D1 transaction comfortably under platform statement limits.
const D1_BATCH_CHUNK = 50;

function toParts(s: string | DbStatement): { sql: string; args: unknown[] } {
  return typeof s === "string"
    ? { sql: s, args: [] }
    : { sql: s.sql, args: s.args ?? [] };
}

function toResult(r: any): DbResult {
  return {
    rows: r.results ?? [],
    rowsAffected: r.meta?.changes ?? 0,
    lastInsertRowid: r.meta?.last_row_id,
  };
}

function wrapD1(d1: any): DbClient {
  return {
    async execute(q) {
      const { sql, args } = toParts(q);
      const res = await d1
        .prepare(sql)
        .bind(...args)
        .all();
      return toResult(res);
    },
    async batch(stmts) {
      const out: DbResult[] = [];
      for (let i = 0; i < stmts.length; i += D1_BATCH_CHUNK) {
        const prepared = stmts.slice(i, i + D1_BATCH_CHUNK).map((s) => {
          const { sql, args } = toParts(s);
          return d1.prepare(sql).bind(...args);
        });
        const res = await d1.batch(prepared);
        for (const r of res) out.push(toResult(r));
      }
      return out;
    },
  };
}

let _local: DbClient | null = null;

function getLocalDb(): DbClient {
  if (_local) return _local;
  // Hidden from the bundler so libsql's native module never enters the worker
  // build. This branch only runs under Node (tsx ops scripts / local dev).
  const req = (0, eval)("require");
  const { createClient } = req("@libsql/client");
  _local = createClient({
    url: `file:${path.join(process.cwd(), "data.db")}`,
  }) as unknown as DbClient;
  return _local;
}

export function getDb(): DbClient {
  try {
    const { env } = getCloudflareContext() as any;
    if (env?.DB) return wrapD1(env.DB);
  } catch {
    // Not in a Cloudflare context — fall through to the local file.
  }
  return getLocalDb();
}

let _initialized = false;

export async function ensureTables() {
  if (_initialized) return;
  const db = getDb();

  await db.batch(
    [
      `CREATE TABLE IF NOT EXISTS groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      type TEXT NOT NULL DEFAULT 'static',
      channel TEXT NOT NULL DEFAULT 'email',
      preset TEXT,
      last_synced_at TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`,
      `CREATE TABLE IF NOT EXISTS members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_id INTEGER NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
      email TEXT,
      phone TEXT,
      name TEXT DEFAULT '',
      UNIQUE(group_id, email),
      UNIQUE(group_id, phone)
    )`,
    ],
    "write"
  );

  _initialized = true;
}
