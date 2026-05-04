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
    <Wrapper preview="Install Rebyte as a real app on your phone, then run your company without ever opening a laptop again — voice in, voice out.">
      <Hero
        title="Run Your Company From Your Pocket"
        ctaText="Install Rebyte on Your Phone"
        ctaHref="https://rebyte.ai/download"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          Last month one of us ran most of Rebyte&apos;s company from a
          phone &mdash; talking to agents on the way to lunch, listening to
          results between meetings, never opening a laptop. Three changes
          shipped this week to make that the default.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* ── Feature 1: Mobile / PWA ── */}
        <FeatureCard
          badge="MOBILE"
          badgeColor="#1a1a1a"
          title="Install Rebyte as a real app, in 10 seconds"
          body={
            <>
              The new <strong>Download page</strong> walks you through
              Add-to-Home-Screen for iOS Safari and Android Chrome. Once
              installed it&apos;s a real PWA: home-screen icon, full-screen
              launch, push notifications, and &mdash; new this week &mdash;
              live-polling status on every task list, plus a repeat icon for
              your scheduled tasks across every screen.
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
        <Text style={philosophyHeading}>Everything is voice.</Text>
        <Text style={philosophyBody}>
          Typing and reading are friction. If you&apos;re running an agent
          while walking, driving, or watching your kid &mdash; you
          can&apos;t. So both directions are voice now: you talk to your
          agent, and you listen to the result. The next two features are
          how that works in practice.
        </Text>

        {/* ── Feature 2: Voice ── */}
        <FeatureCard
          badge="VOICE"
          badgeColor="#2d5f8f"
          title="Speak in, listen out"
          body={
            <>
              <strong>Speak in:</strong> raw speech now goes through a
              quick polish pass before it lands in your prompt &mdash;
              cleaner punctuation, fixed names, no &ldquo;uh&rdquo;s.
              Faster than re-recording.
              <br />
              <br />
              <strong>Listen out:</strong> every assistant reply has a{" "}
              <strong>Read-Aloud</strong> button. Tap it and Rebyte
              summarizes the response and plays the summary as MP3 in your
              system&apos;s native voice player &mdash; lock your phone,
              keep walking, hear the answer.
            </>
          }
        />

        {/* ── Feature 3: Recap ── */}
        <FeatureCard
          badge="RECAP"
          badgeColor="#ff6b4a"
          title="The 12-word version, on tap"
          body={
            <>
              Most replies now ship with a one-line summary chip pinned to
              the top of the message. It&apos;s the answer in twelve words
              &mdash; what changed, what shipped, what to do next. Tap the
              chip&apos;s play button to hear it instead of read it.
              <br />
              <br />
              The point: you can scroll a 30-message agent run and{" "}
              <strong>read only the chips</strong>, or play them back to
              back like a voice digest. Drill into the long version only
              when the chip says it matters.
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
                  <strong>Run agents from anywhere.</strong> Cloud agents
                  often take minutes. With voice in, voice out, and a
                  home-screen icon, you fire one off and your phone
                  delivers the result like a notification.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Skim by ear.</strong> A long run becomes ten
                  twelve-word chips. Read them or play them &mdash; you
                  decide whether to commit to the full reply.
                </Text>
              </td>
            </tr>
            <tr>
              <td style={bulletIconTd}>&#10003;</td>
              <td style={bulletTextTd}>
                <Text style={bulletText}>
                  <strong>Mobile is first-class now.</strong> Same task
                  tracking, same notifications, same status icons as the
                  desktop app. The phone is no longer a degraded view.
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        <Hr style={hr} />

        <Text style={paragraph}>
          We wrote up a month of running Rebyte from a phone &mdash; what
          worked, what didn&apos;t, why these three things mattered.
        </Text>

        <Button href="https://rebyte.ai/blog/a-month-on-my-phone">
          Read: A Month of Building Rebyte From My Phone
        </Button>

        <Text style={footNote}>
          Install instructions and the install button are at{" "}
          <a href="https://rebyte.ai/download" style={link}>
            rebyte.ai/download
          </a>
          . Voice and Recap chips are live on every plan.
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
