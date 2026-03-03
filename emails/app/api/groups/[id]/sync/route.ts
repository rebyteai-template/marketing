import { NextResponse } from "next/server";
import { getDb } from "../../../../../lib/db";
import { fetchClerkUsersForPreset } from "../../../../../lib/clerk-presets";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const db = getDb();

  const groupResult = await db.execute({
    sql: "SELECT * FROM groups WHERE id = ?",
    args: [id],
  });
  const group = groupResult.rows[0] as any;
  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }
  if (group.type !== "dynamic") {
    return NextResponse.json(
      { error: "Only dynamic groups can be synced" },
      { status: 400 }
    );
  }

  const users = await fetchClerkUsersForPreset(group.preset as string);

  // Additive sync: INSERT OR IGNORE preserves seeded members and adds new
  // Clerk users without duplicates (unique constraint on group_id + email)
  const batch: any[] = [
    ...users.map((u) => ({
      sql: "INSERT OR IGNORE INTO members (group_id, email, name) VALUES (?, ?, ?)",
      args: [id, u.email, u.name],
    })),
    {
      sql: "UPDATE groups SET last_synced_at = datetime('now') WHERE id = ?",
      args: [id],
    },
  ];

  await db.batch(batch, "write");

  const countResult = await db.execute({
    sql: "SELECT COUNT(*) as count FROM members WHERE group_id = ?",
    args: [id],
  });
  const memberCount = (countResult.rows[0] as any).count;

  const syncedResult = await db.execute({
    sql: "SELECT last_synced_at FROM groups WHERE id = ?",
    args: [id],
  });

  return NextResponse.json({
    ok: true,
    member_count: memberCount,
    last_synced_at: (syncedResult.rows[0] as any).last_synced_at,
  });
}
