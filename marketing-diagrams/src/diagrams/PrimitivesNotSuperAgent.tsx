import type { CSSProperties } from 'react'

const colors = {
  bg: '#faf5ee',
  cardCream: '#fff8ef',
  cardPeach: '#fce4cc',
  cardGreen: '#d9edda',
  cardBlue: '#d4e4f5',
  cardOrange: '#f5c9a0',
  cardRed: '#f5d0cc',
  textDark: '#3a2e24',
  textMuted: '#8a7e72',
  border: '#e8ddd0',
  borderDark: '#d0c4b4',
  accent: '#e8956a',
  accentGreen: '#7ab87e',
  warning: '#d4924a',
  decorBlob1: '#f5dcc8',
  decorBlob2: '#d9edda',
  decorBlob3: '#d4e4f5',
}

const styles = {
  container: {
    width: 1200,
    height: 680,
    padding: '44px 52px',
    background: colors.bg,
    color: colors.textDark,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative' as const,
    overflow: 'hidden',
  } as CSSProperties,

  title: {
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: colors.textDark,
    textAlign: 'center' as const,
    marginBottom: 40,
  } as CSSProperties,

  columns: {
    display: 'flex',
    gap: 28,
    alignItems: 'stretch',
  } as CSSProperties,

  sectionBox: (borderColor: string) => ({
    flex: 1,
    background: colors.cardCream,
    borderRadius: 20,
    border: `2px solid ${borderColor}`,
    padding: '28px 28px',
    display: 'flex',
    flexDirection: 'column' as const,
    position: 'relative' as const,
  }),

  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 6,
    color: colors.textDark,
  } as CSSProperties,

  sectionSubtitle: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 20,
    lineHeight: 1.5,
  } as CSSProperties,
}

// Decorative blob shapes (matching existing blog diagram style)
function DecorBlob({ color, size, top, left, right, bottom, opacity = 0.4 }: {
  color: string; size: number; top?: number; left?: number; right?: number; bottom?: number; opacity?: number
}) {
  return (
    <div style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      opacity,
      top, left, right, bottom,
      zIndex: 0,
    }} />
  )
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L18 16H2L10 2Z" stroke={colors.warning} strokeWidth="1.5" fill="none" />
      <line x1="10" y1="8" x2="10" y2="11" stroke={colors.warning} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.5" r="0.8" fill={colors.warning} />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke={colors.accentGreen} strokeWidth="1.5" fill="none" />
      <path d="M6.5 10L9 12.5L13.5 7.5" stroke={colors.accentGreen} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" stroke={colors.borderDark} strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
      <line x1="14" y1="8" x2="14" y2="20" stroke={colors.textMuted} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="14" x2="20" y2="14" stroke={colors.textMuted} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
      <line x1="2" y1="10" x2="28" y2="10" stroke={colors.accentGreen} strokeWidth="2" />
      <path d="M26 5 L33 10 L26 15" stroke={colors.accentGreen} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function SuperAgentSide() {
  const problems = [
    { label: 'Opaque', desc: "Can't see why it breaks" },
    { label: 'Rigid', desc: "Can't customize behavior" },
    { label: 'Not composable', desc: "Can't mix and match" },
  ]

  return (
    <div style={styles.sectionBox(colors.borderDark)}>
      <div style={styles.sectionTitle}>
        "Super Agent"
      </div>
      <div style={styles.sectionSubtitle}>
        One black box tries to do everything
      </div>

      {/* Big monolithic block */}
      <div style={{
        background: colors.bg,
        border: `2px dashed ${colors.borderDark}`,
        borderRadius: 16,
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        flex: 1,
      }}>
        {/* Robot icon */}
        <div style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: colors.cardRed,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
        }}>
          🤖
        </div>

        <div style={{
          fontSize: 17,
          fontWeight: 700,
          textAlign: 'center',
          color: colors.textDark,
        }}>
          One Agent Does Everything
        </div>

        <div style={{
          fontSize: 12,
          color: colors.textMuted,
          textAlign: 'center',
          lineHeight: 1.6,
          fontStyle: 'italic',
        }}>
          "Describe what you want and hope it works"
        </div>
      </div>

      {/* Problems list */}
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {problems.map((p) => (
          <div key={p.label} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <WarningIcon />
            <div>
              <span style={{ fontSize: 13, fontWeight: 600, color: colors.textDark }}>{p.label}</span>
              <span style={{ fontSize: 12, color: colors.textMuted }}> — {p.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PrimitivesSide() {
  const primitives = [
    {
      name: 'Computer',
      desc: 'A real cloud VM per task',
      color: colors.cardGreen,
      borderColor: '#a8d4a0',
      icon: '💻',
    },
    {
      name: 'Agent Harness',
      desc: 'Swappable AI agent (the code)',
      color: colors.cardOrange,
      borderColor: '#e0b48a',
      icon: '⚙️',
    },
    {
      name: 'Skills',
      desc: 'Composable capabilities',
      color: colors.cardPeach,
      borderColor: '#e8ccaa',
      icon: '🧩',
    },
    {
      name: 'Shared Context',
      desc: 'Org-wide knowledge layer',
      color: colors.cardBlue,
      borderColor: '#a8c4e0',
      icon: '🔗',
    },
  ]

  return (
    <div style={styles.sectionBox(colors.accentGreen)}>
      <div style={{ ...styles.sectionTitle, color: colors.accentGreen }}>
        Rebyte: Four Primitives
      </div>
      <div style={styles.sectionSubtitle}>
        Understand each one. Combine them your way.
      </div>

      {/* Primitives grid — 2x2 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
        flex: 1,
      }}>
        {primitives.map((p) => (
          <div key={p.name} style={{
            background: p.color,
            border: `1.5px solid ${p.borderColor}`,
            borderRadius: 14,
            padding: '16px 18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 28 }}>{p.icon}</div>
            <div style={{
              fontSize: 15,
              fontWeight: 700,
              color: colors.textDark,
            }}>
              {p.name}
            </div>
            <div style={{
              fontSize: 11,
              fontWeight: 400,
              color: colors.textMuted,
              lineHeight: 1.4,
            }}>
              {p.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Combine strip */}
      <div style={{
        marginTop: 14,
        background: colors.bg,
        borderRadius: 12,
        border: `1.5px solid ${colors.border}`,
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {primitives.map((p, i) => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: p.color,
                border: `1px solid ${p.borderColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
              }}>
                {p.icon}
              </div>
              {i < primitives.length - 1 && <PlusIcon />}
            </div>
          ))}
        </div>
        <ArrowRight />
        <div style={{
          fontSize: 14,
          fontWeight: 700,
          color: colors.accentGreen,
        }}>
          Your Workflow
        </div>
      </div>

      {/* Checkmarks */}
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {['Transparent — inspect every layer', 'Composable — mix and match freely', 'Flexible — swap any primitive'].map((text) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <CheckIcon />
            <span style={{ fontSize: 12, color: colors.textDark }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PrimitivesNotSuperAgentDiagram() {
  return (
    <div style={styles.container}>
      {/* Decorative blobs */}
      <DecorBlob color={colors.decorBlob1} size={180} top={-40} left={-50} />
      <DecorBlob color={colors.decorBlob2} size={120} top={-30} right={80} opacity={0.3} />
      <DecorBlob color={colors.decorBlob3} size={100} bottom={-20} left={200} opacity={0.3} />
      <DecorBlob color={colors.decorBlob1} size={140} bottom={-40} right={-30} opacity={0.3} />

      {/* Title */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={styles.title}>
          Rebyte Is Not a Super Agent
        </div>
      </div>

      {/* VS badge */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: colors.bg,
        border: `2px solid ${colors.borderDark}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 800,
        color: colors.textMuted,
        letterSpacing: '0.05em',
      }}>
        VS
      </div>

      {/* Two columns */}
      <div style={{ ...styles.columns, position: 'relative', zIndex: 1 }}>
        <SuperAgentSide />
        <PrimitivesSide />
      </div>
    </div>
  )
}
