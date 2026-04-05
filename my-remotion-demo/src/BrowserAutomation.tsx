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

const BRAND = {
  gold: "#D4A654",
  goldLight: "#f5d6a8",
  goldDark: "#c49a54",
  bg: "#f5d6a8",
  card: "#faecd8",
  text: "#2a2520",
  textSecondary: "#6b5d4d",
  sans: "Inter, system-ui, sans-serif",
  serif: "Libre Baskerville, Georgia, serif",
};

// Timing
const TITLE_CARD = 60; // 2s
const SYNC_VIDEO = 420; // 14s browser sync demo
const TRANSITION = 210; // 7s "works with any browser app"
const DOCS_CLIP = 150; // 5s Google Docs
const SHEETS_CLIP = 150; // 5s Google Sheets
const OUTRO = 120; // 4s

export const BROWSER_AUTOMATION_TOTAL_FRAMES =
  TITLE_CARD + SYNC_VIDEO + TRANSITION + DOCS_CLIP + SHEETS_CLIP + OUTRO;

// ============ TITLE CARD ============
const TitleCard = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12 } });
  const fadeOut = interpolate(frame, [TITLE_CARD - 15, TITLE_CARD], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: BRAND.bg,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div style={{ fontSize: 72, marginBottom: 20 }}>🌐</div>
      <div
        style={{
          fontFamily: BRAND.serif,
          fontSize: 56,
          color: BRAND.text,
          transform: `scale(${scale})`,
        }}
      >
        Browser Intelligence by Rebyte
      </div>
    </AbsoluteFill>
  );
};

// ============ CAPTION ============
const Caption = ({
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

// ============ VIDEO CLIP WITH CAPTION ============
const VideoClip = ({
  videoSrc,
  caption,
  durationInFrames,
}: {
  videoSrc: string;
  caption: string;
  durationInFrames: number;
}) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
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
      <Sequence from={0} durationInFrames={durationInFrames}>
        <Caption text={caption} durationInFrames={durationInFrames} />
      </Sequence>
    </AbsoluteFill>
  );
};

// ============ SYNC VIDEO SEGMENT ============
const SyncVideoSegment = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [SYNC_VIDEO - 20, SYNC_VIDEO],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const opacity = Math.min(fadeIn, fadeOut);

  const captions = [
    { text: "Step 1: Open a remote browser", from: 0, duration: 120 },
    {
      text: "Step 2: Sync your session with permission",
      from: 120,
      duration: 80,
    },
    {
      text: "Step 3: Fully logged in — act on behalf of the user",
      from: 220,
      duration: 160,
    },
  ];

  return (
    <AbsoluteFill style={{ opacity }}>
      <OffthreadVideo
        src={staticFile("explainer/videos/browser-sync-v1.mp4")}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {captions.map((cap, i) => (
        <Sequence key={i} from={cap.from} durationInFrames={cap.duration}>
          <Caption text={cap.text} durationInFrames={cap.duration} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// ============ TRANSITION CARD ============
const TransitionCard = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1 = spring({ frame: frame - 10, fps, config: { damping: 14 } });
  const line2 = spring({ frame: frame - 30, fps, config: { damping: 14 } });
  const line3 = spring({ frame: frame - 50, fps, config: { damping: 14 } });

  const items = [
    { text: "Draft marketing plans in Google Docs", progress: line1 },
    { text: "Build CRM dashboards in Google Sheets", progress: line2 },
    { text: "Works with any browser application", progress: line3 },
  ];

  return (
    <AbsoluteFill
      style={{
        background: BRAND.bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "center",
        }}
      >
        {items.map(({ text, progress }) => (
          <div
            key={text}
            style={{
              fontFamily: BRAND.sans,
              fontSize: 32,
              fontWeight: 600,
              color: BRAND.text,
              background: BRAND.card,
              padding: "16px 40px",
              borderRadius: 14,
              border: `2px solid ${BRAND.goldDark}`,
              opacity: progress,
              transform: `translateY(${interpolate(progress, [0, 1], [20, 0])}px)`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ============ OUTRO ============
const Outro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 12 } });
  const taglineOpacity = interpolate(frame, [30, 55], [0, 1], {
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
          fontSize: 36,
          color: BRAND.text,
          opacity: taglineOpacity,
        }}
      >
        Full browser automation, powered by Rebyte.
      </div>
    </AbsoluteFill>
  );
};

// ============ MAIN ============
export const BrowserAutomation = () => {
  return (
    <AbsoluteFill style={{ background: BRAND.bg }}>
      <Audio src={staticFile("audio/bg.mp3")} volume={0.015} />

      {/* Title Card */}
      <Sequence from={0} durationInFrames={TITLE_CARD}>
        <TitleCard />
      </Sequence>

      {/* Browser Sync Demo */}
      <Sequence from={TITLE_CARD} durationInFrames={SYNC_VIDEO}>
        <SyncVideoSegment />
        <Audio src={staticFile("explainer/audio/browser-sync.mp3")} />
      </Sequence>

      {/* Transition: works with any browser app */}
      <Sequence
        from={TITLE_CARD + SYNC_VIDEO}
        durationInFrames={TRANSITION}
      >
        <TransitionCard />
        <Audio src={staticFile("explainer/audio/browser-transition.mp3")} />
      </Sequence>

      {/* Google Docs clip */}
      <Sequence
        from={TITLE_CARD + SYNC_VIDEO + TRANSITION}
        durationInFrames={DOCS_CLIP}
      >
        <VideoClip
          videoSrc="explainer/videos/marketing-clip.mp4"
          caption="Drafting a marketing plan in Google Docs"
          durationInFrames={DOCS_CLIP}
        />
        <Audio src={staticFile("explainer/audio/browser-docs.mp3")} />
      </Sequence>

      {/* Google Sheets clip */}
      <Sequence
        from={TITLE_CARD + SYNC_VIDEO + TRANSITION + DOCS_CLIP}
        durationInFrames={SHEETS_CLIP}
      >
        <VideoClip
          videoSrc="explainer/videos/sheets-clip.mp4"
          caption="Building a CRM dashboard in Google Sheets"
          durationInFrames={SHEETS_CLIP}
        />
        <Audio src={staticFile("explainer/audio/browser-sheets.mp3")} />
      </Sequence>

      {/* Outro */}
      <Sequence
        from={TITLE_CARD + SYNC_VIDEO + TRANSITION + DOCS_CLIP + SHEETS_CLIP}
        durationInFrames={OUTRO}
      >
        <Outro />
        <Audio src={staticFile("explainer/audio/browser-outro.mp3")} />
      </Sequence>
    </AbsoluteFill>
  );
};
