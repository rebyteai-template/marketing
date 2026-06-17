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

export default function AgentManagementApi({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Everything you do in Rebyte by hand is now a REST API. One key, and your code can run a whole fleet of agents — each on its own cloud computer.">
      <Hero
        title="Manage a Fleet of Agents From Your Code"
        ctaText="Read the API Docs"
        ctaHref="https://rebyte.ai/docs"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          Everything you do in Rebyte by hand &mdash; spin up an agent,
          give it a repo and a set of skills, watch it work &mdash; is now
          a REST API. One key, and your own code can run a whole fleet of
          agents, each on its own isolated cloud computer. Think of it as a
          drop-in replacement for running Claude Code yourself, or for a
          single-vendor managed-agent API &mdash; without being locked to
          one model.
        </Text>

        <Hr style={hr} />

        <Text style={philosophyLabel}>THE IDEA</Text>
        <Text style={philosophyHeading}>Agents as infrastructure.</Text>
        <Text style={philosophyBody}>
          Not a chat box you sit in front of &mdash; a resource your
          backend provisions, drives, and tears down on demand. You bring
          the prompt, the repo, and the skills; Rebyte runs the agent loop,
          the sandbox, and the tools underneath. You manage agents the way
          you&apos;d manage processes &mdash; without building any of the
          machinery.
        </Text>

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* ── Card 1: Create ── */}
        <FeatureCard
          badge="CREATE"
          badgeColor="#1a1a1a"
          title="One key, a fleet of agents"
          body={
            <>
              <span style={kbd}>POST /v1/tasks</span> with a prompt, a
              GitHub repo, and the skills you want &mdash; Rebyte
              provisions a fresh <strong>agent computer</strong> (its own
              CPU, memory, and disk) and kicks off the run. No CLI, no
              local setup, no queue. Fire off as many as you need; each
              gets its own machine and runs concurrently.
            </>
          }
        />

        {/* ── Card 2: Model-agnostic (the differentiator) ── */}
        <FeatureCard
          badge="MODEL-AGNOSTIC"
          badgeColor="#ff6b4a"
          title="Claude Code, Codex — your call"
          body={
            <>
              This is the one thing a single-vendor agent API can&apos;t
              give you: choose the harness per task. Run{" "}
              <strong>Claude Code</strong>, the{" "}
              <strong>Codex SDK</strong>, <strong>Gemini</strong>, or{" "}
              <strong>opencode</strong> across a dozen open models &mdash;
              all behind the same endpoint and the same key. Switch agents
              by changing one field (<span style={kbd}>executor</span>),
              not your integration.
            </>
          }
        />

        {/* ── Card 3: Control ── */}
        <FeatureCard
          badge="CONTROL"
          badgeColor="#2d5f8f"
          title="Steer and monitor every run"
          body={
            <>
              Follow up to steer a run with{" "}
              <span style={kbd}>POST /v1/tasks/:id/prompts</span>, or reuse
              a <strong>workspaceId</strong> to keep the repo and git state
              warm for the next task. Poll{" "}
              <span style={kbd}>GET /v1/tasks/:id</span> for a status
              derived from every prompt &mdash; running, completed, failed
              &mdash; so you always know where each agent stands. Flip a
              task to <strong>public</strong> for a read-only share link.
            </>
          }
        />

        {/* ── Card 4: Integrate ── */}
        <FeatureCard
          badge="INTEGRATE"
          badgeColor="#1a1a1a"
          title="Get notified, not blocked"
          body={
            <>
              Skip polling with signed <strong>webhooks</strong>{" "}
              (RSA-SHA256) on <span style={kbd}>task.completed</span> and{" "}
              <span style={kbd}>task.failed</span>, and feed inputs in
              through the Files API with one-time signed upload URLs. Your
              agents stop being a window you watch and become a step in
              your pipeline &mdash; CI, cron, or your own product.
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
                  <strong>No infrastructure to run.</strong> Each task is
                  an isolated cloud computer Rebyte provisions and tears
                  down. You manage agents, not servers.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Concurrency by default.</strong> No queue &mdash;
                  fire off hundreds of tasks and each runs on its own
                  machine. Scaling out is just another API call.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Drop-in, not rebuild.</strong> If you already
                  script Claude Code or a managed-agent API, you&apos;re a
                  few endpoints away &mdash; same mental model, more models,
                  no lock-in to a single vendor.
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        <Hr style={hr} />

        <Text style={paragraph}>
          Grab a key in <strong>Settings &rarr; API Keys</strong> and your
          first agent is one <span style={kbd}>curl</span> away. The full
          reference &mdash; tasks, follow-ups, webhooks, and files &mdash;
          is in the docs.
        </Text>

        <Button href="https://rebyte.ai/docs">Read the API Docs</Button>

        <Text style={footNote}>
          Available on every plan. Executors: Claude Code, Codex, Gemini,
          opencode. Get your key at{" "}
          <a href="https://app.rebyte.ai/settings/api-keys" style={link}>
            app.rebyte.ai/settings/api-keys
          </a>
          .
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

const link: React.CSSProperties = {
  color: "#2d5f8f",
  textDecoration: "underline",
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
