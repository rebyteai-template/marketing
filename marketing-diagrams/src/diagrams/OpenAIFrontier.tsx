import type { CSSProperties } from 'react'

const colors = {
  bg: '#000000',
  cardOrange: '#e8956a',
  cardPeach: '#f0c5a0',
  cardBeige: '#f5e6d0',
  cardVm: '#d4e8d0',
  textDark: '#1a1a1a',
  textLight: '#ffffff',
  dashedBorder: '#888888',
}

const styles = {
  container: {
    width: 1400,
    padding: '48px 60px',
    background: colors.bg,
    color: colors.textLight,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
  } as CSSProperties,

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
  } as CSSProperties,

  title: {
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: '-0.02em',
  } as CSSProperties,

  rowContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    gap: 0,
  } as CSSProperties,

  rowLabel: {
    width: 120,
    fontSize: 16,
    fontWeight: 500,
    color: colors.textLight,
    textAlign: 'right' as const,
    paddingRight: 12,
    flexShrink: 0,
  } as CSSProperties,

  arrow: {
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  } as CSSProperties,

  cardsRow: {
    display: 'flex',
    gap: 12,
    flex: 1,
  } as CSSProperties,

  card: (bg: string) => ({
    flex: 1,
    padding: '18px 24px',
    borderRadius: 10,
    background: bg,
    color: colors.textDark,
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  wideCard: (bg: string) => ({
    padding: '20px 24px',
    borderRadius: 10,
    background: bg,
    color: colors.textDark,
    textAlign: 'center' as const,
  }),

  wideCardTitle: {
    fontSize: 17,
    fontWeight: 600,
    marginBottom: 4,
  } as CSSProperties,

  wideCardDesc: {
    fontSize: 13,
    fontWeight: 400,
    opacity: 0.7,
  } as CSSProperties,

  vmCard: {
    flex: 1,
    padding: '14px 16px',
    borderRadius: 8,
    background: colors.cardVm,
    color: colors.textDark,
    fontSize: 14,
    fontWeight: 600,
    textAlign: 'center' as const,
    border: '2px solid #a8d4a0',
  } as CSSProperties,

  dashedBox: {
    display: 'flex',
    gap: 12,
    border: `2px dashed ${colors.dashedBorder}`,
    borderRadius: 12,
    padding: '20px 24px',
    marginTop: 20,
  } as CSSProperties,

  systemCard: {
    flex: 1,
    padding: '16px 12px',
    borderRadius: 8,
    background: 'transparent',
    border: `1.5px solid ${colors.dashedBorder}`,
    color: colors.textLight,
    fontSize: 15,
    fontWeight: 500,
    textAlign: 'center' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,
}

function ArrowRight() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
      <line x1="0" y1="6" x2="20" y2="6" stroke={colors.textLight} strokeWidth="1.5" />
      <path d="M18 2 L22 6 L18 10" stroke={colors.textLight} strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
      <line x1="4" y1="6" x2="24" y2="6" stroke={colors.textLight} strokeWidth="1.5" />
      <path d="M6 2 L2 6 L6 10" stroke={colors.textLight} strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function RebyteLogo() {
  return (
    <img src="/rebyte-logo.png" width={44} height={44} alt="Rebyte" style={{ borderRadius: 10 }} />
  )
}

function Bracket({ height }: { height: number }) {
  return (
    <svg width="20" height={height} viewBox={`0 0 20 ${height}`} fill="none">
      <line x1="10" y1="0" x2="20" y2="0" stroke={colors.textLight} strokeWidth="1.5" />
      <line x1="10" y1="0" x2="10" y2={height} stroke={colors.textLight} strokeWidth="1.5" />
      <line x1="10" y1={height} x2="20" y2={height} stroke={colors.textLight} strokeWidth="1.5" />
      <line x1="0" y1={height / 2} x2="10" y2={height / 2} stroke={colors.textLight} strokeWidth="1.5" />
    </svg>
  )
}


export function OpenAIFrontierDiagram() {
  const contentLeft = 150

  return (
    <div style={{ position: 'relative' }}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.title}>Agent for Enterprise</div>
          <RebyteLogo />
        </div>

        {/* Interfaces row */}
        <div style={styles.rowContainer}>
          <div style={styles.rowLabel}>Interfaces</div>
          <div style={styles.arrow}><ArrowRight /></div>
          <div style={styles.cardsRow}>
            <div style={styles.card(colors.cardOrange)}>Rebyte Web</div>
            <div style={styles.card(colors.cardOrange)}>Rebyte Mobile</div>
            <div style={{
              ...styles.card(colors.cardOrange),
              position: 'relative',
            }}>
              Other Business Applications
              {/* Arrow down to Agent API */}
              <div style={{ position: 'absolute', bottom: -38, left: '50%', transform: 'translateX(-50%)' }}>
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                  <path d="M12 0 L12 24" stroke={colors.textLight} strokeWidth="1.5" />
                  <path d="M7 20 L12 28 L17 20" stroke={colors.textLight} strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>
          <div style={styles.arrow}><ArrowLeft /></div>
        </div>

        {/* Agent API bar */}
        <div style={{ ...styles.rowContainer, marginBottom: 8 }}>
          <div style={{ width: 120, flexShrink: 0 }} />
          <div style={{ width: 30, flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{
              padding: '10px 32px',
              borderRadius: 8,
              border: `2px solid ${colors.cardOrange}`,
              color: colors.cardOrange,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '0.05em',
              textAlign: 'center' as const,
            }}>
              Agent API
            </div>
          </div>
          <div style={{ width: 30, flexShrink: 0 }} />
        </div>

        {/* Skills row */}
        <div style={styles.rowContainer}>
          <div style={styles.rowLabel}>Skills / MCP</div>
          <div style={styles.arrow}><ArrowRight /></div>
          <div style={styles.cardsRow}>
            <div style={styles.card(colors.cardPeach)}>Company Skills &amp; MCP</div>
            <div style={styles.card(colors.cardPeach)}>Built-in Skills &amp; MCP</div>
            <div style={styles.card(colors.cardPeach)}>Third-Party Skills &amp; MCP</div>
          </div>
          <div style={styles.arrow}><ArrowLeft /></div>
        </div>

        {/* Enterprise Agent Harness - 2x2 grid */}
        <div style={{ position: 'relative', marginTop: 24 }}>
          {/* Left bracket + label */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: contentLeft, display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3, textAlign: 'center' }}>
                Enterprise<br />Agent<br />Harness
              </div>
              <Bracket height={280} />
            </div>
          </div>

          {/* 2x2 Grid */}
          <div style={{ ...styles.rowContainer, marginBottom: 0 }}>
            <div style={{ width: 120, flexShrink: 0 }} />
            <div style={{ width: 30, flexShrink: 0 }} />
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 12 }}>
              {/* Top-left: Agent Shield */}
              <div style={{ ...styles.wideCard(colors.cardBeige), padding: '20px 24px' }}>
                <div style={styles.wideCardTitle}>Agent Shield</div>
                <div style={styles.wideCardDesc}>Inspect agent activity inside the VM, control what is allowed or disallowed, and full auditing</div>
              </div>

              {/* Top-right: Evaluation and Optimization */}
              <div style={{ ...styles.wideCard(colors.cardBeige), padding: '20px 24px' }}>
                <div style={styles.wideCardTitle}>Evaluation and Optimization</div>
                <div style={styles.wideCardDesc}>Built-in loops to improve company-wide memory and company-wide skills</div>
              </div>

              {/* Bottom-left: Agent Execution */}
              <div style={{ ...styles.wideCard(colors.cardBeige), padding: '20px 24px' }}>
                <div style={styles.wideCardTitle}>Agent Execution</div>
                <div style={{ ...styles.wideCardDesc, marginBottom: 14 }}>Each agent runs in its own isolated VM &mdash; fully sandboxed, secure, and independent</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <div style={{ ...styles.vmCard, flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.6, marginBottom: 4 }}>VM</div>
                    Coding Agent
                  </div>
                  <div style={{ ...styles.vmCard, flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.6, marginBottom: 4 }}>VM</div>
                    Research Agent
                  </div>
                  <div style={{ ...styles.vmCard, flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.6, marginBottom: 4 }}>VM</div>
                    Marketing Agent
                  </div>
                  <div style={{ ...styles.vmCard, flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.6, marginBottom: 4 }}>VM</div>
                    Data Agent
                  </div>
                </div>
              </div>

              {/* Bottom-right: Agent Context */}
              <div style={{ ...styles.wideCard(colors.cardBeige), padding: '20px 24px' }}>
                <div style={styles.wideCardTitle}>Agent Context</div>
                <div style={styles.wideCardDesc}>Shared business context across data, systems, with built-in access control</div>
              </div>
            </div>
            <div style={{ width: 30, flexShrink: 0 }} />
          </div>

        </div>

        {/* Your systems of record - split into blocks */}
        <div style={{ ...styles.rowContainer, marginTop: 16 }}>
          <div style={{ width: 120, flexShrink: 0 }} />
          <div style={{ width: 30, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={styles.dashedBox}>
              <div style={styles.systemCard}>Databases</div>
              <div style={styles.systemCard}>Files</div>
              <div style={styles.systemCard}>Existing APIs</div>
              <div style={styles.systemCard}>SaaS Integrations</div>
            </div>
          </div>
          <div style={{ width: 30, flexShrink: 0 }} />
        </div>
      </div>
    </div>
  )
}
