# Rebyte Explainer Video Script

## Brand Reference

### Colors
| Token           | Hex       | Usage                          |
|-----------------|-----------|--------------------------------|
| Gold            | `#D4A654` | Primary brand accent           |
| Gold Light      | `#f5d6a8` | Background                     |
| Gold Dark       | `#c49a54` | Borders, accents               |
| Black           | `#2a2520` | Text, foreground               |
| Cream           | `#faf7f2` | Light surfaces                 |
| Card            | `#faecd8` | Card backgrounds               |
| Card Alt        | `#fff8ee` | Nested card backgrounds        |
| Muted           | `#a08c6e` | Secondary text                 |

### Typography
- **Sans:** Inter (400, 500, 600, 700)
- **Serif:** Libre Baskerville (accent/editorial)
- **Mono:** SF Mono, Cascadia Code

---

## Video Specs
- Resolution: 1920x1080
- FPS: 30
- Source videos: 1920x1256 (will be scaled/cropped to fit)

---

## Structure Overview

The video has 5 parts: an intro, three demo segments (each using real screen recordings), and an outro. The screen recordings are already sped up and serve as the visual backbone — the Remotion composition adds title cards, captions, transitions, and voiceover on top.

---

## Part 1 — Intro (0:00–0:08, ~240 frames)

### Transcript
"What if your entire team ran on AI? Marketing, sales, legal, CEO, finance, HR, operations — each agent in its own cloud computer, working in parallel. This is Rebyte."

### Animation
- Rebyte logo fades in center on golden (#f5d6a8) background.
- Title text appears below: "Your AI Team" in Libre Baskerville.
- Department labels animate in: "Marketing", "Sales", "Legal", "CEO", "Finance", "HR", "Operations".
- Quick fade to first demo.

---

## Part 2 — Marketing Agent (0:08–0:28, ~600 frames)

### Source Video
`marketing-v2.mp4` (15.6s, 1920x1256)

### Transcript
"Your marketing agent reads your company blog, researches your product positioning, and drafts a full marketing plan — all in Google Docs. It reads your site, understands your brand, and writes a professional plan from scratch."

### Animation
- **Title card** (2s): "Marketing Agent" with megaphone icon on golden background. Subtitle: "Blog research → Google Docs marketing plan"
- **Screen recording** plays at native speed, scaled to fit 1920x1080 with slight letterboxing or crop. Key moments:
  - The prompt: "create marketing material for rebyte.ai"
  - Agent browsing rebyte.ai/blog
  - Google Docs opening and "Rebyte.ai Marketing Plan 2026" being typed
  - Content filling in: Executive Summary, Value Props, Target Personas
- **Captions** overlay at bottom during key moments:
  - "Reading rebyte.ai/blog..." (when browser shows blog)
  - "Writing marketing plan in Google Docs" (when doc appears)
  - "Executive Summary, Value Props, Personas, Strategy" (as content fills)
- Fade transition to next segment.

---

## Part 3 — Sales CRM Agent (0:28–0:48, ~600 frames)

### Source Video
`askgoogle-v1.mp4` (16.2s, 1920x1256)

### Transcript
"Your sales agent builds a CRM pipeline tracker in Google Sheets — fully automated, from a single prompt. It even sets up a summary dashboard with total leads, open deals, and estimated pipeline value."

### Animation
- **Title card** (2s): "Sales CRM Agent" with chart icon on golden background. Subtitle: "Prompt → Full CRM in Google Sheets"
- **Screen recording** plays. Key moments:
  - The detailed prompt describing CRM columns and features
  - Blank Google Sheet opening
  - Summary section appearing (Total Leads, Open Deals, High Priority, Total Estimated Value)
  - "CRM Pipeline Tracker" header and column structure building out
  - Formulas being entered (COUNTA, COUNTIFS, SUM)
- **Captions** overlay:
  - "One prompt to build a complete CRM" (at start)
  - "Formulas, filters, and formatting — automatic" (when structure appears)
  - "Summary dashboard with live totals" (when summary shows)
- Fade transition to next segment.

---

## Part 4 — Collaboration (0:48–1:12, ~720 frames)

### Source Video
`collab-v1.mp4` (20.0s, 1920x1256)

### Transcript
"But here's where it gets powerful. The spreadsheet isn't locked in the agent's sandbox — it's a real Google Sheet. You open it side by side, watch the agent import data in real time, and jump in whenever you want. Twenty-one leads, complete with contacts, deal stages, and pipeline values — all populated automatically. Human and AI, collaborating on the same document."


### Animation
- **Title card** (2s): "Collaboration" with handshake/link icon on golden background. Subtitle: "AI agent + Human — same Google Sheet, real time"
- **Screen recording** plays. Key moments:
  - Split screen: Agent Computer panel on left (label: "Agent"), Google Sheets on right (label: "Human")
  - Agent importing CSV data into the CRM
  - Rows populating with companies, contacts, emails, phone numbers
  - Priority dropdowns (High/Medium/Low) with color coding
  - Total Estimated Value updating to $1,955,000
  - Human scrolling through the live sheet while agent is still working
- **Captions** overlay:
  - "Agent and human — same spreadsheet, real time" (at start)
  - "21 leads imported with full contact details" (when data fills)
  - "$1.96M pipeline — built in minutes" (when total shows)
- Fade transition to outro.

---

## Part 5 — Outro (1:12–1:20, ~240 frames)

### Transcript
"An agent company. An entire team of AI agents, running every part of your business. This is Rebyte."

### Animation
- Golden background.
- Department cards slide in: "Marketing", "Sales", "Legal", "CEO", "Finance", "HR", "Operations"
- Rebyte logo appears large at center.
- Tagline: "Your AI team, running in the cloud." in Libre Baskerville.
- URL: "rebyte.ai" fades in below.
- Hold for 3 seconds.

---

## Total Duration
~80 seconds / ~2400 frames at 30fps

## Audio
- **Voiceover:** OpenAI TTS (Onyx voice) for all parts
- **Background music:** bg.mp3 at ~4% volume

## Source Videos
- `public/explainer/videos/marketing-v2.mp4`
- `public/explainer/videos/askgoogle-v1.mp4`
- `public/explainer/videos/collab-v1.mp4`
