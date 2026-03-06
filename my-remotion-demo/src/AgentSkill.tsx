import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";

// ============ RESPONSIVE SCALING SYSTEM ============
const BASE_WIDTH = 1280;

const useScale = () => {
  const { width, height } = useVideoConfig();
  const scale = width / BASE_WIDTH;
  const s = (px: number) => px * scale;
  return { s, scale, width, height };
};

// ============ ROBOT SVG ============
const RobotSVG = ({
  size = 200,
  mood = "neutral" as "neutral" | "sad" | "happy",
  style = {},
}: {
  size?: number;
  mood?: "neutral" | "sad" | "happy";
  style?: React.CSSProperties;
}) => {
  const mouthD =
    mood === "happy"
      ? "M 55,105 Q 75,125 95,105"
      : mood === "sad"
        ? "M 55,115 Q 75,100 95,115"
        : "M 58,110 L 92,110";

  return (
    <svg viewBox="0 0 150 160" style={{ width: size, height: size, ...style }}>
      {/* Antenna */}
      <line x1="75" y1="5" x2="75" y2="25" stroke="#3b82f6" strokeWidth="4" />
      <circle cx="75" cy="5" r="6" fill="#60a5fa" />
      {/* Head */}
      <rect
        x="25"
        y="25"
        width="100"
        height="80"
        rx="18"
        fill="#3b82f6"
        stroke="#2563eb"
        strokeWidth="2"
      />
      {/* Eyes */}
      <circle cx="55" cy="60" r="12" fill="white" />
      <circle cx="95" cy="60" r="12" fill="white" />
      <circle cx="55" cy="60" r="6" fill="#1e293b" />
      <circle cx="95" cy="60" r="6" fill="#1e293b" />
      {/* Eye shine */}
      <circle cx="52" cy="57" r="2.5" fill="white" />
      <circle cx="92" cy="57" r="2.5" fill="white" />
      {/* Mouth */}
      <path
        d={mouthD}
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Body */}
      <rect
        x="35"
        y="110"
        width="80"
        height="40"
        rx="10"
        fill="#3b82f6"
        stroke="#2563eb"
        strokeWidth="2"
      />
      {/* Body light */}
      <circle
        cx="75"
        cy="130"
        r="6"
        fill={mood === "happy" ? "#4ade80" : "#60a5fa"}
      />
      {/* Arms */}
      <rect x="10" y="115" width="22" height="8" rx="4" fill="#2563eb" />
      <rect x="118" y="115" width="22" height="8" rx="4" fill="#2563eb" />
    </svg>
  );
};

// ============ SKILL CARD ============
const SkillCard = ({
  emoji,
  label,
  color,
  size = 100,
  style = {},
}: {
  emoji: string;
  label: string;
  color: string;
  size?: number;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      width: size,
      height: size * 1.2,
      background: `linear-gradient(135deg, ${color}22, ${color}44)`,
      border: `2px solid ${color}`,
      borderRadius: size * 0.16,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: size * 0.06,
      boxShadow: `0 4px 16px ${color}33`,
      ...style,
    }}
  >
    <span style={{ fontSize: size * 0.38 }}>{emoji}</span>
    <span
      style={{
        fontSize: size * 0.15,
        fontWeight: 600,
        color: "#1e293b",
        fontFamily: "system-ui",
      }}
    >
      {label}
    </span>
  </div>
);

// ============ SPEECH BUBBLE ============
const SpeechBubble = ({
  text,
  color = "#1e293b",
  bg = "white",
  fontSize = 18,
  style = {},
}: {
  text: string;
  color?: string;
  bg?: string;
  fontSize?: number;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      background: bg,
      borderRadius: 14,
      padding: "10px 18px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      fontSize,
      fontWeight: 500,
      color,
      fontFamily: "system-ui",
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {text}
  </div>
);

// ============ SPARKLE ============
const Sparkles = ({
  count = 8,
  radius = 80,
  size = 6,
  color = "#8b5cf6",
  progress = 1,
  style = {},
}: {
  count?: number;
  radius?: number;
  size?: number;
  color?: string;
  progress?: number;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      position: "absolute",
      width: radius * 2,
      height: radius * 2,
      ...style,
    }}
  >
    {Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const r = radius * progress;
      const x = radius + Math.cos(angle) * r;
      const y = radius + Math.sin(angle) * r;
      return (
        <div
          key={i}
          style={{
            position: "absolute",
            left: x - size / 2,
            top: y - size / 2,
            width: size,
            height: size,
            borderRadius: "50%",
            background: color,
            opacity: interpolate(progress, [0, 0.5, 1], [0, 1, 0.3]),
            transform: `scale(${interpolate(progress, [0, 0.5, 1], [0, 1.5, 0.8])})`,
          }}
        />
      );
    })}
  </div>
);

// ============ SCENE 1: TITLE ============
const TitleScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 100 },
    delay: 10,
  });
  const subtitleFade = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 60 },
    delay: 30,
  });
  const lineFade = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 50,
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #ede9fe 0%, #e0e7ff 50%, #dbeafe 100%)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: s(16),
      }}
    >
      {/* Decorative line */}
      <div
        style={{
          width: s(60),
          height: s(4),
          background: "#8b5cf6",
          borderRadius: s(2),
          opacity: lineFade,
          transform: `scaleX(${lineFade})`,
          marginBottom: s(8),
        }}
      />

      {/* Title */}
      <div
        style={{
          fontSize: s(56),
          fontWeight: 800,
          color: "#1e293b",
          fontFamily: "system-ui",
          opacity: titleScale,
          transform: `scale(${interpolate(titleScale, [0, 1], [0.5, 1])})`,
          letterSpacing: s(3),
        }}
      >
        什么是 Agent Skill？
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: s(22),
          color: "#64748b",
          fontFamily: "system-ui",
          opacity: subtitleFade,
          transform: `translateY(${interpolate(subtitleFade, [0, 1], [20, 0])}px)`,
          marginTop: s(4),
        }}
      >
        一分钟搞懂 AI 代理技能
      </div>

      {/* Decorative line bottom */}
      <div
        style={{
          width: s(60),
          height: s(4),
          background: "#8b5cf6",
          borderRadius: s(2),
          opacity: lineFade,
          transform: `scaleX(${lineFade})`,
          marginTop: s(8),
        }}
      />
    </AbsoluteFill>
  );
};

// ============ SCENE 2: THE LONELY ROBOT ============
const LonelyRobotScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const robotIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 5,
  });
  const bubble1In = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 30,
  });
  const bubble2In = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 80,
  });
  const sadIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 130,
  });
  const bubble3In = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 150,
  });
  const bottomTextIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 200,
  });

  const robotMood = frame > 120 ? "sad" : "neutral";
  const robotBob = Math.sin(frame * 0.08) * 4;

  return (
    <AbsoluteFill
      style={{
        background: "#f0f4ff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Robot */}
      <div
        style={{
          position: "absolute",
          left: s(200),
          top: s(80),
          opacity: robotIn,
          transform: `scale(${interpolate(robotIn, [0, 1], [0.5, 1])}) translateY(${robotBob}px)`,
        }}
      >
        <RobotSVG size={s(220)} mood={robotMood} />
      </div>

      {/* Robot says: I can write code! */}
      <div
        style={{
          position: "absolute",
          left: s(420),
          top: s(100),
          opacity: bubble1In,
          transform: `scale(${interpolate(bubble1In, [0, 1], [0.5, 1])})`,
        }}
      >
        <SpeechBubble
          text="我会写代码！💻"
          fontSize={s(22)}
          bg="#dbeafe"
          color="#1e40af"
        />
      </div>

      {/* User asks: Make me a spreadsheet? */}
      <div
        style={{
          position: "absolute",
          right: s(120),
          top: s(180),
          opacity: bubble2In,
          transform: `translateX(${interpolate(bubble2In, [0, 1], [40, 0])}px)`,
        }}
      >
        <SpeechBubble
          text="帮我做个表格？📊"
          fontSize={s(22)}
          bg="#f0fdf4"
          color="#166534"
        />
      </div>

      {/* Robot says: I can't... */}
      <div
        style={{
          position: "absolute",
          left: s(420),
          top: s(260),
          opacity: bubble3In,
          transform: `scale(${interpolate(bubble3In, [0, 1], [0.5, 1])})`,
        }}
      >
        <SpeechBubble
          text="我不会... 😢"
          fontSize={s(22)}
          bg="#fef2f2"
          color="#991b1b"
        />
      </div>

      {/* Sad overlay effect */}
      <div
        style={{
          position: "absolute",
          left: s(200),
          top: s(80),
          width: s(220),
          height: s(220),
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)",
          opacity: sadIn,
        }}
      />

      {/* Bottom text */}
      <div
        style={{
          position: "absolute",
          bottom: s(60),
          textAlign: "center",
          width: "100%",
          opacity: bottomTextIn,
          transform: `translateY(${interpolate(bottomTextIn, [0, 1], [20, 0])}px)`,
        }}
      >
        <div
          style={{
            fontSize: s(28),
            fontWeight: 700,
            color: "#1e293b",
            fontFamily: "system-ui",
          }}
        >
          AI 代理很聪明，但能力有限
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 3: SKILLS APPEAR ============
const SKILLS = [
  { emoji: "📊", label: "表格", color: "#10b981" },
  { emoji: "📝", label: "问卷", color: "#8b5cf6" },
  { emoji: "🔍", label: "调研", color: "#f59e0b" },
  { emoji: "📈", label: "数据分析", color: "#3b82f6" },
  { emoji: "🎨", label: "图片生成", color: "#ec4899" },
  { emoji: "🌐", label: "网页应用", color: "#06b6d4" },
];

const SkillsAppearScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const titleIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 5,
  });
  const subtitleIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 240,
  });

  // Card positions in a 3x2 grid
  const positions = [
    { x: 280, y: 160 },
    { x: 530, y: 160 },
    { x: 780, y: 160 },
    { x: 280, y: 340 },
    { x: 530, y: 340 },
    { x: 780, y: 340 },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "#f0f4ff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: s(40),
          fontSize: s(34),
          fontWeight: 700,
          color: "#1e293b",
          fontFamily: "system-ui",
          opacity: titleIn,
          transform: `translateY(${interpolate(titleIn, [0, 1], [20, 0])}px)`,
        }}
      >
        技能 = 超能力卡片
      </div>

      {/* Skill cards */}
      {SKILLS.map((skill, i) => {
        const delay = 30 + i * 15;
        const cardIn = spring({
          frame,
          fps,
          config: { damping: 12, stiffness: 100 },
          delay,
        });

        // Cards fly in from edges
        const startX = i % 2 === 0 ? -200 : 1480;
        const startY = i < 3 ? -200 : 920;
        const pos = positions[i];

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: s(interpolate(cardIn, [0, 1], [startX, pos.x])),
              top: s(interpolate(cardIn, [0, 1], [startY, pos.y])),
              transform: `scale(${interpolate(cardIn, [0, 1], [0.3, 1])}) rotate(${interpolate(cardIn, [0, 1], [i % 2 === 0 ? -30 : 30, 0])}deg)`,
              opacity: cardIn,
            }}
          >
            <SkillCard
              emoji={skill.emoji}
              label={skill.label}
              color={skill.color}
              size={s(120)}
            />
          </div>
        );
      })}

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          bottom: s(50),
          fontSize: s(22),
          color: "#64748b",
          fontFamily: "system-ui",
          opacity: subtitleIn,
          transform: `translateY(${interpolate(subtitleIn, [0, 1], [15, 0])}px)`,
        }}
      >
        每张卡片教会代理一项新本领
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 4: THE COMBINATION ============
const CombinationScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const robotIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 5,
  });
  const cardIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 30,
  });
  const mergeAnim = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 60 },
    delay: 70,
  });
  const sparkleAnim = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 40 },
    delay: 110,
  });
  const userTextIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 160,
  });
  const resultIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 60 },
    delay: 250,
  });
  const bottomTextIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 350,
  });

  // Robot and card merge toward center
  const robotX = interpolate(mergeAnim, [0, 1], [250, 500]);
  const cardX = interpolate(mergeAnim, [0, 1], [800, 580]);
  const glowScale = interpolate(sparkleAnim, [0, 1], [0, 1.5]);
  const glowOpacity = interpolate(sparkleAnim, [0, 1], [0, 0.6]);

  return (
    <AbsoluteFill
      style={{
        background: "#f0f4ff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Robot */}
      <div
        style={{
          position: "absolute",
          left: s(robotX),
          top: s(100),
          opacity: robotIn,
          transform: `scale(${interpolate(robotIn, [0, 1], [0.5, 1])})`,
          zIndex: 2,
        }}
      >
        <RobotSVG size={s(180)} mood={mergeAnim > 0.8 ? "happy" : "neutral"} />
      </div>

      {/* Skill card */}
      <div
        style={{
          position: "absolute",
          left: s(cardX),
          top: s(140),
          opacity: cardIn,
          transform: `scale(${interpolate(cardIn, [0, 1], [0.5, 1])})`,
          zIndex: 2,
        }}
      >
        <SkillCard
          emoji="📝"
          label="问卷技能"
          color="#8b5cf6"
          size={s(110)}
        />
      </div>

      {/* Merge glow */}
      <div
        style={{
          position: "absolute",
          left: s(490),
          top: s(100),
          width: s(200),
          height: s(200),
          borderRadius: "50%",
          background: "radial-gradient(circle, #8b5cf644 0%, transparent 70%)",
          transform: `scale(${glowScale})`,
          opacity: glowOpacity,
          zIndex: 1,
        }}
      />

      {/* Sparkles */}
      {sparkleAnim > 0.1 && (
        <Sparkles
          count={12}
          radius={s(100)}
          size={s(8)}
          color="#8b5cf6"
          progress={sparkleAnim}
          style={{ left: s(490), top: s(80), zIndex: 3 }}
        />
      )}

      {/* User request */}
      <div
        style={{
          position: "absolute",
          top: s(340),
          textAlign: "center",
          width: "100%",
          opacity: userTextIn,
          transform: `translateY(${interpolate(userTextIn, [0, 1], [20, 0])}px)`,
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "white",
            borderRadius: s(14),
            padding: `${s(12)}px ${s(24)}px`,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            fontSize: s(20),
            color: "#1e293b",
            fontFamily: "system-ui",
            border: "2px solid #e2e8f0",
          }}
        >
          💬 "帮我做一个客户满意度调查"
        </div>
      </div>

      {/* Result form mockup */}
      <div
        style={{
          position: "absolute",
          bottom: s(80),
          opacity: resultIn,
          transform: `scale(${interpolate(resultIn, [0, 1], [0.7, 1])}) translateY(${interpolate(resultIn, [0, 1], [30, 0])}px)`,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: s(16),
            padding: s(20),
            boxShadow: "0 8px 30px rgba(139,92,246,0.15)",
            border: "2px solid #8b5cf633",
            display: "flex",
            flexDirection: "column",
            gap: s(10),
            width: s(400),
          }}
        >
          <div
            style={{
              fontSize: s(16),
              fontWeight: 700,
              color: "#8b5cf6",
              fontFamily: "system-ui",
            }}
          >
            ✨ 客户满意度调查
          </div>
          {["整体满意度评分", "产品体验反馈", "改进建议"].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#f8fafc",
                borderRadius: s(8),
                padding: `${s(8)}px ${s(14)}px`,
                fontSize: s(14),
                color: "#475569",
                fontFamily: "system-ui",
                borderLeft: `3px solid #8b5cf6`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div
        style={{
          position: "absolute",
          bottom: s(30),
          fontSize: s(24),
          fontWeight: 700,
          color: "#1e293b",
          fontFamily: "system-ui",
          opacity: bottomTextIn,
          transform: `translateY(${interpolate(bottomTextIn, [0, 1], [15, 0])}px)`,
        }}
      >
        说一句话，技能帮你搞定
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 5: SKILL SHOWCASE ============
const SkillShowcaseScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const combos = [
    {
      emoji: "📊",
      label: "表格",
      color: "#10b981",
      result: "精美数据表格",
      resultItems: ["销售数据", "图表分析", "自动汇总"],
    },
    {
      emoji: "🔍",
      label: "调研",
      color: "#f59e0b",
      result: "深度调研报告",
      resultItems: ["市场趋势", "竞品分析", "数据洞察"],
    },
    {
      emoji: "🌐",
      label: "网页应用",
      color: "#06b6d4",
      result: "完整 Web 应用",
      resultItems: ["响应式设计", "交互功能", "一键部署"],
    },
  ];

  const sectionFrames = 100; // Each combo gets ~3.3 seconds

  const titleIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 5,
  });

  return (
    <AbsoluteFill
      style={{
        background: "#f0f4ff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: s(35),
          fontSize: s(30),
          fontWeight: 700,
          color: "#1e293b",
          fontFamily: "system-ui",
          opacity: titleIn,
        }}
      >
        一个代理，无限可能
      </div>

      {/* Combos */}
      {combos.map((combo, i) => {
        const comboStart = i * sectionFrames;
        const comboFrame = Math.max(0, frame - comboStart);
        const active =
          frame >= comboStart && frame < comboStart + sectionFrames;
        const comboIn = spring({
          frame: comboFrame,
          fps,
          config: { damping: 12, stiffness: 100 },
          delay: 5,
        });
        const arrowIn = spring({
          frame: comboFrame,
          fps,
          config: { damping: 12, stiffness: 80 },
          delay: 25,
        });
        const resultPop = spring({
          frame: comboFrame,
          fps,
          config: { damping: 10, stiffness: 80 },
          delay: 40,
        });

        if (!active && frame < comboStart) return null;
        const fadeOut =
          frame >= comboStart + sectionFrames - 10
            ? interpolate(
                frame,
                [comboStart + sectionFrames - 10, comboStart + sectionFrames],
                [1, 0],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
              )
            : 1;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: s(30),
              opacity: active ? comboIn * fadeOut : 0,
            }}
          >
            {/* Robot */}
            <div
              style={{
                transform: `scale(${interpolate(comboIn, [0, 1], [0.5, 1])})`,
              }}
            >
              <RobotSVG size={s(130)} mood="happy" />
            </div>

            {/* Plus sign */}
            <div
              style={{
                fontSize: s(36),
                fontWeight: 700,
                color: "#94a3b8",
                fontFamily: "system-ui",
                opacity: comboIn,
              }}
            >
              +
            </div>

            {/* Skill card */}
            <div
              style={{
                transform: `scale(${interpolate(comboIn, [0, 1], [0.5, 1])})`,
              }}
            >
              <SkillCard
                emoji={combo.emoji}
                label={combo.label}
                color={combo.color}
                size={s(90)}
              />
            </div>

            {/* Arrow */}
            <div
              style={{
                fontSize: s(30),
                color: combo.color,
                fontFamily: "system-ui",
                opacity: arrowIn,
                transform: `translateX(${interpolate(arrowIn, [0, 1], [-10, 0])}px)`,
              }}
            >
              →
            </div>

            {/* Result */}
            <div
              style={{
                background: "white",
                borderRadius: s(14),
                padding: `${s(14)}px ${s(20)}px`,
                boxShadow: `0 4px 20px ${combo.color}22`,
                border: `2px solid ${combo.color}44`,
                opacity: resultPop,
                transform: `scale(${interpolate(resultPop, [0, 1], [0.6, 1])})`,
                minWidth: s(200),
              }}
            >
              <div
                style={{
                  fontSize: s(17),
                  fontWeight: 700,
                  color: combo.color,
                  fontFamily: "system-ui",
                  marginBottom: s(8),
                }}
              >
                ✨ {combo.result}
              </div>
              {combo.resultItems.map((item, j) => (
                <div
                  key={j}
                  style={{
                    fontSize: s(13),
                    color: "#64748b",
                    fontFamily: "system-ui",
                    padding: `${s(3)}px 0`,
                    borderBottom:
                      j < combo.resultItems.length - 1
                        ? "1px solid #f1f5f9"
                        : "none",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ============ SCENE 6: OUTRO ============
const OutroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const robotIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 5,
  });
  const cardsOrbit = frame * 0.02;
  const textIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 30,
  });
  const logoIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 60 },
    delay: 80,
  });
  const taglineIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 60 },
    delay: 110,
  });

  const orbitRadius = s(180);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #1e293b 100%)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: s(20),
      }}
    >
      {/* Orbiting skills around robot */}
      <div
        style={{
          position: "relative",
          width: orbitRadius * 2 + s(120),
          height: orbitRadius * 2 + s(120),
          opacity: robotIn,
        }}
      >
        {/* Center robot */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <RobotSVG size={s(140)} mood="happy" />
        </div>

        {/* Glow around robot */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: s(200),
            height: s(200),
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
            zIndex: 1,
          }}
        />

        {/* Orbiting cards */}
        {SKILLS.map((skill, i) => {
          const angle = cardsOrbit + (i / SKILLS.length) * Math.PI * 2;
          const x = Math.cos(angle) * orbitRadius;
          const y = Math.sin(angle) * orbitRadius;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0.7)`,
              }}
            >
              <SkillCard
                emoji={skill.emoji}
                label={skill.label}
                color={skill.color}
                size={s(70)}
              />
            </div>
          );
        })}
      </div>

      {/* Main text */}
      <div
        style={{
          fontSize: s(34),
          fontWeight: 700,
          color: "#f1f5f9",
          fontFamily: "system-ui",
          opacity: textIn,
          transform: `translateY(${interpolate(textIn, [0, 1], [20, 0])}px)`,
          textAlign: "center",
        }}
      >
        Agent Skill = AI 代理的超能力
      </div>

      {/* Rebyte logo text */}
      <div
        style={{
          opacity: logoIn,
          transform: `scale(${interpolate(logoIn, [0, 1], [0.8, 1])})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: s(8),
          marginTop: s(10),
        }}
      >
        <div
          style={{
            fontSize: s(42),
            fontWeight: 800,
            color: "#8b5cf6",
            fontFamily: "system-ui",
            letterSpacing: s(4),
          }}
        >
          Rebyte
        </div>
        <div
          style={{
            fontSize: s(16),
            color: "#94a3b8",
            fontFamily: "system-ui",
            opacity: taglineIn,
            transform: `translateY(${interpolate(taglineIn, [0, 1], [10, 0])}px)`,
          }}
        >
          让每个人都能驾驭 AI 代理
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ PROGRESS BAR ============
const ProgressBar = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { s } = useScale();

  const progress = (frame / durationInFrames) * 100;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: s(4),
        background: "rgba(0,0,0,0.1)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(90deg, #8b5cf6, #3b82f6)",
        }}
      />
    </div>
  );
};

// ============ MAIN COMPOSITION ============
const SCENES = [
  { component: TitleScene, duration: 120 },
  { component: LonelyRobotScene, duration: 300 },
  { component: SkillsAppearScene, duration: 360 },
  { component: CombinationScene, duration: 480 },
  { component: SkillShowcaseScene, duration: 300 },
  { component: OutroScene, duration: 240 },
];

export const AGENT_SKILL_TOTAL_FRAMES = SCENES.reduce(
  (sum, s) => sum + s.duration,
  0,
);

export const AgentSkillExplainer = () => {
  let currentStart = 0;

  return (
    <AbsoluteFill style={{ background: "#f0f4ff" }}>
      {SCENES.map(({ component: Scene, duration }, i) => {
        const from = currentStart;
        currentStart += duration;
        return (
          <Sequence key={i} from={from} durationInFrames={duration}>
            <Scene />
          </Sequence>
        );
      })}
      <ProgressBar />
    </AbsoluteFill>
  );
};
