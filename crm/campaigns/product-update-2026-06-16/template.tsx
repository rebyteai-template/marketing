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

function FeatureCard({
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
      style={featureTable}
    >
      <tbody>
        <tr>
          <td style={featureCell}>
            <span style={{ ...featureBadge, background: badgeColor }}>
              {badge}
            </span>
            <Text style={featureCardTitle}>{title}</Text>
            <Text style={featureCardBody}>{body}</Text>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default function ProductUpdate0616({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Your agent is no longer a generic chatbot. Give it a job description, a toolbox, and rules for when to check with you — then let it work.">
      <Hero
        title="Hire Your AI Coworker"
        ctaText="Meet Your Coworkers"
        ctaHref="https://rebyte.ai"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          We rebuilt Rebyte around one idea: an agent should feel less
          like a chatbot you prompt and more like a coworker you onboard.
          This update is the first half of that &mdash; you can now give
          each agent its own instructions, its own tools, and rules for
          when to check with you before it acts.
        </Text>

        <Hr style={hr} />

        <Text style={philosophyLabel}>THE SHIFT</Text>
        <Text style={philosophyHeading}>From chatbot to coworker.</Text>
        <Text style={philosophyBody}>
          A chatbot waits for the next message. A coworker has a role, a
          set of tools it&apos;s trusted with, and the judgment to ask
          before doing something risky. Everything below is about closing
          that gap.
        </Text>

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* ── Feature 1: Per-workspace agent config ── */}
        <FeatureCard
          badge="CONFIGURE"
          badgeColor="#1a1a1a"
          title="Give each agent a job description"
          body={
            <>
              Every workspace agent now carries its own{" "}
              <strong>system prompt</strong> and its own{" "}
              <strong>tool set</strong>. Tell the marketing agent how your
              brand sounds; hand the ops agent a runbook to follow. The
              instructions stick to that workspace, so you stop
              re-explaining the same context at the start of every task.
            </>
          }
        />

        {/* ── Feature 2: MCP tools / catalog ── */}
        <FeatureCard
          badge="TOOLS"
          badgeColor="#2d5f8f"
          title="Hand it the right tools"
          body={
            <>
              Agents now boot with a curated set of tools switched on by
              default, and you can add more from the{" "}
              <strong>MCP catalog</strong> &mdash; connect a service once
              and every agent in the workspace can reach it. Toggle
              individual tools on or off per workspace, so an agent only
              ever uses what you&apos;ve actually trusted it with.
            </>
          }
        />

        {/* ── Feature 3: Blocked actions + ask_user_question ── */}
        <FeatureCard
          badge="CONTROL"
          badgeColor="#ff6b4a"
          title="It asks before it acts"
          body={
            <>
              Sensitive steps now pause instead of guessing. When an agent
              hits a gated action &mdash; or simply isn&apos;t sure what
              you want &mdash; it surfaces a card, asks the question with{" "}
              <span style={kbd}>ask_user_question</span>, and waits. You
              answer, and it resumes exactly where it left off. No more
              finding out after the fact that it took the wrong branch.
            </>
          }
        />

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
                  <strong>Context lives in the workspace.</strong> Set the
                  instructions and tools once; every task inherits them.
                  Stop pasting the same preamble into every prompt.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Trust is scoped, not all-or-nothing.</strong> An
                  agent can only use the tools you&apos;ve enabled and
                  pauses on the actions you&apos;ve gated &mdash; capable
                  without being a loose cannon.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>You stay in the loop by default.</strong>{" "}
                  Asking for confirmation is on out of the box, so the
                  agent checks in at the moments that matter instead of
                  barreling ahead.
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        <Hr style={hr} />

        <Text style={paragraph}>
          This is the foundation for what&apos;s coming next: specialized
          agents that work together as a team. It&apos;s live now in your
          workspace settings &mdash; give your agent a role and a toolbox,
          and see how different it feels to delegate.
        </Text>

        <Button href="https://rebyte.ai">Configure Your Agent</Button>

        <Text style={footNote}>
          Available on every plan. Rebyte now runs the latest models too
          &mdash; Claude Opus 4.8 and DeepSeek V4 Pro.
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

const philosophyLabel: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "700",
  color: "#ff6b4a",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px",
};

const philosophyHeading: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 14px",
  lineHeight: "30px",
};

const philosophyBody: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#484848",
  margin: "0 0 28px",
};

const hr: React.CSSProperties = {
  borderColor: "#e6ebf1",
  margin: "32px 0",
};

const kbd: React.CSSProperties = {
  display: "inline-block",
  background: "#f3f4f6",
  border: "1px solid #d1d5db",
  borderRadius: "4px",
  padding: "1px 7px",
  fontFamily: "'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
  fontSize: "13px",
  color: "#1a1a1a",
  fontWeight: "600",
};

/* ── Feature cards ── */

const featureTable: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse" as const,
  margin: "0 0 16px",
};

const featureCell: React.CSSProperties = {
  padding: "20px 22px",
  background: "#fafbfc",
  border: "1px solid #e6ebf1",
  borderRadius: "10px",
};

const featureBadge: React.CSSProperties = {
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

const featureCardTitle: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 8px",
};

const featureCardBody: React.CSSProperties = {
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
