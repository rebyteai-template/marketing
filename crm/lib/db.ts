import { createClient, type Client } from "@libsql/client";
import path from "path";

let _db: Client | null = null;

export function getDb(): Client {
  if (!_db) {
    const dbPath = path.join(process.cwd(), "data.db");
    _db = createClient({
      url: `file:${dbPath}`,
    });
  }
  return _db;
}

let _initialized = false;

export async function ensureTables() {
  if (_initialized) return;
  const db = getDb();

  await db.batch([
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
    )`
  ], "write");

  _initialized = true;
}
