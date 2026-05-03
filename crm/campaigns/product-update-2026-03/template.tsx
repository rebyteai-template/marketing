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

export default function ProductUpdate({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="This week: 4 agents, 2-second boot, Anthropic professional skills">
      <Hero
        title="Rebyte Product Update"
        ctaText="Try it now"
        ctaHref="https://rebyte.ai"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          Here&apos;s what we shipped this month. Three big updates that make
          Rebyte the fastest way to run AI code agents in the cloud.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* Feature 1 — Four agents, many models */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            🧩&nbsp;&nbsp;Four Agents, One Platform
          </Text>
          <Text style={featureBody}>
            Rebyte now fully supports <strong>Claude Code</strong>,{" "}
            <strong>Codex</strong>, <strong>Gemini CLI</strong>, and{" "}
            <strong>Open Code</strong> — all running in isolated cloud VMs. Pick
            the agent you like, then pair it with any model:
          </Text>
          <Text style={modelList}>
            <strong>Anthropic</strong> — Claude Opus 4.6, Claude Sonnet 4.6
            <br />
            <strong>OpenAI</strong> — GPT-5.3 Codex
            <br />
            <strong>Google</strong> — Gemini 3.1 Pro, Gemini 3 Flash
            <br />
            <strong>Open-source</strong> — Qwen 3 Max, Kimi 2.5, GLM 5, Minimax
            M2.5
          </Text>
          <Text style={featureBody}>
            Mix and match freely — one workspace, every frontier model.
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Feature 2 — 2-second startup */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            ⚡&nbsp;&nbsp;Lightning VM Boot
          </Text>
          <Text style={featureBody}>
            We re-architected our VM runtime so almost every agent now boots in
            under two seconds. No more waiting for environments to spin up —
            click run and your agent is already working.
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Feature 3 — Anthropic professional skills */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            🛠️&nbsp;&nbsp;Anthropic Professional Skills, Built In
          </Text>
          <Text style={featureBody}>
            When Anthropic released their professional-grade skills — covering
            entire job functions, not just prompts — the market noticed (SaaS
            stocks felt the impact). We integrated every category into Rebyte on
            day one:
          </Text>
          <Text style={skillList}>
            Sales &middot; Data &middot; Finance &middot; Legal &middot;
            Marketing &middot; Product &middot; Support &middot; Search &middot;
            Productivity &middot; Bio Research
          </Text>
          <Text style={featureBody}>
            Your cloud agents can now handle the same professional work that used
            to require a stack of specialized SaaS tools — from sales outreach
            to legal review to bio research.
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={paragraph}>
          These updates are live now. Spin up a task and see the difference.
        </Text>

        <Button href="https://rebyte.ai">Launch a Task</Button>
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

const modelList: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#555",
  margin: "12px 0",
  padding: "12px 16px",
  backgroundColor: "#f8f9fa",
  borderRadius: "6px",
  borderLeft: "3px solid #93DBFB",
};

const skillList: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#555",
  margin: "12px 0",
  padding: "12px 16px",
  backgroundColor: "#f8f9fa",
  borderRadius: "6px",
  borderLeft: "3px solid #F5A962",
};
