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

// ============ TIMING (adjusted for Japanese audio) ============
const PART1 = 540; // Intro (~18s, JA audio 16s)
const PART2 = 620; // Marketing Agent (~20.7s, JA audio 18.3s)
const PART3 = 570; // Sales CRM Agent (~19s, JA audio 16.3s)
const PART4 = 960; // Collaboration (~32s, JA audio 29.9s)
const PART5 = 300; // Outro (~10s, JA audio 7.9s)
const TITLE_CARD = 60; // 2s title cards

export const REBYTE_EXPLAINER_JA_TOTAL_FRAMES =
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

  const logoScale = spring({ frame, fps, config: { damping: 12 } });
  const titleOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headerFade = interpolate(frame, [65, 85], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const screenshotOpacity = interpolate(frame, [75, 95], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const zoomProgress = interpolate(frame, [110, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const zoomEased = 1 - Math.pow(1 - zoomProgress, 3);
  const zoomScale = interpolate(zoomEased, [0, 1], [1, 3.5]);

  const fadeOut = interpolate(frame, [PART1 - 30, PART1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: BRAND.bg, opacity: fadeOut }}>
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
            fontSize: 56,
            color: BRAND.text,
            opacity: titleOpacity,
          }}
        >
          クラウド上のAIエージェントチーム
        </div>
      </AbsoluteFill>

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
          fontSize: 52,
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
          fontSize: 22,
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
          fontSize: 26,
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
      {["エージェント", "人間"].map((label) => (
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
              fontSize: 44,
              fontWeight: 700,
              color: "#fff",
              background: "rgba(42, 37, 32, 0.7)",
              padding: "20px 50px",
              borderRadius: 16,
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255,255,255,0.2)",
              letterSpacing: 2,
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
    { text: "マーケティング", delay: 0 },
    { text: "営業", delay: 8 },
    { text: "法務", delay: 16 },
    { text: "CEO", delay: 24 },
    { text: "財務", delay: 32 },
    { text: "人事", delay: 40 },
    { text: "オペレーション", delay: 48 },
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
          fontSize: 36,
          color: BRAND.text,
          opacity: taglineOpacity,
          marginBottom: 16,
        }}
      >
        クラウド上のAIエージェントチーム
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
export const RebyteExplainerJa = () => {
  return (
    <AbsoluteFill style={{ background: BRAND.bg }}>
      <Audio src={staticFile("audio/bg.mp3")} volume={0.015} />

      {/* Part 1: イントロ */}
      <Sequence from={0} durationInFrames={PART1}>
        <IntroScene />
        <Audio src={staticFile("explainer/audio/part1-ja.mp3")} />
      </Sequence>

      {/* Part 2: マーケティングエージェント */}
      <Sequence from={P2_START} durationInFrames={PART2}>
        <Sequence from={0} durationInFrames={TITLE_CARD}>
          <TitleCard
            title="マーケティングエージェント"
            subtitle="ブログ調査 → Google Docsマーケティングプラン"
            icon="📣"
          />
        </Sequence>
        <Sequence from={TITLE_CARD} durationInFrames={PART2 - TITLE_CARD}>
          <VideoSegment
            videoSrc="explainer/videos/marketing-v2.mp4"
            durationInFrames={PART2 - TITLE_CARD}
            captions={[
              { text: "rebyte.ai/blogを読み取り中...", from: 0, duration: 150 },
              {
                text: "Google Docsでマーケティングプランを作成中",
                from: 170,
                duration: 150,
              },
              {
                text: "エグゼクティブサマリー、価値提案、ペルソナ、戦略",
                from: 340,
                duration: 130,
              },
            ]}
          />
        </Sequence>
        <Audio src={staticFile("explainer/audio/part2-ja.mp3")} />
      </Sequence>

      {/* Part 3: 営業CRMエージェント */}
      <Sequence from={P3_START} durationInFrames={PART3}>
        <Sequence from={0} durationInFrames={TITLE_CARD}>
          <TitleCard
            title="営業CRMエージェント"
            subtitle="プロンプト → Google Sheetsで完全なCRM"
            icon="📊"
          />
        </Sequence>
        <Sequence from={TITLE_CARD} durationInFrames={PART3 - TITLE_CARD}>
          <VideoSegment
            videoSrc="explainer/videos/askgoogle-v1.mp4"
            durationInFrames={PART3 - TITLE_CARD}
            captions={[
              {
                text: "一つのプロンプトで完全なCRMを構築",
                from: 0,
                duration: 150,
              },
              {
                text: "数式、フィルター、書式設定 — すべて自動",
                from: 170,
                duration: 150,
              },
              {
                text: "リアルタイム集計のサマリーダッシュボード",
                from: 340,
                duration: 145,
              },
            ]}
          />
        </Sequence>
        <Audio src={staticFile("explainer/audio/part3-ja.mp3")} />
      </Sequence>

      {/* Part 4: コラボレーション */}
      <Sequence from={P4_START} durationInFrames={PART4}>
        <Sequence from={0} durationInFrames={TITLE_CARD}>
          <TitleCard
            title="コラボレーション"
            subtitle="AIエージェント + 人間 — 同じGoogle Sheet、リアルタイム"
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
                text: "エージェントと人間 — 同じスプレッドシート、リアルタイム",
                from: 0,
                duration: 200,
              },
              {
                text: "21件のリードを連絡先情報付きでインポート",
                from: 220,
                duration: 250,
              },
              {
                text: "196万ドルのパイプライン — 数分で構築",
                from: 500,
                duration: 200,
              },
            ]}
          />
        </Sequence>
        <Audio src={staticFile("explainer/audio/part4-ja.mp3")} />
      </Sequence>

      {/* Part 5: アウトロ */}
      <Sequence from={P5_START} durationInFrames={PART5}>
        <OutroScene />
        <Audio src={staticFile("explainer/audio/part5-ja.mp3")} />
      </Sequence>
    </AbsoluteFill>
  );
};
