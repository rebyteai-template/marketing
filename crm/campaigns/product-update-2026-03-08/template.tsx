import { Section, Text, Hr, Link } from "@react-email/components";
import * as React from "react";
import { Wrapper } from "../../components/wrapper";
import { Hero } from "../../components/hero";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

interface ProductUpdateProps {
  name?: string;
  email?: string;
}

export default function ProductUpdate0308({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="This week: Rebyte goes mobile + why every agent needs a box">
      <Hero
        title="Weekly Update"
        ctaText="Open Rebyte"
        ctaHref="https://rebyte.ai"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          Two updates this week — one you can hold in your hand, and one worth
          reading with your morning coffee.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* Feature 1 — Go Mobile */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            📱&nbsp;&nbsp;Rebyte Goes Mobile
          </Text>
          <Text style={featureBody}>
            You can now launch and monitor your cloud agents from anywhere.
            Rebyte is available on <strong>iOS</strong> (TestFlight) and{" "}
            <strong>Android</strong> — check task progress, view agent output,
            and kick off new work straight from your phone.
          </Text>
          <Text style={featureBody}>
            Same cloud VMs, same agents, pocket-sized.
          </Text>
          <Text style={downloadLinks}>
            <Link href="https://rebyte.ai/download" style={link}>
              Download for iOS &amp; Android &rarr;
            </Link>
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Feature 2 — Blog post */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            📖&nbsp;&nbsp;New Blog: &ldquo;Why Every Agent Needs a Box&rdquo;
          </Text>
          <Text style={featureBody}>
            AI coding agents are evolving from local dev tools into enterprise
            productivity systems. But running them on your laptop has hard
            limits — no isolation, no parallelism, no collaboration.
          </Text>
          <Text style={featureBody}>
            Our latest post breaks down what a production-ready agent sandbox
            actually requires: sub-second startup, persistent state, on-demand
            scaling, self-identity, and network-level security. We compare
            approaches from Anthropic, E2B, Daytona, Modal, and Alibaba — and
            explain how Rebyte&apos;s 1-VM-per-task model achieves 100–500ms
            snapshot restores.
          </Text>
          <Text style={downloadLinks}>
            <Link
              href="https://rebyte.ai/blog/agentic-sandbox"
              style={link}
            >
              Read the full post &rarr;
            </Link>
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={paragraph}>
          That&apos;s it for this week. Try the mobile app and let us know what
          you think.
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
  margin: "0 0 12px",
};

const downloadLinks: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "24px",
  margin: "12px 0 0",
};

const link: React.CSSProperties = {
  color: "#1a73e8",
  fontWeight: "600",
  textDecoration: "none",
};
