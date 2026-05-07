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
    <Wrapper preview="The phone is not a coding device — it's a remote control for a fleet of cloud agents. Three things shipped this week to make that real.">
      <Hero
        title="Control Your Agents From The Pocket"
        ctaText="Install Rebyte on Your Phone"
        ctaHref="https://rebyte.ai/download"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          For the last thirty days one of us shipped Rebyte &mdash; every
          service, every deploy, every production fix &mdash; without
          opening a laptop. Not because phones are good for coding. Because
          once the system on the other end is right, the phone is enough.
          Three pieces of that system landed this week.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* ── Feature 1: Mobile / PWA ── */}
        <FeatureCard
          badge="MOBILE"
          badgeColor="#1a1a1a"
          title="Install the remote"
          body={
            <>
              The new <strong>Download page</strong> walks you through
              Add-to-Home-Screen for iOS Safari and Android Chrome. The PWA
              had to feel native enough that you stop thinking about the
              difference: fast load, full-screen launch, push
              notifications, live-polling task status, repeat icons on
              every scheduled run. This is what turns your phone into a
              real remote control for the fleet.
              <br />
              <br />
              <strong>iPhone (Safari):</strong> tap{" "}
              <span style={kbd}>Share</span> &rarr;{" "}
              <span style={kbd}>Add to Home Screen</span>.
              <br />
              <strong>Android (Chrome):</strong> tap{" "}
              <span style={kbd}>&#8942;</span> &rarr;{" "}
              <span style={kbd}>Install app</span>.
            </>
          }
        />

        <Hr style={hr} />

        <Text style={philosophyLabel}>PHILOSOPHY</Text>
        <Text style={philosophyHeading}>Mouth in, ear out.</Text>
        <Text style={philosophyBody}>
          On a phone, sustained typing is the wrong interaction. On a
          phone, sustained reading is too. So the loop is voice on both
          ends: you talk to the agent, and you listen to what it did.
          Mid-walk, mid-drive, mid-coffee. No screen attention required.
        </Text>

        {/* ── Feature 2: Voice ── */}
        <FeatureCard
          badge="VOICE"
          badgeColor="#2d5f8f"
          title="Type-less in, spoken back"
          body={
            <>
              <strong>Type-less in:</strong> the composer assumes
              you&apos;re dictating. Raw speech runs through a 2-second
              polish pass before it lands as your prompt &mdash; cleaner
              punctuation, fixed names, no &ldquo;uh&rdquo;s. Faster than
              re-recording, more honest than guessing.
              <br />
              <br />
              <strong>Spoken back:</strong> every assistant reply has a
              Read-Aloud button. Tap it and Rebyte compresses the response
              into a paragraph a TTS voice can speak in a way you can
              actually understand &mdash; not a wall of code, but the
              decision: ship, retry, ignore. Lock your phone, keep moving.
            </>
          }
        />

        {/* ── Feature 3: Scheduled skills ── */}
        <FeatureCard
          badge="SCHEDULE"
          badgeColor="#ff6b4a"
          title="The unseen half"
          body={
            <>
              The visible half of running a product is the conversations.
              The unseen half is everything that keeps running when you
              say nothing &mdash; tests, checks, log scans, monitors. We
              now run a wall of those as scheduled skills, each with one
              job and its own clock: <strong>hourly golden tests against
              production</strong>, <strong>log scans by error
              signature</strong>, single-purpose monitors for stuck VMs,
              certificate expiry, queue depth. By the time you open the
              phone in the morning, the system has already decided what
              actually deserves your attention.
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
                  <strong>The phone replaces the dashboard.</strong> Once
                  voice-in / voice-out works and the PWA feels native, you
                  stop reaching for the laptop just to check on things.
                  Walk and steer, instead of sit and stare.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Most of the work runs without you.</strong> A
                  scheduled skill that runs every hour and reports only on
                  change is worth more than a dashboard you have to
                  remember to open.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>You stay management, not engineering.</strong>{" "}
                  Steering a system through summaries and read-backs
                  instead of windows and terminals is direct enough to
                  move quickly, abstract enough that you&apos;re not
                  trapped in the machinery.
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        <Hr style={hr} />

        <Text style={paragraph}>
          The full story &mdash; the fleet of specialized cloud VMs, how
          they share memory through a GitHub repo, what a sandbox can and
          cannot do, why it works at all &mdash; is in this week&apos;s
          essay.
        </Text>

        <Button href="https://rebyte.ai/blog/a-month-on-my-phone">
          Read: A Month of Building Rebyte From My Phone
        </Button>

        <Text style={footNote}>
          Install the PWA at{" "}
          <a href="https://rebyte.ai/download" style={link}>
            rebyte.ai/download
          </a>
          . Voice and scheduled skills are live on every plan.
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
  fontFamily:
    "'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
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
