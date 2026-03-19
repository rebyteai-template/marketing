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

export default function ProductUpdate0318({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Serverless agents, scheduled tasks, and Rebyte on your phone">
      <Hero
        title="Weekly Update"
        ctaText="Open Rebyte"
        ctaHref="https://rebyte.ai"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          Here&apos;s something I&apos;ve been doing lately: every night before
          bed, I schedule a task for 9 AM. While I&apos;m sleeping, my agent
          reads through the latest news, pulls in topics I care about, and
          generates a personalized podcast. By the time I wake up, it&apos;s
          sitting there waiting for me.
        </Text>
        <Text style={paragraph}>
          That&apos;s the kind of thing Rebyte can do now. Here&apos;s what
          made it possible.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* Feature 1 — Claw Go Serverless */}
        <Section style={featureBlock}>
          <Row>
            <Column style={logoCol}>
              <Img
                src="https://rebyte.ai/blog-imgs/lobster-3-cloud-native.png"
                width="80"
                height="80"
                alt="Claw — the Rebyte lobster"
                style={lobsterImg}
              />
            </Column>
            <Column style={titleCol}>
              <Text style={featureTitleLarge}>
                Claw Go Serverless
              </Text>
            </Column>
          </Row>
          <Text style={featureBody}>
            Imagine kicking off a big refactor — migrating a Python 2 project
            to Python 3. You hit go, close your laptop, and come back an hour
            later. The agent ran for 33 minutes across dozens of files, then
            quietly paused itself. Zero cost while it waited for you.
          </Text>
          <Text style={featureBody}>
            That&apos;s serverless agents. Each one gets its own Linux machine
            in the cloud. It runs as long as it needs — minutes, hours, whatever
            the job takes. When it&apos;s done, it snapshots everything and goes
            to sleep. When you come back, it wakes up in under half a second,
            right where it left off.
          </Text>
          <Text style={featureBody}>
            No servers to manage. No hourly bills ticking while nothing happens.
          </Text>
          <Text style={ctaLinks}>
            <Link
              href="https://rebyte.ai/blog/serverless-agents"
              style={link}
            >
              Read the full story &rarr;
            </Link>
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Feature 2 — Scheduled Tasks */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            🕐&nbsp;&nbsp;Set It Tonight, Wake Up to Results
          </Text>
          <Text style={featureBody}>
            Back to that morning podcast. Here&apos;s how it works: you tell
            your agent what to do and when. Every day at 9 AM. Every Monday
            morning. Every hour during a launch week. The agent spins up a full
            cloud environment on schedule, does the work, and shuts itself down.
          </Text>
          <Text style={featureBody}>
            Some things people are scheduling right now: daily code reviews
            that catch issues before standup. Weekly competitor research
            summaries. Nightly database health checks that page you only if
            something&apos;s wrong. Or, you know, a podcast.
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Feature 3 — Mobile */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            📱&nbsp;&nbsp;Check on Your Agents From Anywhere
          </Text>
          <Text style={featureBody}>
            That morning podcast I mentioned? I listen to it on my phone, on
            the way to the office. I open Rebyte, see that the task finished
            at 9:02 AM, and hit play.
          </Text>
          <Text style={featureBody}>
            The mobile app lets you monitor running agents, read their output,
            and kick off new tasks — all from your pocket. It&apos;s available
            now on iOS and Android.
          </Text>
          <Text style={ctaLinks}>
            <Link href="https://rebyte.ai/download" style={link}>
              Download the app &rarr;
            </Link>
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={paragraph}>
          The best part about all of this: these features work together. Schedule
          a task, let it run serverlessly, check the results from your phone.
          It&apos;s starting to feel like having a team that works while you
          don&apos;t.
        </Text>

        <Button href="https://rebyte.ai">Try It Yourself</Button>
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

const featureTitleLarge: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "800",
  color: "#1a1a1a",
  margin: "0",
  lineHeight: "80px",
};

const logoCol: React.CSSProperties = {
  width: "90px",
  verticalAlign: "middle" as const,
};

const titleCol: React.CSSProperties = {
  verticalAlign: "middle" as const,
};

const lobsterImg: React.CSSProperties = {
  borderRadius: "12px",
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
