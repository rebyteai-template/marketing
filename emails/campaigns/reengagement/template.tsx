import { Section, Text, Hr, Img } from "@react-email/components";
import * as React from "react";
import { Wrapper } from "../../components/wrapper";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

interface ReengagementProps {
  name?: string;
  email?: string;
}

export default function Reengagement({ name }: ReengagementProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Skill-powered code agent running in the cloud">
      {/* Hero */}
      <Section style={hero}>
        <table role="presentation" cellPadding="0" cellSpacing="0" style={{ margin: "0 auto 16px" }}>
          <tr>
            <td style={{ verticalAlign: "middle" }}>
              <span style={heroBrand}>Rebyte</span>
            </td>
            <td style={{ verticalAlign: "middle", paddingLeft: "8px" }}>
              <Img
                src="https://rebyte.ai/android-chrome-512x512.png"
                width="22"
                height="22"
                alt="Rebyte"
                style={{ borderRadius: "4px", display: "block" }}
              />
            </td>
          </tr>
        </table>
        <Text style={heroTitle}>Skill-Powered Code Agents in the Cloud</Text>
<table
          role="presentation"
          cellPadding="0"
          cellSpacing="0"
          style={{ margin: "0 auto" }}
        >
          <tr>
            <td align="center">
              <a href="https://rebyte.ai" style={heroCta}>
                See what&apos;s new&nbsp;&nbsp;&rarr;
              </a>
            </td>
          </tr>
        </table>
      </Section>

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          Thank you for being part of the Rebyte journey. Your early support has
          meant everything to us, and we wanted to share where we&apos;re headed
          next.
        </Text>
        <Text style={paragraph}>
          We&apos;re focused on building and running code agents in the cloud —
          giving them the same skills people need to succeed at work. Rebyte
          lets you deploy agents that don&apos;t just assist, they execute.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* Feature 1 */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            ☁️&nbsp;&nbsp;Skill-Powered Code Agents in the Cloud
          </Text>
          <Text style={featureBody}>
            Run Claude Code, Codex, Gemini CLI, OpenCode in cloud — each powered
            by your choice of model from OpenAI, Google, Anthropic, or leading
            open-source providers. Every task gets its own dedicated, fully
            isolated cloud VM equipped with pre-built skills: document
            processing, data analysis, web scraping, and complex coding.
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Feature 2 */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            🚀&nbsp;&nbsp;From Code to Production — Automatically
          </Text>
          <Text style={featureBody}>
            It doesn&apos;t stop at writing code. Once the work is done, agents
            can deploy directly to AWS — spinning up infrastructure, configuring
            services, and shipping to production without you lifting a finger.
            Build it, run it, ship it, all in one place.
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={paragraph}>
          We&apos;re just getting started. More to come soon — and we&apos;d
          love for you to be there when it launches.
        </Text>

        <Button href="https://rebyte.ai">Explore Rebyte</Button>
      </Section>

      <Footer />
    </Wrapper>
  );
}

const hero: React.CSSProperties = {
  background: "linear-gradient(180deg, #93DBFB 0%, #F5A962 100%)",
  borderRadius: "12px",
  padding: "52px 40px",
  textAlign: "center" as const,
};

const heroBrand: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#1a1a1a",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
};

const heroTitle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#1a1a1a",
  margin: "0 0 12px",
  letterSpacing: "-0.5px",
  lineHeight: "38px",
};

const heroSubtitle: React.CSSProperties = {
  fontSize: "16px",
  color: "#444",
  margin: "0 0 28px",
  lineHeight: "24px",
};

const heroCta: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#ffffff",
  color: "#1a1a1a",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "12px 28px",
};

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

const featureBlock: React.CSSProperties = {
  marginBottom: "4px",
};

const featureTitle: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 8px",
};

const featureBody: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#555",
  margin: "0",
};
