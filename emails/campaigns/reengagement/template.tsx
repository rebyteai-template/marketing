import { Section, Text, Hr } from "@react-email/components";
import * as React from "react";
import { Wrapper } from "../../components/wrapper";
import { Hero } from "../../components/hero";
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
      <Hero
        title="Skill-Powered Code Agents in the Cloud"
        ctaText="See what's new"
        ctaHref="https://rebyte.ai"
      />

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
