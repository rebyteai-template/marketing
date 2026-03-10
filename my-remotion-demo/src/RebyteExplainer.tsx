import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  staticFile,
  OffthreadVideo,
} from "remotion";
import { Audio } from "@remotion/media";

// ============ BRAND TOKENS ============
const BRAND = {
  gold: "#D4A654",
  goldLight: "#f5d6a8",
  goldDark: "#c49a54",
  black: "#2a2520",
  cream: "#faf7f2",
  bg: "#f5d6a8",
  card: "#faecd8",
  cardAlt: "#fff8ee",
  muted: "#a08c6e",
  text: "#2a2520",
  textSecondary: "#6b5d4d",
  border: "rgba(180,150,100,0.3)",
  sans: "Inter, system-ui, sans-serif",
  serif: "Libre Baskerville, Georgia, serif",
  mono: "SF Mono, Cascadia Code, Consolas, monospace",
};

// ============ TIMING ============
const PART1 = 370; // Intro (~12.3s)
const PART2 = 570; // Marketing Agent (~19s)
const PART3 = 570; // Sales CRM Agent (~19s)
const PART4 = 690; // Collaboration (~23s)
const PART5 = 270; // Outro (~9s)
const TITLE_CARD = 60; // 2s title cards

export const REBYTE_EXPLAINER_TOTAL_FRAMES =
  PART1 + PART2 + PART3 + PART4 + PART5;

// Sequence start offsets
const P2_START = PART1;
const P3_START = P2_START + PART2;
const P4_START = P3_START + PART3;
const P5_START = P4_START + PART4;

// ============ INTRO SCENE ============
const IntroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Logo + title (frames 0–70)
  const logoScale = spring({ frame, fps, config: { damping: 12 } });
  const titleOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headerFade = interpolate(frame, [65, 85], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 2: Full screenshot fades in (frames 75–95)
  const screenshotOpacity = interpolate(frame, [75, 95], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 3: Zoom from full view into Agent Computers sidebar (frames 110–240)
  const zoomProgress = interpolate(frame, [110, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Ease out for smooth deceleration
  const zoomEased = 1 - Math.pow(1 - zoomProgress, 3);
  const zoomScale = interpolate(zoomEased, [0, 1], [1, 3.5]);

  // Fade out at end
  const fadeOut = interpolate(frame, [PART1 - 30, PART1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Image sizing: 3600x2338 retina → displayed at 1920 wide
  // Scale = 1920/1800 = 1.0667, height = 1169 * 1.0667 = 1247
  // Centered vertically: top = -(1247 - 1080) / 2 = -83.5
  // Agent Computers center in image element: (135 * 1.067, 360 * 1.067) ≈ (144, 384)

  return (
    <AbsoluteFill style={{ background: BRAND.bg, opacity: fadeOut }}>
      {/* Phase 1: Logo + Title */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: headerFade,
          zIndex: 2,
        }}
      >
        <Img
          src={staticFile("explainer/logos/rebyte.png")}
          style={{
            width: 120,
            height: 120,
            transform: `scale(${logoScale})`,
            marginBottom: 24,
          }}
        />
        <div
          style={{
            fontFamily: BRAND.serif,
            fontSize: 64,
            color: BRAND.text,
            opacity: titleOpacity,
          }}
        >
          Your AI Agent Team on Cloud
        </div>
      </AbsoluteFill>

      {/* Phase 2+3: Full screenshot → zoom into Agent Computers */}
      <AbsoluteFill style={{ opacity: screenshotOpacity, overflow: "hidden" }}>
        <Img
          src={staticFile("explainer/agent-computers-ui.png")}
          style={{
            position: "absolute",
            width: 1920,
            height: 1247,
            top: -83,
            left: 0,
            transformOrigin: "0px 384px",
            transform: `scale(${zoomScale})`,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ============ TITLE CARD ============
const TitleCard = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: string;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12 } });
  const subOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [TITLE_CARD - 15, TITLE_CARD],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: BRAND.bg,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div style={{ fontSize: 72, marginBottom: 20 }}>{icon}</div>
      <div
        style={{
          fontFamily: BRAND.serif,
          fontSize: 56,
          color: BRAND.text,
          transform: `scale(${scale})`,
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: BRAND.sans,
          fontSize: 24,
          color: BRAND.textSecondary,
          opacity: subOpacity,
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};

// ============ CAPTION OVERLAY ============
const CaptionOverlay = ({
  text,
  durationInFrames,
}: {
  text: string;
  durationInFrames: number;
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 10, durationInFrames - 10, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: BRAND.sans,
          fontSize: 28,
          fontWeight: 600,
          color: "#fff",
          background: "rgba(42, 37, 32, 0.8)",
          padding: "14px 36px",
          borderRadius: 12,
          backdropFilter: "blur(8px)",
        }}
      >
        {text}
      </div>
    </div>
  );
};

// ============ SPLIT SCREEN LABELS ============
const SplitLabels = ({ durationInFrames }: { durationInFrames: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const labelIn = spring({ frame, fps, config: { damping: 14 } });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        opacity: labelIn * fadeOut,
        pointerEvents: "none",
      }}
    >
      {["Agent", "Human"].map((label) => (
        <div
          key={label}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: BRAND.sans,
              fontSize: 48,
              fontWeight: 700,
              color: "#fff",
              background: "rgba(42, 37, 32, 0.7)",
              padding: "20px 60px",
              borderRadius: 16,
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255,255,255,0.2)",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

// ============ VIDEO SEGMENT ============
const VideoSegment = ({
  videoSrc,
  durationInFrames,
  captions,
  splitLabels,
}: {
  videoSrc: string;
  durationInFrames: number;
  captions: Array<{ text: string; from: number; duration: number }>;
  splitLabels?: boolean;
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <AbsoluteFill style={{ opacity }}>
      <OffthreadVideo
        src={staticFile(videoSrc)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {splitLabels && (
        <SplitLabels durationInFrames={durationInFrames} />
      )}
      {captions.map((cap, i) => (
        <Sequence key={i} from={cap.from} durationInFrames={cap.duration}>
          <CaptionOverlay text={cap.text} durationInFrames={cap.duration} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// ============ OUTRO SCENE ============
const OutroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cards = [
    { text: "Marketing", delay: 0 },
    { text: "Sales", delay: 8 },
    { text: "Legal", delay: 16 },
    { text: "CEO", delay: 24 },
    { text: "Finance", delay: 32 },
    { text: "HR", delay: 40 },
    { text: "Operations", delay: 48 },
  ];

  const logoScale = spring({
    frame: frame - 70,
    fps,
    config: { damping: 12 },
  });
  const taglineOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateRight: "clamp",
  });
  const urlOpacity = interpolate(frame, [130, 160], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: BRAND.bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", maxWidth: 1400, marginBottom: 50 }}>
        {cards.map((card) => {
          const p = spring({
            frame: frame - card.delay,
            fps,
            config: { damping: 14 },
          });
          return (
            <div
              key={card.text}
              style={{
                fontFamily: BRAND.sans,
                fontSize: 22,
                fontWeight: 600,
                color: BRAND.text,
                background: BRAND.card,
                padding: "16px 36px",
                borderRadius: 12,
                border: `2px solid ${BRAND.goldDark}`,
                opacity: p,
                transform: `scale(${p})`,
              }}
            >
              {card.text}
            </div>
          );
        })}
      </div>

      <Img
        src={staticFile("explainer/logos/rebyte.png")}
        style={{
          width: 100,
          height: 100,
          transform: `scale(${logoScale})`,
          marginBottom: 24,
        }}
      />

      <div
        style={{
          fontFamily: BRAND.serif,
          fontSize: 40,
          color: BRAND.text,
          opacity: taglineOpacity,
          marginBottom: 16,
        }}
      >
        Your AI agent team on cloud.
      </div>

      <div
        style={{
          fontFamily: BRAND.sans,
          fontSize: 28,
          color: BRAND.muted,
          opacity: urlOpacity,
        }}
      >
        rebyte.ai
      </div>
    </AbsoluteFill>
  );
};

// ============ MAIN COMPOSITION ============
export const RebyteExplainer = () => {
  return (
    <AbsoluteFill style={{ background: BRAND.bg }}>
      {/* Background Music */}
      <Audio src={staticFile("audio/bg.mp3")} volume={0.015} />

      {/* Part 1: Intro */}
      <Sequence from={0} durationInFrames={PART1}>
        <IntroScene />
        <Audio src={staticFile("explainer/audio/part1.mp3")} />
      </Sequence>

      {/* Part 2: Marketing Agent */}
      <Sequence from={P2_START} durationInFrames={PART2}>
        <Sequence from={0} durationInFrames={TITLE_CARD}>
          <TitleCard
            title="Marketing Agent"
            subtitle="Blog research → Google Docs marketing plan"
            icon="📣"
          />
        </Sequence>
        <Sequence from={TITLE_CARD} durationInFrames={PART2 - TITLE_CARD}>
          <VideoSegment
            videoSrc="explainer/videos/marketing-v2.mp4"
            durationInFrames={PART2 - TITLE_CARD}
            captions={[
              { text: "Reading rebyte.ai/blog...", from: 0, duration: 150 },
              {
                text: "Writing marketing plan in Google Docs",
                from: 170,
                duration: 150,
              },
              {
                text: "Executive Summary, Value Props, Personas, Strategy",
                from: 340,
                duration: 130,
              },
            ]}
          />
        </Sequence>
        <Audio src={staticFile("explainer/audio/part2.mp3")} />
      </Sequence>

      {/* Part 3: Sales CRM Agent */}
      <Sequence from={P3_START} durationInFrames={PART3}>
        <Sequence from={0} durationInFrames={TITLE_CARD}>
          <TitleCard
            title="Sales CRM Agent"
            subtitle="Prompt → Full CRM in Google Sheets"
            icon="📊"
          />
        </Sequence>
        <Sequence from={TITLE_CARD} durationInFrames={PART3 - TITLE_CARD}>
          <VideoSegment
            videoSrc="explainer/videos/askgoogle-v1.mp4"
            durationInFrames={PART3 - TITLE_CARD}
            captions={[
              {
                text: "One prompt to build a complete CRM",
                from: 0,
                duration: 150,
              },
              {
                text: "Formulas, filters, and formatting — automatic",
                from: 170,
                duration: 150,
              },
              {
                text: "Summary dashboard with live totals",
                from: 340,
                duration: 145,
              },
            ]}
          />
        </Sequence>
        <Audio src={staticFile("explainer/audio/part3.mp3")} />
      </Sequence>

      {/* Part 4: Collaboration */}
      <Sequence from={P4_START} durationInFrames={PART4}>
        <Sequence from={0} durationInFrames={TITLE_CARD}>
          <TitleCard
            title="Collaboration"
            subtitle="AI agent + Human — same Google Sheet, real time"
            icon="🤝"
          />
        </Sequence>
        <Sequence from={TITLE_CARD} durationInFrames={PART4 - TITLE_CARD}>
          <VideoSegment
            videoSrc="explainer/videos/collab-v1.mp4"
            durationInFrames={PART4 - TITLE_CARD}
            splitLabels
            captions={[
              {
                text: "Agent and human — same spreadsheet, real time",
                from: 0,
                duration: 180,
              },
              {
                text: "21 leads imported with full contact details",
                from: 200,
                duration: 200,
              },
              {
                text: "$1.96M pipeline — built in minutes",
                from: 420,
                duration: 180,
              },
            ]}
          />
        </Sequence>
        <Audio src={staticFile("explainer/audio/part4.mp3")} />
      </Sequence>

      {/* Part 5: Outro */}
      <Sequence from={P5_START} durationInFrames={PART5}>
        <OutroScene />
        <Audio src={staticFile("explainer/audio/part5.mp3")} />
      </Sequence>
    </AbsoluteFill>
  );
};
