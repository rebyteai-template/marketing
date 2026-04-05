import { useState, useEffect, type CSSProperties, type ReactNode } from 'react'
import { OpenAIFrontierDiagram } from '../diagrams/OpenAIFrontier'

const colors = {
  bg: '#ddd0b4',
  textDark: '#2a2a2a',
  textMuted: '#888',
  accent: '#6fb8b0',
  cardBg: '#c8cfc4',
}

const slideBase: CSSProperties = {
  width: 1280,
  height: 720,
  background: colors.bg,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  color: colors.textDark,
  padding: '60px 80px',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
}

const footer: CSSProperties = {
  position: 'absolute',
  bottom: 24,
  right: 40,
  fontSize: 14,
  color: '#b0a890',
  fontFamily: 'monospace',
}

function Footer() {
  return <div style={footer}>Built by Rebyte.ai</div>
}

function H1({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.02em' }}>
      {children}
    </div>
  )
}

function Subtitle({ children }: { children: ReactNode }) {
  return <div style={{ fontSize: 20, color: colors.textMuted, marginBottom: 32 }}>{children}</div>
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 24 }}>{children}</div>
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontSize: 20, marginBottom: 12, paddingLeft: 24, position: 'relative' }}>
      <span style={{ position: 'absolute', left: 0 }}>&bull;</span>
      {children}
    </div>
  )
}

function SubBullet({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontSize: 18, marginBottom: 10, paddingLeft: 48, position: 'relative', color: '#444' }}>
      <span style={{ position: 'absolute', left: 24 }}>&mdash;</span>
      {children}
    </div>
  )
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{
      flex: 1,
      background: colors.cardBg,
      borderRadius: 16,
      padding: '28px 28px',
      border: '1.5px solid #b0b8a8',
    }}>
      <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>{title}</div>
      {children}
    </div>
  )
}

// Slide 1: Cover
function SlideCover() {
  return (
    <div style={{ ...slideBase, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 24 }}>Rebyte</div>
      <div style={{ fontSize: 24, color: colors.textMuted }}>The Cloud Runtime for Enterprise Agents</div>
      <div style={{ fontSize: 18, color: colors.accent, marginTop: 32 }}>Available at rebyte.ai</div>
      <Footer />
    </div>
  )
}

// Slide 2: The Problems
function SlideProblems() {
  return (
    <div style={slideBase}>
      <H1>The Problem</H1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 8 }}>
        <Card title="Agent Harness Needs a Runtime">
          <Bullet>Each agent requires a full environment &mdash; file system, network, even a VM</Bullet>
          <Bullet>Enterprises need thousands of agents running concurrently</Bullet>
        </Card>
        <Card title="Agents Need Shared Context">
          <Bullet>Business data is siloed across clouds, apps, and databases</Bullet>
          <Bullet>No single agent has full context of how the business operates</Bullet>
        </Card>
        <Card title="Agents Need Identity & Security">
          <Bullet>Each agent needs its own permissions, guardrails, and security boundary</Bullet>
          <Bullet>Every action must be inspectable and auditable for compliance</Bullet>
        </Card>
        <Card title="Agents Need to Evolve">
          <Bullet>Continuous learning and optimization from feedback</Bullet>
          <Bullet>Without evaluation loops, agents stay as impressive demos, not reliable teammates</Bullet>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

// Slide 4: Architecture Diagram
function SlideArchitecture() {
  return (
    <div style={{
      width: 1280,
      height: 720,
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ transform: 'scale(0.85)', transformOrigin: 'center center' }}>
        <OpenAIFrontierDiagram />
      </div>
    </div>
  )
}

// Slide 5: Key Pillars
function SlideKeyPillars() {
  const pillarTitle: CSSProperties = { fontSize: 24, fontWeight: 800, marginBottom: 12 }
  const sub: CSSProperties = { fontSize: 18, color: '#555', marginBottom: 6, paddingLeft: 20, position: 'relative' }
  return (
    <div style={slideBase}>
      <H1>Key Pillars</H1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div>
          <div style={pillarTitle}>1. Execution &mdash; Agent Harness Infrastructure</div>
          <div style={sub}>(a) Agent harness runs in isolated sandbox environments</div>
          <div style={sub}>(b) Sandbox infrastructure co-designed with the harness for smooth, accessible operation</div>
          <div style={sub}>(c) Persistent and self-identifiable environments</div>
        </div>
        <div>
          <div style={pillarTitle}>2. Context &mdash; A Semantic Layer Shared by All Agents</div>
          <div style={sub}>(a) All business data in one place &mdash; databases, warehouses, cloud storage, files</div>
          <div style={sub}>(b) Structured, schema-aware, and query-ready &mdash; SQL-friendly format any agent can reason over</div>
          <div style={sub}>(c) Agents get precise answers, not guesses &mdash; direct queries, exact results</div>
        </div>
        <div>
          <div style={pillarTitle}>3. Security &mdash; Agent Shield</div>
          <div style={sub}>(a) Enterprise admin controls &mdash; define what agents can and cannot do, putting a "box" around every agent</div>
          <div style={sub}>(b) Full monitoring and alerting &mdash; track all agent actions and flag bad behavior in real time</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// Slide 6: Business Model
function SlideBusinessModel() {
  return (
    <div style={slideBase}>
      <H1>Business Model</H1>
      <div style={{ display: 'flex', gap: 32, marginTop: 16 }}>
        <Card title="1. SaaS Provider">
          <Bullet>Per-employee, per-seat pricing based on usage</Bullet>
          <Bullet>Launch unlimited agent computers &mdash; pay only for what you use</Bullet>
          <Bullet>Like running agents (Claude Code, Codex, OpenCode, Gemini) natively in the cloud with your own private skills</Bullet>
        </Card>
        <Card title="2. Agent Computer API">
          <Bullet>Infrastructure API for vertical agent providers</Bullet>
          <Bullet>Partners focus on their domain skills and business models</Bullet>
          <Bullet>We run their agents &mdash; they bring the expertise</Bullet>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

// Slide 7: Traction
function SlideTraction() {
  return (
    <div style={slideBase}>
      <H1>Traction</H1>
      <div style={{ fontSize: 48, fontWeight: 900, color: colors.accent, marginBottom: 32 }}>4,000+ registered users since launch</div>
      <SectionTitle>3 Design Partners</SectionTitle>
      <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
        <Card title="Enterprise AI Employees">
          <Bullet>10+ agents deployed across marketing, engineering, CEO, and data analysis</Bullet>
        </Card>
        <Card title="Legal Industry Consultancy">
          <Bullet>Consulting company building vertical agents for law firms and investors</Bullet>
        </Card>
        <Card title="Vertical Construction Company">
          <Bullet>Domain-specific agents for the construction industry</Bullet>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

// Slide 8: Founders
function SlideFounders() {
  return (
    <div style={slideBase}>
      <H1>The Founders</H1>
      <div style={{ display: 'flex', gap: 60, marginTop: 20 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>Jian</div>
          <Bullet>Early Googler</Bullet>
          <Bullet>Second-time founder &mdash; previous SaaS company acquired for $60M</Bullet>
          <Bullet>Deep expertise in:</Bullet>
          <SubBullet>Identity management</SubBullet>
          <SubBullet>Distributed systems</SubBullet>
          <div style={{ marginTop: 24, fontSize: 16, color: colors.accent }}>linkedin.com/in/jian-cai-8611094</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>Ming</div>
          <Bullet>Early Googler, Meta, Databricks, LinkedIn</Bullet>
          <Bullet><strong>Meta:</strong> Led Inference Platform</Bullet>
          <Bullet><strong>Databricks:</strong> Led Observability Platform</Bullet>
          <Bullet><strong>LinkedIn:</strong> Led migration to Kubernetes</Bullet>
          <div style={{ marginTop: 24, fontSize: 16, color: colors.accent }}>linkedin.com/in/ming-zhao-455b9131</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const slides = [
  SlideCover,
  SlideProblems,
  SlideKeyPillars,
  SlideBusinessModel,
  SlideTraction,
  SlideFounders,
]

export function RebyteDeck() {
  const [current, setCurrent] = useState(0)
  const [printMode, setPrintMode] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'p' || e.key === 'P') {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault()
          setPrintMode(true)
        }
      }
      if (printMode) return
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setCurrent(c => Math.min(c + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        setCurrent(c => Math.max(c - 1, 0))
      } else if (e.key === 'Escape') {
        setPrintMode(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [printMode])

  useEffect(() => {
    if (printMode) {
      // Small delay to let React render all slides before printing
      const timer = setTimeout(() => {
        window.print()
        setPrintMode(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [printMode])

  // Print mode: render all slides stacked for PDF export
  if (printMode) {
    return (
      <div className="print-mode">
        {slides.map((Slide, i) => (
          <div key={i} className="print-slide">
            <Slide />
          </div>
        ))}
      </div>
    )
  }

  const Slide = slides[current]

  return (
    <div style={{ minHeight: '100vh', background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}>
        <Slide />
      </div>
      <div style={{ color: '#666', fontSize: 14, fontFamily: 'monospace' }}>
        {current + 1} / {slides.length} &nbsp;&middot;&nbsp; Arrow keys to navigate &nbsp;&middot;&nbsp; P to export PDF
      </div>
    </div>
  )
}
