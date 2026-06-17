import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { campaigns } from "../../../campaigns";
import * as postmark from "postmark";
import { createElement } from "react";
import { getDb, ensureTables } from "../../../lib/db";

export async function POST(req: Request) {
  await ensureTables();
  const { campaign, from, subject, dryRun = true, email, phone, groupId } =
    await req.json();

  const config = campaigns[campaign];
  if (!config) {
    return NextResponse.json({ error: "Campaign not found" }, { status: 404 });
  }

  const isSms = config.channel === "sms";

  // Build recipients list
  if (isSms) {
    let recipients: { phone: string; name: string }[];
    if (phone) {
      recipients = [{ phone, name: "" }];
    } else if (groupId) {
      const result = await getDb().execute({
        sql: "SELECT phone, name FROM members WHERE group_id = ?",
        args: [groupId]
      });
      recipients = result.rows as unknown as { phone: string; name: string }[];
      if (recipients.length === 0) {
        return NextResponse.json(
          { error: "Group has no members" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Provide phone or groupId" },
        { status: 400 }
      );
    }

    if (dryRun) {
      const previews = recipients.slice(0, 3).map((r) => ({
        phone: r.phone,
        name: r.name || "",
        message: config.message.replace("{name}", r.name || "there"),
      }));
      return NextResponse.json({
        dryRun: true,
        total: recipients.length,
        previews,
      });
    }

    // Real SMS send — stubbed
    return NextResponse.json(
      { error: "SMS sending not yet configured" },
      { status: 501 }
    );
  }

  // Email campaign path
  let recipients: { email: string; name: string }[];
  if (email) {
    recipients = [{ email, name: "" }];
  } else if (groupId) {
    const result = await getDb().execute({
      sql: "SELECT email, name FROM members WHERE group_id = ?",
      args: [groupId]
    });
    recipients = result.rows as unknown as { email: string; name: string }[];
    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "Group has no members" },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      { error: "Provide email or groupId" },
      { status: 400 }
    );
  }

  if (dryRun) {
    const previews = recipients.slice(0, 3).map((r) => ({
      email: r.email,
      name: r.name || "",
    }));
    return NextResponse.json({
      dryRun: true,
      total: recipients.length,
      previews,
    });
  }

  // Real send
  const apiKey = process.env.POSTMARK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "POSTMARK_API_KEY not configured" },
      { status: 500 }
    );
  }

  const client = new postmark.ServerClient(apiKey);
  let sent = 0;
  let failed = 0;

  // Send via Postmark's batch API. On Cloudflare Workers each HTTP call is a
  // subrequest (capped ~1000/request) and adds latency, so sending one email
  // per recipient stalls or times out on large groups. Batching at 500/call
  // turns a 4,000-recipient blast into ~8 subrequests. Rendering is chunked
  // too so we never hold thousands of rendered emails in memory at once.
  const BATCH = 500;

  for (let i = 0; i < recipients.length; i += BATCH) {
    const slice = recipients.slice(i, i + BATCH);
    const messages = await Promise.all(
      slice.map(async (recipient) => ({
        From: from || "founder@rebyte.ai",
        To: recipient.email,
        Subject: subject || "Hello from Rebyte",
        HtmlBody: await render(createElement(config.component, recipient)),
        MessageStream: "broadcast",
        TrackOpens: true,
        TrackLinks: "HtmlAndText",
      }))
    );

    const results = await client.sendEmailBatch(messages as any);
    for (const r of results) {
      if (r.ErrorCode === 0) {
        sent++;
      } else {
        failed++;
      }
    }
  }

  return NextResponse.json({ sent, failed });
}

