import { Section, Text, Hr } from "@react-email/components";
import * as React from "react";
import { Wrapper } from "../../components/wrapper";
import { Hero } from "../../components/hero";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

interface ProductUpdateProps {
  name?: string;
  email?: string;
}

function OptionCard({
  badge,
  badgeColor,
  title,
  body,
}: {
  badge: string;
  badgeColor: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <table
      role="presentation"
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      style={optionTable}
    >
      <tbody>
        <tr>
          <td style={optionCell}>
            <span style={{ ...optionBadge, background: badgeColor }}>
              {badge}
            </span>
            <Text style={optionTitle}>{title}</Text>
            <Text style={optionBody}>{body}</Text>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default function ProductUpdate0421({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Three ways to pay for your agents on Rebyte: your subscription, your API key, or Rebyte credits — with every credit accounted for.">
      <Hero
        title="Rebyte Now Can Use Your Own Key / Subscription"
        ctaText="Connect Your Agent"
        ctaHref="https://app.rebyte.ai/integrations"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          From day one we wanted billing on Rebyte to be something you never
          have to guess at. This week we finished the work: three transparent
          ways to run your agents, each one clearly labeled, each one fully in
          your control.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>THREE WAYS TO RUN AN AGENT</Text>

        {/* ── Option 1: BYO Subscription ── */}
        <OptionCard
          badge="OPTION 1"
          badgeColor="#1a1a1a"
          title="Bring Your Own Subscription"
          body={
            <>
              Already paying for Claude Pro, Claude Max, or a Gemini
              subscription? Connect it once via OAuth and Rebyte runs your
              agent on top of your existing plan &mdash; nothing extra to buy.
              {" "}
              <strong>Available on the Pro plan.</strong>
            </>
          }
        />

        {/* ── Option 2: BYOK ── */}
        <OptionCard
          badge="OPTION 2"
          badgeColor="#2d5f8f"
          title="Bring Your Own API Key"
          body={
            <>
              Prefer pay-as-you-go? Drop in your Anthropic, Google, or OpenAI
              API key and your tokens get billed directly by the provider.
              Rebyte never touches that bill.
              {" "}
              <strong>Available on the Pro plan.</strong>
            </>
          }
        />

        {/* ── Option 3: Rebyte Credits ── */}
        <OptionCard
          badge="OPTION 3"
          badgeColor="#ff6b4a"
          title="Use Rebyte Credits"
          body={
            <>
              Don&apos;t want to deal with any of that? Use our credits. Every
              task shows you exactly how many credits it consumed, broken down
              by model and token count. No opaque markups, no surprise
              invoices &mdash; you see the meter the whole time.
            </>
          }
        />

        <Hr style={hr} />

        <Text style={sectionLabel}>HOW WE RUN YOUR SUBSCRIPTION</Text>

        <Text style={featureTitle}>
          The Original CLI &mdash; Unmodified
        </Text>
        <Text style={featureBody}>
          When you connect Claude Pro, Rebyte runs the actual Claude Code
          binary published by Anthropic. When you connect Gemini, we run the
          exact Gemini CLI binary from Google. Same binaries, same OAuth
          scopes, same endpoints &mdash; nothing is forked, patched, or
          intercepted on the critical path.
        </Text>
        <Text style={featureBody}>
          That means your subscription stays inside each platform&apos;s terms
          of service. Your tokens hit the vendor&apos;s official API directly.
          We&apos;re just the cloud computer your agent runs on &mdash; not a
          middleman on your bill.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHY THIS MATTERS</Text>

        <table
          role="presentation"
          cellPadding="0"
          cellSpacing="0"
          width="100%"
          style={{ margin: "0 0 16px" }}
        >
          <tbody>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>No double-paying.</strong> If you already have Claude
                  Pro, keep using it. Rebyte adds the cloud computer, not a
                  second subscription.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>No hidden markup.</strong> When you use credits, the
                  task detail page shows every model call, every input/output
                  token, and the exact credit cost. Audit it anytime.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Switch on any task.</strong> Pick the executor per
                  task &mdash; Claude on your subscription, Gemini on your key,
                  or an open-source agent on credits. Same workspace.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Fully reversible.</strong> Disconnect a subscription
                  or rotate a key any time from Integrations. We store
                  encrypted tokens, scoped to your org, and refresh them only
                  to keep agents running.
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        <Hr style={hr} />

        <Text style={paragraph}>
          Rebyte should be the fastest way to run real agents in the cloud
          &mdash; not another line item. Pick the billing path that fits you,
          and know exactly what you&apos;re paying for.
        </Text>

        <Button href="https://app.rebyte.ai/integrations">
          Connect Your Agent
        </Button>

        <Text style={footNote}>
          Pro plan required for Bring Your Own Subscription and Bring Your Own
          Key. Credits are available on every plan.
        </Text>
      </Section>

      <Footer />
    </Wrapper>
  );
}

/* ── Styles ── */

const section: React.CSSProperties = {
  padding: "36px 40px",
};

const paragraph: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#484848",
  margin: "16px 0",
};

const sectionLabel: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "700",
  color: "#999",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 20px",
};

const hr: React.CSSProperties = {
  borderColor: "#e6ebf1",
  margin: "32px 0",
};

const featureTitle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 12px",
};

const featureBody: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#555",
  margin: "0 0 12px",
};

/* ── Option cards ── */

const optionTable: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse" as const,
  margin: "0 0 16px",
};

const optionCell: React.CSSProperties = {
  padding: "20px 22px",
  background: "#fafbfc",
  border: "1px solid #e6ebf1",
  borderRadius: "10px",
};

const optionBadge: React.CSSProperties = {
  display: "inline-block",
  fontSize: "10px",
  fontWeight: "700",
  color: "#fff",
  borderRadius: "4px",
  padding: "3px 8px",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  marginBottom: "10px",
};

const optionTitle: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 8px",
};

const optionBody: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#555",
  margin: "0",
};

/* ── Bullet list ── */

const bulletIconTd: React.CSSProperties = {
  verticalAlign: "top" as const,
  width: "24px",
  paddingTop: "18px",
  color: "#2d8f5f",
  fontSize: "14px",
  fontWeight: "700",
};

const bulletTextTd: React.CSSProperties = {
  verticalAlign: "top" as const,
};

const bulletText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#555",
  margin: "12px 0",
};

const footNote: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: "18px",
  color: "#999",
  margin: "20px 0 0",
  textAlign: "center" as const,
};
