#!/usr/bin/env npx tsx
/**
 * Merge "All Existing Users" (group 13) + "All Users (Master)" (group 14)
 * into a single deduplicated group called "All Users".
 *
 * - Normalizes Gmail addresses (dots, +aliases, googlemail)
 * - INSERT OR IGNORE ensures no duplicates
 * - Safe to re-run: adds new members without duplicating
 *
 * Usage:
 *   npx tsx emails/scripts/merge-all-users.ts
 *   npx tsx emails/scripts/merge-all-users.ts --dry-run
 */

import { createClient } from "@libsql/client";
import path from "path";

const dryRun = process.argv.includes("--dry-run");

function normalizeEmail(email: string): string {
  email = email.toLowerCase().trim();
  const [local, domain] = email.split("@");
  if (domain === "gmail.com" || domain === "googlemail.com") {
    const cleaned = local.split("+")[0].replace(/\./g, "");
    return `${cleaned}@gmail.com`;
  }
  return email;
}

const SOURCE_GROUP_IDS = [13, 14]; // existing users + clerk master
const TARGET_GROUP_NAME = "All Users";

async function main() {
  const db = createClient({
    url: `file:${path.join(__dirname, "..", "data.db")}`,
  });

  // Collect all emails from source groups, deduplicate
  const merged = new Map<string, { email: string; name: string }>();

  for (const gid of SOURCE_GROUP_IDS) {
    const result = await db.execute({
      sql: "SELECT email, name FROM members WHERE group_id = ? AND email IS NOT NULL AND email != ''",
      args: [gid],
    });
    for (const row of result.rows) {
      const raw = row.email as string;
      const normalized = normalizeEmail(raw);
      if (!normalized.includes("@")) continue;
      if (!merged.has(normalized)) {
        merged.set(normalized, {
          email: normalized,
          name: (row.name as string) || "",
        });
      }
    }
  }

  console.log(`Source groups: ${SOURCE_GROUP_IDS.join(", ")}`);
  console.log(`Unique emails after dedup: ${merged.size}`);

  if (dryRun) {
    console.log("\nDry run — no changes made.");
    return;
  }

  // Create or get target group
  await db.execute({
    sql: "INSERT OR IGNORE INTO groups (name, type, channel) VALUES (?, 'static', 'email')",
    args: [TARGET_GROUP_NAME],
  });
  const groupResult = await db.execute({
    sql: "SELECT id FROM groups WHERE name = ?",
    args: [TARGET_GROUP_NAME],
  });
  const groupId = groupResult.rows[0].id as number;
  console.log(`Target group: "${TARGET_GROUP_NAME}" (id=${groupId})`);

  // Insert all members (batch in chunks of 200 for SQLite limits)
  const entries = Array.from(merged.values());
  let added = 0;
  const CHUNK = 200;

  for (let i = 0; i < entries.length; i += CHUNK) {
    const chunk = entries.slice(i, i + CHUNK);
    const batch = chunk.map((u) => ({
      sql: "INSERT OR IGNORE INTO members (group_id, email, name) VALUES (?, ?, ?)",
      args: [groupId, u.email, u.name],
    }));
    const results = await db.batch(batch, "write");
    added += results.filter((r) => r.rowsAffected > 0).length;
  }

  // Final count
  const countResult = await db.execute({
    sql: "SELECT COUNT(*) as count FROM members WHERE group_id = ?",
    args: [groupId],
  });
  const total = (countResult.rows[0] as any).count;

  console.log(`Added ${added} new members (${total} total in group)`);
  console.log("Done.");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
