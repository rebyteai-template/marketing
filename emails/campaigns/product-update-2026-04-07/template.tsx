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

// "Run on Rebyte" chip — a one-click launcher with a pre-filled prompt.
// Clicking opens app.rebyte.ai/new with the skill and prompt loaded,
// mirroring the embed system at github.com/ReByteAI/run-any-skill-with-single-click
function RunChip({ prompt, label }: { prompt: string; label: string }) {
  const href = `https://app.rebyte.ai/new?prompt=${encodeURIComponent(prompt)}`;
  return (
    <Link href={href} style={chipLink}>
      <table
        role="presentation"
        cellPadding={0}
        cellSpacing={0}
        border={0}
        width="100%"
        style={chipTable}
      >
        <tbody>
          <tr>
            <td style={chipLeftCell}>
              <span style={chipBolt}>⚡</span>
              <span style={chipLabel}>{label}</span>
            </td>
            <td style={chipRightCell}>
              <span style={chipRun}>Run&nbsp;&rarr;</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Link>
  );
}

export default function ProductUpdate0407({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Run any skill from anywhere + Microsoft Office chip + Show Me How widgets">
      <Hero
        title="Weekly Update"
        ctaText="Open Rebyte"
        ctaHref="https://rebyte.ai"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          Three updates this week. The first one is the reason this email
          itself works — every orange button below is a live, one-click
          launcher for a Rebyte skill. Click any of them and a fresh task
          boots in the cloud with the skill and prompt pre-loaded.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* Feature 1 — Run Any Skill With a Single Click */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            Run Any Skill With a Single Click — From Anywhere
          </Text>
          <Text style={featureBody}>
            Every Rebyte skill is now reachable from a URL. The pattern is{" "}
            <code style={codeStyle}>
              app.rebyte.ai/new?prompt=&lt;your prompt&gt;
            </code>
            . Click it, sign in, and an agent boots in a cloud VM with the
            skill already loaded and the task already running.
          </Text>
          <Text style={featureBody}>
            Two ways to embed it. Drop a markdown badge into any README or
            blog post, or paste a one-line{" "}
            <code style={codeStyle}>&lt;script&gt;</code> tag into any
            website. Community members have already wired up skills like
            gstack (Garry Tan), last30days (Mark Van Horn), autoresearch,
            Slidev, claude-d3js, visual-explainer, and more — all
            launchable from a single click on the gallery.
          </Text>

          <Text style={chipHeader}>Try a few community skills now:</Text>

          <RunChip
            label="Data scraper: extract YC AI startups"
            prompt="Use the data-scraper skill. Scrape YCombinator's company directory and extract a list of all AI startups from the current batch — company name, one-line description, founder names, and website URL. Save as CSV."
          />
          <RunChip
            label="Last 30 Days: what the internet is saying about AI agents"
            prompt="Use the data-scraper skill and the last30days skill from github.com/mvanhorn/last30days-skill. Research what people are saying about AI coding agents (Claude Code, Cursor, Codex) across Reddit, Hacker News, and X from the last 30 days. Identify the top complaints and most-praised features."
          />
          <RunChip
            label="gstack: ship a URL shortener end-to-end"
            prompt="Use the gstack skill from github.com/garrytan/gstack. Build a simple URL shortener web app with analytics. Run the full sprint — plan, build, review, test, and deploy."
          />
        </Section>

        <Hr style={hr} />

        {/* Feature 2 — Office Chip */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            Microsoft Office: Word, Excel, PowerPoint, PDF
          </Text>
          <Text style={featureBody}>
            Type <code style={codeStyle}>/office</code> in any task and
            you get a gallery of four formats — each grouped into three
            actions: Create, Edit, and Refine.
          </Text>
          <Text style={featureBody}>
            Behind the chip are four dedicated skills. Excel builds
            three-statement financial models with linked schedules. Word
            handles SOW templates and track-changes editing. PowerPoint
            builds investor decks. PDF does form filling and OCR. Every
            file lands in your Artifacts tab and previews inline via
            Google Drive — no downloading.
          </Text>

          <Text style={chipHeader}>Try it now — one click launches the agent:</Text>

          <RunChip
            label="Create a SaaS metrics dashboard"
            prompt="Use the xlsx skill. Create a SaaS metrics dashboard spreadsheet: Overview sheet with MRR ($850K), ARR, net revenue retention (112%), and gross margin. Monthly metrics sheet tracking MRR growth, churn rate, expansion revenue, new customer acquisition by channel. Cohort retention analysis (12-month cohorts, monthly retention curves). Unit economics sheet with LTV/CAC ratio by segment, payback period, and contribution margin. Add data bars for retention, color scales for churn, line charts for MRR trend, and a waterfall chart for MRR movement."
          />
          <RunChip
            label="Build a 10-slide investor pitch deck"
            prompt="Use the pptx skill. Create a 10-slide investor pitch deck for an AI agent platform: cover slide, problem, solution, market size and opportunity, product demo, traction and metrics, business model, competitive landscape, team, and the ask. Use a clean modern design with data visualizations."
          />
          <RunChip
            label="Draft a Statement of Work"
            prompt="Use the docx skill. Create a Statement of Work (SOW) Word document for a 12-week AI integration project: project overview, scope of work with deliverables table, timeline with milestones, acceptance criteria, payment schedule ($180K total, 40/30/30 split), assumptions and constraints, change management process, and signature blocks."
          />
        </Section>

        <Hr style={hr} />

        {/* Feature 2 — Show Me How */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            Show Me How — Interactive Widgets in Chat
          </Text>
          <Text style={featureBody}>
            A new skill that lets any agent render interactive HTML
            widgets directly inside the chat — sandboxed iframes you can
            click, drag, and explore.
          </Text>
          <Text style={featureBody}>
            Ask &quot;show me how compound interest works&quot; and you
            get a live calculator with sliders. Ask &quot;chart my Q1
            revenue&quot; and you get a Chart.js bar chart. Eight
            libraries built in (Chart.js, D3, ECharts, Three.js, Mermaid,
            GSAP, p5.js, anime.js) plus eight aesthetic systems that
            refuse to look AI-generated.
          </Text>

          <Text style={chipHeader}>Try it now — one click launches the agent:</Text>

          <RunChip
            label="Compound interest calculator"
            prompt="Use the show-me-how skill. Create an interactive compound interest calculator widget with sliders for principal, annual rate, years, and compounding frequency. Show the final value, total interest earned, and a line chart of balance growth over time. Use the editorial aesthetic with the crimson-pro font pair."
          />
          <RunChip
            label="Animated explainer: how transformers work"
            prompt="Use the show-me-how skill. Create an animated GSAP explainer widget walking through how a transformer attention layer works — step by step with play/pause controls. Include the query/key/value matrices, softmax weighting, and output projection. Use the blueprint aesthetic with the ibm-plex font pair."
          />
          <RunChip
            label="Interactive chart: global AI investment"
            prompt="Use the show-me-how skill. Create an interactive Chart.js dashboard showing global AI investment from 2020-2026 broken down by region (US, China, Europe, Rest of World). Include a stacked bar chart, a line chart of total investment, and KPI cards for top regions. Use the data-dense aesthetic."
          />
        </Section>

        <Hr style={hr} />

        <Text style={paragraph}>
          Every chip above is a live launcher — the same kind of embed
          you can drop into your own README, blog, or docs. Click any of
          them, sign in if needed, and the agent takes over.
        </Text>

        <Button href="https://rebyte.ai">Open Rebyte</Button>
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
  fontSize: "18px",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 12px",
};

const featureBody: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#555",
  margin: "0 0 12px",
};

const chipHeader: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#1a1a1a",
  margin: "18px 0 10px",
};

const chipLink: React.CSSProperties = {
  display: "block",
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "12px 16px",
  margin: "0 0 10px",
  background: "#fff9f5",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#1a1a1a",
};

const chipTable: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const chipLeftCell: React.CSSProperties = {
  verticalAlign: "middle" as const,
  textAlign: "left" as const,
  paddingRight: "12px",
};

const chipRightCell: React.CSSProperties = {
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
  whiteSpace: "nowrap" as const,
  width: "1%",
};

const chipBolt: React.CSSProperties = {
  display: "inline-block",
  marginRight: "8px",
  fontSize: "14px",
  color: "#ff6b4a",
};

const chipLabel: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1a1a1a",
};

const chipRun: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#ff6b4a",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const codeStyle: React.CSSProperties = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: "13px",
  background: "#f4f4f5",
  padding: "1px 6px",
  borderRadius: "4px",
  color: "#1a1a1a",
};

