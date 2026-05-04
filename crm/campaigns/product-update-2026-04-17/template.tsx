import { Section, Text, Hr, Link, Img } from "@react-email/components";
import * as React from "react";
import { Wrapper } from "../../components/wrapper";
import { Hero } from "../../components/hero";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

interface ProductUpdateProps {
  name?: string;
  email?: string;
}

const GCS = "https://storage.googleapis.com/rebyte-slide-styles";

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
              <span style={chipBolt}>&#9889;</span>
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

function StyleCard({
  id,
  label,
  description,
}: {
  id: string;
  label: string;
  description: string;
}) {
  return (
    <td style={styleCardTd}>
      <Link
        href={`https://app.rebyte.ai/new?prompt=${encodeURIComponent(`Create a slide deck using the ${id} HTML slide style. Topic: company quarterly review with key metrics, team highlights, and next quarter goals.`)}`}
        style={styleCardLink}
      >
        <Img
          src={`${GCS}/${id}/latest/thumbnail.webp`}
          width="220"
          height="124"
          alt={label}
          style={styleCardImg}
        />
        <span style={styleCardLabel}>{label}</span>
        <span style={styleCardDesc}>{description}</span>
      </Link>
    </td>
  );
}

export default function ProductUpdate0417({ name }: ProductUpdateProps) {
  const lastName = name ? name.trim().split(" ").pop() : "there";
  const displayName = lastName || "there";

  return (
    <Wrapper preview="Slides on Rebyte: 16 designer styles, two rendering modes, click-to-edit — make exceptional slides effortlessly">
      <Hero
        title="Make Exceptional Slides Effortlessly"
        ctaText="Try Slides"
        ctaHref="https://app.rebyte.ai/new?prompt=Create%20a%20slide%20deck"
      />

      {/* Body */}
      <Section style={section}>
        <Text style={paragraph}>Hey {displayName},</Text>
        <Text style={paragraph}>
          This week is all about slides. We shipped a complete presentation
          system inside Rebyte — describe what you need, pick a style, and an
          agent builds a polished deck in minutes. Two rendering paths, 16+
          designer templates, and a visual editor that lets you click any
          element to refine it.
        </Text>

        <Hr style={hr} />

        <Text style={sectionLabel}>WHAT&apos;S NEW</Text>

        {/* ── Feature 1: Create & Edit ── */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            Create and Edit Slides From a Single Prompt
          </Text>
          <Text style={featureBody}>
            Type what you want — &quot;investor pitch for a climate-tech
            startup&quot; or &quot;team onboarding walkthrough&quot; — and the
            agent scaffolds an outline, asks a few clarifying questions
            (audience, slide count, style), then generates the full deck.
          </Text>
          <Text style={featureBody}>
            Need to change one slide? Click it. The visual editor highlights
            every editable element. Click text, images, or charts and the
            agent surgically updates that single element without regenerating
            the rest of the deck.
          </Text>

          <Text style={chipHeader}>Try it now:</Text>

          <RunChip
            label="Investor pitch: climate-tech startup"
            prompt="Create a 10-slide investor pitch deck for a climate-tech startup that turns industrial waste heat into grid-scale electricity. Cover: problem, solution, market size, technology, traction, team, business model, competition, financials, and the ask. Use the neon-telemetry HTML slide style."
          />
          <RunChip
            label="Team onboarding walkthrough"
            prompt="Create a slide deck for onboarding new engineering hires. Cover: company mission, team structure, dev workflow and tools, code review culture, first-week checklist, key contacts. Use the notion HTML slide style."
          />
        </Section>

        <Hr style={hr} />

        {/* ── Feature 2: Two Modes ── */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            Two Rendering Modes: HTML and Image
          </Text>

          <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" style={{ marginBottom: "16px" }}>
            <tbody>
              <tr>
                <td style={modeBadgeTdHtml}>
                  <span style={modeBadgeText}>HTML Mode</span>
                </td>
                <td style={modeDescTd}>
                  <Text style={modeDescText}>
                    Pixel-perfect text, editable elements, live CSS variables.
                    Click any element to refine it in place. Export to PDF or
                    present fullscreen.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>

          <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" style={{ marginBottom: "16px" }}>
            <tbody>
              <tr>
                <td style={modeBadgeTdImage}>
                  <span style={modeBadgeText}>Image Mode</span>
                </td>
                <td style={modeDescTd}>
                  <Text style={modeDescText}>
                    AI-generated visuals from prompts. 17 presets from
                    pixel-art to watercolor, plus 500+ custom combos across
                    texture, mood, typography, and density.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>

          <Text style={featureBody}>
            Both modes produce sequential PNGs for the gallery view, support
            PDF export, and work with the same outline-first workflow. Pick
            the mode that fits your content — or let the agent decide.
          </Text>

          <Text style={chipHeader}>Try each mode:</Text>

          <RunChip
            label="HTML: product launch announcement"
            prompt="Create a slide deck using the bright-collage HTML slide style. Topic: product launch announcement for a new AI writing assistant — features, pricing tiers, launch timeline, and press quotes."
          />
          <RunChip
            label="Image: watercolor travel journal"
            prompt="Create a slide deck using the watercolor image slide style. Topic: a travel journal of a 10-day trip through Japan — Tokyo, Kyoto, Osaka, Hakone. One slide per city with key highlights."
          />
        </Section>

        <Hr style={hr} />

        {/* ── Feature 3: Templates Gallery ── */}
        <Section style={featureBlock}>
          <Text style={featureTitle}>
            16 Designer Templates — Pick Your Aesthetic
          </Text>
          <Text style={featureBody}>
            Every template ships with a full manifest of design tokens, font
            stacks, color palettes, signature moves, and a reference deck. The
            agent follows the template system precisely — no generic slides.
          </Text>
        </Section>

        {/* Thumbnail grid: 2 columns x 4 rows = 8 featured styles */}
        <table
          role="presentation"
          cellPadding="0"
          cellSpacing="0"
          width="100%"
          style={styleGrid}
        >
          <tbody>
            <tr>
              <StyleCard
                id="neon-telemetry"
                label="Neon Telemetry"
                description="Dark ops-center, cyan+magenta neon"
              />
              <StyleCard
                id="botanical-treatise"
                label="Botanical Treatise"
                description="Victorian scientific plate"
              />
            </tr>
            <tr>
              <StyleCard
                id="bright-collage"
                label="Bright Collage"
                description="Memphis/Bauhaus, primary blocks"
              />
              <StyleCard
                id="isometric-roadmap"
                label="Isometric Roadmap"
                description="3D plinths, pastel ribbons"
              />
            </tr>
            <tr>
              <StyleCard
                id="pastel-kpi"
                label="Pastel KPI"
                description="Dashboard metric cards"
              />
              <StyleCard
                id="editorial-serif"
                label="Editorial Serif"
                description="Warm cream, italic serif, gold"
              />
            </tr>
            <tr>
              <StyleCard
                id="dark-atmospheric"
                label="Dark Atmospheric"
                description="Cinematic, huge italic serif"
              />
              <StyleCard
                id="blueprint"
                label="Blueprint"
                description="Graph paper, cyan annotations"
              />
            </tr>
          </tbody>
        </table>

        <Text style={moreStyles}>
          + 8 more styles: Corporate, Notion, Mono Terminal, Research Brief,
          Technical Explainer, Playful Card, Sport Bold, Minimal Executive
        </Text>

        <Hr style={hr} />

        <Text style={paragraph}>
          Slides are live now. Describe what you need, pick a style from the
          gallery, and let the agent handle the rest. Every thumbnail above is
          a one-click launcher.
        </Text>

        <Button href="https://app.rebyte.ai/new?prompt=Create%20a%20slide%20deck">
          Create Your First Deck
        </Button>
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

/* ── Mode badges ── */

const modeBadgeTdHtml: React.CSSProperties = {
  verticalAlign: "top" as const,
  width: "90px",
  paddingRight: "12px",
  paddingTop: "4px",
};

const modeBadgeTdImage: React.CSSProperties = {
  verticalAlign: "top" as const,
  width: "90px",
  paddingRight: "12px",
  paddingTop: "4px",
};

const modeBadgeText: React.CSSProperties = {
  display: "inline-block",
  fontSize: "11px",
  fontWeight: "700",
  color: "#fff",
  background: "#1a1a1a",
  borderRadius: "4px",
  padding: "4px 8px",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  whiteSpace: "nowrap" as const,
};

const modeDescTd: React.CSSProperties = {
  verticalAlign: "top" as const,
};

const modeDescText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#555",
  margin: "0",
};

/* ── Style thumbnail grid ── */

const styleGrid: React.CSSProperties = {
  margin: "8px 0 16px",
};

const styleCardTd: React.CSSProperties = {
  width: "50%",
  padding: "6px",
  verticalAlign: "top" as const,
};

const styleCardLink: React.CSSProperties = {
  display: "block",
  textDecoration: "none",
  color: "#1a1a1a",
  background: "#fff",
  borderRadius: "8px",
  overflow: "hidden" as const,
  border: "1px solid #e6ebf1",
};

const styleCardImg: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "auto",
  borderRadius: "8px 8px 0 0",
};

const styleCardLabel: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: "700",
  color: "#1a1a1a",
  padding: "8px 10px 2px",
};

const styleCardDesc: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  lineHeight: "16px",
  color: "#888",
  padding: "0 10px 8px",
};

const moreStyles: React.CSSProperties = {
  fontSize: "13px",
  color: "#888",
  textAlign: "center" as const,
  margin: "4px 0 0",
  fontStyle: "italic" as const,
};
