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

export default function ProductUpdate0329({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Agent Context for enterprise data, embeddable skills for any website">
      <Hero
        title="Weekly Update"
        ctaText="Open Rebyte"
        ctaHref="https://rebyte.ai"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          This week your agents got smarter about your data — and your skills
          can now run from anywhere on the web. Here&apos;s what shipped.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* Feature 1 — Agent Context */}
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
                Agent Context — Your Data, Your Agents
              </Text>
            </Column>
          </Row>
          <Text style={featureBody}>
            Agent Context connects your agents directly to your databases,
            cloud storage, and data lakes. Every agent computer gets a
            built-in context skill that can query PostgreSQL, MySQL,
            Snowflake, S3, GCS, and more — no extra setup needed.
          </Text>
          <Text style={featureBody}>
            A unified context server UI lets you manage all your sources
            and cached views in one tree. Filter by source type, set up
            automatic refresh schedules (5m to 24h), or trigger refreshes
            via webhook from your own pipelines.
          </Text>
          <Text style={featureBody}>
            Under the hood, Apache DataFusion handles SQL with full support
            for window functions, CTEs, joins, and subqueries — with
            intelligent query push-down to your source databases for speed.
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Feature 2 — Embed / Run on Rebyte */}
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
                Embed: Run Skills From Any Website
              </Text>
            </Column>
          </Row>
          <Text style={featureBody}>
            Drop a single script tag on any page and your visitors get a
            &quot;Run on Rebyte&quot; button that launches a skill in the
            cloud. No backend required — just paste the embed snippet and
            your skill runs natively on Rebyte infrastructure.
          </Text>
          <Text style={featureBody}>
            The embed system handles everything: pre-filled prompts,
            partner attribution tracking, and a draft system that
            persists the user&apos;s intent through sign-in so nothing
            gets lost. Configure it all from the new embed page at
            rebyte.ai/embed.
          </Text>
          <Text style={ctaLinks}>
            <Link
              href="https://rebyte.ai/embed"
              style={link}
            >
              Set up your embed &rarr;
            </Link>
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={paragraph}>
          Connect your data, embed your skills everywhere. Give it a spin.
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
