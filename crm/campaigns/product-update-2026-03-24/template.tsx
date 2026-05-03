import { Section, Text, Hr, Link, Img, Row, Column } from "@react-email/components";
import * as React from "react";
import { Wrapper } from "../../components/wrapper";
import { Hero } from "../../components/hero";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

interface ProductUpdateProps {
  name?: string;
  email?: string;
}

export default function ProductUpdate0324({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Channel support, stock analysis, and agent computers at $0.10/hr">
      <Hero
        title="Weekly Update"
        ctaText="Open Rebyte"
        ctaHref="https://rebyte.ai"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          Your agents just learned to meet people where they are — and got a lot
          cheaper to run. Here&apos;s what shipped this week.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* Feature 1 — Agent Computers */}
        <Section style={featureBlock}>
          <Row>
            <Column style={logoCol}>
              <Img
                src="https://rebyte.ai/blog-imgs/lobster-3-cloud-native.png"
                width="28"
                height="28"
                alt="Rebyte"
                style={{ borderRadius: '6px' }}
              />
            </Column>
            <Column>
              <Text style={{ ...featureTitle, margin: 0, lineHeight: '28px' }}>
                Agent Computers for the Team
              </Text>
            </Column>
          </Row>
          <Text style={featureBody}>
            Create agent computers for your team — each one gets its own
            isolated Linux VM. Give each agent computer a name, a profile,
            and specific behaviors so it acts just like a person in your
            organization.
          </Text>
          <Text style={featureBody}>
            Your marketing agent writes copy. Your research agent pulls data.
            Your ops agent monitors systems. Each has its own identity and
            its own persistent state.
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Feature 2 — Slack Integration */}
        <Section style={featureBlock}>
          <Row>
            <Column style={logoCol}>
              <Img
                src="/logos/slack.png"
                width="28"
                height="28"
                alt="Slack"
                style={{ borderRadius: '6px' }}
              />
            </Column>
            <Column>
              <Text style={{ ...featureTitle, margin: 0, lineHeight: '28px' }}>
                Slack Integration
              </Text>
            </Column>
          </Row>
          <Text style={featureBody}>
            Your agents can now live inside Slack. Anyone in your organization
            can talk to an agent without leaving their chat app — ask a
            question, kick off a task, get a report.
          </Text>
          <Text style={featureBody}>
            Also available on:
          </Text>
          <Row style={{ marginBottom: '12px' }}>
            <Column style={channelCol}>
              <Img src="/logos/telegram.png" width="20" height="20" alt="Telegram" style={channelIcon} />
              <span style={channelName}>Telegram</span>
            </Column>
            <Column style={channelCol}>
              <Img src="/logos/wechat.png" width="20" height="20" alt="WeChat" style={channelIcon} />
              <span style={channelName}>WeChat</span>
            </Column>
            <Column style={channelCol}>
              <Img src="/logos/lark.png" width="20" height="20" alt="Lark" style={channelIcon} />
              <span style={channelName}>Lark</span>
            </Column>
            <Column style={channelCol}>
              <Img src="/logos/discord.png" width="20" height="20" alt="Discord" style={channelIcon} />
              <span style={channelName}>Discord</span>
            </Column>
          </Row>
        </Section>

        <Hr style={hr} />

        {/* Feature 3 — Stock & Financial Analysis */}
        <Section style={featureBlock}>
          <Row>
            <Column style={logoCol}>
              <Img
                src="/logos/chart.png"
                width="28"
                height="28"
                alt="Stock Analysis"
                style={{ borderRadius: '6px' }}
              />
            </Column>
            <Column>
              <Text style={{ ...featureTitle, margin: 0, lineHeight: '28px' }}>
                Mega Skill: Stock &amp; Financial Analysis
              </Text>
            </Column>
          </Row>
          <Text style={featureBody}>
            We shipped a single mega skill that covers everything you need
            for stock and financial analysis: real-time prices, fundamentals,
            historical dividend data, and insights — all in one skill.
          </Text>
          <Text style={ctaLinks}>
            <Link
              href="https://x.com/rebyteai/status/2036512574947348579"
              style={link}
            >
              See it in action &rarr;
            </Link>
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={paragraph}>
          More agents, more channels, smarter skills. Give it a spin.
        </Text>

        <Button href="https://rebyte.ai">Try It Now</Button>
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
  margin: "0 0 12px",
};

const ctaLinks: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "24px",
  margin: "12px 0 0",
};

const link: React.CSSProperties = {
  color: "#1a73e8",
  fontWeight: "600",
  textDecoration: "none",
};

const logoCol: React.CSSProperties = {
  width: "40px",
  verticalAlign: "middle" as const,
};

const channelCol: React.CSSProperties = {
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
  width: "25%",
};

const channelIcon: React.CSSProperties = {
  display: "inline-block",
  verticalAlign: "middle" as const,
  marginRight: "6px",
};

const channelName: React.CSSProperties = {
  fontSize: "14px",
  color: "#555",
  verticalAlign: "middle" as const,
};
