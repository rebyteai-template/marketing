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

export default function ProductUpdate0504({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="High-fidelity voice, recap chips, and a real mobile PWA — Rebyte is now the way you drive agents on the go.">
      <Hero
        title="Run Real Agents From Your Pocket"
        ctaText="Open Rebyte on Mobile"
        ctaHref="https://app.rebyte.ai/download"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          For the last month one of us has been running Rebyte almost
          entirely from a phone &mdash; talking to it, listening to it,
          glancing at it between meetings. The features below are the ones
          that came out of that. They land together this week.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* ── Feature 1: Voice ── */}
        <FeatureCard
          badge="VOICE"
          badgeColor="#1a1a1a"
          title="Speak to your agent in HD"
          body={
            <>
              We swapped the browser&apos;s default text-to-speech for
              OpenAI&apos;s <strong>tts-1</strong> &mdash; same voice your
              agent uses everywhere, finally without the robot accent. Every
              assistant reply now has a <strong>Read-Aloud</strong> button:
              tap it and Rebyte summarizes the response and plays it back as
              MP3. Transcription got sharper too &mdash; raw speech goes
              through a 2-second polish pass before it hits your prompt.
            </>
          }
        />

        {/* ── Feature 2: Recap ── */}
        <FeatureCard
          badge="RECAP"
          badgeColor="#2d5f8f"
          title="Instant TL;DR for every reply"
          body={
            <>
              Wrap a one-line summary in <code style={inlineCode}>&lt;recap&gt;...&lt;/recap&gt;</code>{" "}
              and Rebyte renders it as a compact chip in the chat &mdash;
              right above the full response. Skim a long agent run by
              reading just the chips, or tap the playback button and{" "}
              <strong>listen</strong> while you&apos;re doing something else.
              Works on web, desktop, and mobile.
            </>
          }
        />

        {/* ── Feature 3: Mobile PWA ── */}
        <FeatureCard
          badge="MOBILE"
          badgeColor="#ff6b4a"
          title="Add to home screen, never miss a task"
          body={
            <>
              The new <strong>Download page</strong> walks you through
              installing Rebyte as a Progressive Web App on iOS and Android
              &mdash; same icon, same launch, same notifications as a native
              app. Inside the app, the task list now polls live on mobile
              (no more stale spinners), and scheduled tasks are tagged with
              a repeat icon across every list.
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
                  <strong>Agents you can listen to.</strong> A real cloud
                  agent often runs for minutes. With Read-Aloud and recap
                  chips, you can fire one off, lock your phone, and catch
                  the result while walking.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Skim long runs.</strong> A 200-line response with
                  a 12-word recap is a 12-word response when you want it to
                  be. Drill down only when it matters.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>The mobile PWA is first-class.</strong> Same task
                  tracking, same notifications, same status icons as the
                  desktop app &mdash; no second-class polling, no stale
                  list.
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        <Hr style={hr} />

        <Text style={paragraph}>
          We wrote up a month of building Rebyte from a phone &mdash; what
          worked, what didn&apos;t, why these three features mattered.
        </Text>

        <Button href="https://rebyte.ai/blog/a-month-of-building-rebyte-from-my-phone">
          Read: A Month of Building Rebyte From My Phone
        </Button>

        <Text style={footNote}>
          The mobile PWA install flow is on{" "}
          <a href="https://rebyte.ai/download" style={link}>
            rebyte.ai/download
          </a>
          . Read-Aloud and Recap chips are live on every plan.
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

const inlineCode: React.CSSProperties = {
  background: "#f3f4f6",
  border: "1px solid #e6ebf1",
  borderRadius: "4px",
  padding: "1px 6px",
  fontFamily:
    "'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
  fontSize: "13px",
  color: "#1a1a1a",
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
