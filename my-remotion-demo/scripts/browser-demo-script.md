# Video Script: "Your Agents, Now in the Cloud"

**Duration:** ~90 seconds | **Resolution:** 1920x1080 @ 30fps
**Background music:** Same as `audio/bg.mp3` from RebyteIntro
**Voice:** `onyx` (deep, authoritative)
**Visual style:** Clean, light backgrounds (#f8fafc) matching RebyteIntro — no purple

---

## INTRO (0:00-0:08) — ~240 frames

**Visual:** Rebyte logo center, agent icons (Claude, Gemini, Codex) orbiting around it. Tagline fades in.
**Narration:** *"What if AI agents could do real work for you — not just answer questions, but actually operate software in the cloud?"*

---

## SCENARIO 1: Legal Document Review (0:08-0:35) — ~810 frames

**Context:** A legal document (e.g., a SaaS Master Service Agreement) already exists in the user's Google Drive. The agent finds it, opens it, reviews it, and uses a specialized "Legal Review" skill to add expert comments — fully automatically.

### Scene 1a: Find the Document (0:08-0:14) — 180 frames
User types: "Review the SaaS agreement in my Drive and flag any legal risks"
- The agent opens Google Drive in the browser
- Searches for the document (typing "SaaS Master Service Agreement" in Drive search)
- Drive search results appear, the agent identifies and clicks the correct file
**Narration:** *"Just tell Rebyte what you need. The agent opens your Google Drive, searches for the document, and finds it — no links, no file paths, just natural language."*

### Scene 1b: Open & Browse the Document (0:14-0:22) — 240 frames
- The document opens in Google Docs
- We see a dense, multi-page legal contract:
  - Title: "Master Service Agreement"
  - Sections visible: Definitions, Scope of Services, Payment Terms, Intellectual Property, Limitation of Liability, Termination, Governing Law
- The agent scrolls through the document slowly, scanning the content
- Key sections are highlighted/visible as it scrolls past them
**Narration:** *"It opens the contract — a dense, multi-page Master Service Agreement — and scrolls through every section. Definitions, liability clauses, termination terms. The agent reads it all."*

### Scene 1c: Legal Skill Activation (0:22-0:26) — 120 frames
- In the Rebyte chat panel, we see: "Using skill: Legal Contract Review"
- A skill badge/card animates in showing the skill details:
  - Icon: scales of justice
  - Name: "Legal Contract Review"
  - Description: "Analyzes contracts for risks, ambiguities, and missing clauses"
- The agent's status changes to "Analyzing contract with legal-review skill..."
**Narration:** *"Now the agent activates a specialized skill — Legal Contract Review — trained to spot risks, ambiguities, and missing protections."*

### Scene 1d: Adding Review Comments (0:26-0:35) — 270 frames
- The agent scrolls to specific sections and adds Google Docs comments one by one:
  1. On "Limitation of Liability" clause: "Risk: Liability cap is uncapped for data breaches. Consider adding a mutual cap at 2x annual fees."
  2. On "Termination for Convenience": "Missing: No cure period specified. Recommend adding a 30-day cure period before termination."
  3. On "Intellectual Property": "Ambiguity: Work product ownership is unclear for custom integrations. Clarify in Section 5.2."
  4. On "Governing Law": "Note: Jurisdiction is set to Delaware. Verify this aligns with your entity's home state."
- Each comment pops in with a highlight animation on the relevant paragraph
- The right margin fills up with yellow comment threads
**Narration:** *"It flags uncapped liability clauses, missing cure periods, ambiguous IP ownership, jurisdiction mismatches — each one with a specific recommendation, added directly as comments in the document. A full legal review, done in seconds, not hours."*

### Suggested legal document for the demo recording:
```
MASTER SERVICE AGREEMENT

This Master Service Agreement ("Agreement") is entered into as of [Date]
by and between [Company A] ("Provider") and [Company B] ("Client").

1. DEFINITIONS
   1.1 "Services" means the cloud-based software services described in...
   1.2 "Confidential Information" means any non-public information...

2. SCOPE OF SERVICES
   2.1 Provider shall provide the Services as described in Exhibit A...
   2.2 Service Level Agreement. Provider shall maintain 99.9% uptime...

3. PAYMENT TERMS
   3.1 Fees. Client shall pay Provider the fees set forth in Exhibit B...
   3.2 Late Payment. Any amount not paid when due shall bear interest...

4. INTELLECTUAL PROPERTY
   4.1 Provider IP. Provider retains all rights to the platform...
   4.2 Client Data. Client retains all rights to data uploaded...
   4.3 Work Product. [Intentionally vague — good for demo comment]

5. CONFIDENTIALITY
   5.1 Each party agrees to maintain the confidentiality of...

6. LIMITATION OF LIABILITY
   6.1 IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR INDIRECT DAMAGES...
   6.2 [No cap on data breach liability — good for demo comment]

7. TERMINATION
   7.1 Term. This Agreement shall commence on the Effective Date...
   7.2 Termination for Convenience. Either party may terminate...
       [No cure period — good for demo comment]
   7.3 Effect of Termination. Upon termination...

8. GOVERNING LAW
   8.1 This Agreement shall be governed by the laws of the State of
       Delaware... [Jurisdiction flag — good for demo comment]

9. MISCELLANEOUS
   9.1 Entire Agreement...
   9.2 Amendment...
   9.3 Waiver...

EXHIBIT A — Service Description
EXHIBIT B — Fee Schedule
```

---

## SCENARIO 2: Spreadsheet & CRM (0:32-0:52) — ~600 frames

### Scene 2a (0:32-0:38)
User types "Build me a sales CRM pipeline tracker". Agent opens Google Sheets.
**Narration:** *"Need a sales CRM? The agent opens Google Sheets and builds a complete pipeline tracker from scratch."*

### Scene 2b (0:38-0:48)
Show the spreadsheet being populated:
- Columns: Company, Contact, Deal Size, Stage (color-coded), Next Action, Close Date
- Multiple rows of realistic data filling in
- Conditional formatting (green for "Closed Won", yellow for "Negotiation", red for "Lost")
- Summary row with formulas
**Narration:** *"Columns, formulas, conditional formatting, sample data — a fully functional CRM that would take hours to build by hand, done in seconds."*

### Scene 2c (0:48-0:52)
Quick zoom-out showing the finished spreadsheet with a chart auto-generated from the data.
**Narration:** *"Complete with charts and dashboards, ready to use."*

---

## SCENARIO 3: Collaborative Editing (0:52-1:16) — ~720 frames

### Scene 3a (0:52-1:00)
Split-screen view. Left: the user's browser tab editing a Google Doc. Right: the agent's browser tab on the same document. Both cursors visible.
**Narration:** *"But here's where it gets interesting. You and the agent can work on the same document — at the same time."*

### Scene 3b (1:00-1:10)
Show real-time collaboration:
- The user types in Section 1
- Simultaneously, the agent fills in Section 3 (text appearing in a different cursor color)
- Google Docs' "Anonymous User" or named cursor shows the agent typing
- Changes from both sides appear in real-time
**Narration:** *"You write the executive summary. The agent fills in the technical specifications. Two tabs, one document, zero waiting. Real-time collaboration between human and AI."*

### Scene 3c (1:10-1:16)
The user sends a chat message: "Looks good, now share it with the team." The agent clicks Share, sets permissions, and copies the link.
**Narration:** *"When you're done, just ask the agent to share it. Teamwork, redefined."*

---

## OUTRO (1:16-1:25) — ~270 frames

**Visual:** Stats fly in: "1 Conversation -> Docs, Sheets, CRM, Collaboration". Rebyte logo. Tagline: "Your agents, now in the cloud."
**Narration:** *"One conversation. Documents, spreadsheets, CRMs, real-time collaboration. This is Rebyte — your agents, now in the cloud."*

---

## Summary Table

| Scene | Time | Frames | Key Visual |
|-------|------|--------|------------|
| Intro | 0:00-0:08 | 240 | Logo + agent icons |
| 1a: Find Doc | 0:08-0:14 | 180 | Agent searches Google Drive |
| 1b: Open & Browse | 0:14-0:22 | 240 | Scrolling through legal contract |
| 1c: Skill Activation | 0:22-0:26 | 120 | "Legal Contract Review" skill badge |
| 1d: Legal Comments | 0:26-0:35 | 270 | Comments popping in on clauses |
| 2a: CRM Start | 0:35-0:41 | 180 | Chat -> Google Sheets opens |
| 2b: CRM Build | 0:41-0:51 | 300 | Pipeline filling in with formatting |
| 2c: CRM Chart | 0:51-0:55 | 120 | Zoom out, chart visible |
| 3a: Split View | 0:55-1:03 | 240 | Two tabs, same doc |
| 3b: Collab | 1:03-1:13 | 300 | Both typing simultaneously |
| 3c: Share | 1:13-1:19 | 180 | Agent shares the doc |
| Outro | 1:19-1:28 | 270 | Stats + brand |

## TTS Narration Lines

All lines for TTS generation (voice: onyx, model: tts-1-hd):

1. **intro:** "What if AI agents could do real work for you — not just answer questions, but actually operate software in the cloud?"
2. **scene-1a:** "Just tell Rebyte what you need. The agent opens your Google Drive, searches for the document, and finds it — no links, no file paths, just natural language."
3. **scene-1b:** "It opens the contract — a dense, multi-page Master Service Agreement — and scrolls through every section. Definitions, liability clauses, termination terms. The agent reads it all."
4. **scene-1c:** "Now the agent activates a specialized skill — Legal Contract Review — trained to spot risks, ambiguities, and missing protections."
5. **scene-1d:** "It flags uncapped liability clauses, missing cure periods, ambiguous IP ownership, jurisdiction mismatches — each one with a specific recommendation, added directly as comments in the document. A full legal review, done in seconds, not hours."
6. **scene-2a:** "Need a sales CRM? The agent opens Google Sheets and builds a complete pipeline tracker from scratch."
7. **scene-2b:** "Columns, formulas, conditional formatting, sample data — a fully functional CRM that would take hours to build by hand, done in seconds."
8. **scene-2c:** "Complete with charts and dashboards, ready to use."
9. **scene-3a:** "But here's where it gets interesting. You and the agent can work on the same document — at the same time."
10. **scene-3b:** "You write the executive summary. The agent fills in the technical specifications. Two tabs, one document, zero waiting. Real-time collaboration between human and AI."
11. **scene-3c:** "When you're done, just ask the agent to share it. Teamwork, redefined."
12. **outro:** "One conversation. Documents, spreadsheets, CRMs, real-time collaboration. This is Rebyte — your agents, now in the cloud."
