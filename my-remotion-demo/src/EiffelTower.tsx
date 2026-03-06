import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  staticFile,
} from "remotion";
import { Audio } from "@remotion/media";

// ============ RESPONSIVE SCALING SYSTEM ============
const BASE_WIDTH = 1280;

const useScale = () => {
  const { width, height } = useVideoConfig();
  const scale = width / BASE_WIDTH;
  const s = (px: number) => px * scale;
  return { s, scale, width, height };
};

// ============ EIFFEL TOWER SVG ============
const EiffelTowerSVG = ({
  height = 400,
  color = "#374151",
  platformColor = "#4B5563",
  style = {},
}: {
  height?: number;
  color?: string;
  platformColor?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 200 500"
    style={{ height, aspectRatio: "200/500", ...style }}
  >
    {/* Antenna */}
    <line x1="100" y1="0" x2="100" y2="55" stroke={color} strokeWidth="4" />
    <circle cx="100" cy="0" r="4" fill={color} />
    {/* Top section */}
    <path d="M 92,55 L 108,55 L 115,130 L 85,130 Z" fill={color} />
    {/* First platform */}
    <rect x="78" y="128" width="44" height="10" rx="2" fill={platformColor} />
    {/* Middle section */}
    <path d="M 83,138 L 117,138 L 138,258 L 62,258 Z" fill={color} />
    {/* Cross beams */}
    <line x1="73" y1="180" x2="127" y2="180" stroke={platformColor} strokeWidth="2" />
    <line x1="68" y1="220" x2="132" y2="220" stroke={platformColor} strokeWidth="2" />
    {/* Second platform */}
    <rect x="52" y="256" width="96" height="12" rx="2" fill={platformColor} />
    {/* Left leg */}
    <path d="M 60,268 L 90,268 L 85,380 L 15,480 L 0,480 L 55,368 Z" fill={color} />
    {/* Right leg */}
    <path d="M 110,268 L 140,268 L 145,368 L 200,480 L 185,480 L 115,380 Z" fill={color} />
    {/* Arch */}
    <path d="M 55,370 Q 100,330 145,370" fill="none" stroke={color} strokeWidth="5" />
    {/* Lower cross beams */}
    <line x1="45" y1="340" x2="155" y2="340" stroke={platformColor} strokeWidth="2" />
    <line x1="30" y1="400" x2="170" y2="400" stroke={platformColor} strokeWidth="2" />
    <line x1="18" y1="440" x2="182" y2="440" stroke={platformColor} strokeWidth="2" />
    {/* Base */}
    <rect x="0" y="478" width="200" height="10" rx="2" fill={platformColor} />
  </svg>
);

// ============ SUN COMPONENT ============
const Sun = ({
  size = 120,
  style = {},
}: {
  size?: number;
  style?: React.CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.95, 1.05]);

  return (
    <div style={{ position: "relative", width: size, height: size, ...style }}>
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: -size * 0.3,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)",
          transform: `scale(${pulse})`,
        }}
      />
      {/* Rays */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size * 0.08,
            height: size * 0.35,
            background: "#FBBF24",
            borderRadius: size * 0.04,
            transformOrigin: `50% ${size * 0.7}px`,
            transform: `translate(-50%, -${size * 0.7}px) rotate(${i * 30}deg)`,
            opacity: 0.6,
          }}
        />
      ))}
      {/* Core */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, #FDE68A, #F59E0B)",
          boxShadow: "0 0 40px rgba(245,158,11,0.5)",
        }}
      />
    </div>
  );
};

// ============ SCENE 1: TITLE ============
const TitleScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const questionPop = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 100 },
    delay: 10,
  });
  const towerRise = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
    delay: 20,
  });
  const titleFade = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 60 },
    delay: 35,
  });
  const subtitleFade = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 60 },
    delay: 50,
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Question mark */}
      <div
        style={{
          position: "absolute",
          top: s(40),
          right: s(80),
          fontSize: s(120),
          fontWeight: 900,
          color: "#FBBF24",
          opacity: questionPop,
          transform: `scale(${interpolate(questionPop, [0, 1], [3, 1])})`,
          fontFamily: "system-ui",
        }}
      >
        ?
      </div>

      {/* Tower */}
      <div
        style={{
          transform: `translateY(${interpolate(towerRise, [0, 1], [200, 0])}px)`,
          opacity: towerRise,
          marginBottom: s(60),
        }}
      >
        <EiffelTowerSVG
          height={s(280)}
          color="#94a3b8"
          platformColor="#64748b"
        />
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          bottom: s(100),
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: s(48),
            fontWeight: 800,
            color: "#f1f5f9",
            fontFamily: "system-ui",
            opacity: titleFade,
            transform: `translateY(${interpolate(titleFade, [0, 1], [30, 0])}px)`,
            letterSpacing: s(2),
          }}
        >
          为什么埃菲尔铁塔是斜的？
        </div>
        <div
          style={{
            fontSize: s(20),
            color: "#94a3b8",
            fontFamily: "system-ui",
            opacity: subtitleFade,
            transform: `translateY(${interpolate(subtitleFade, [0, 1], [20, 0])}px)`,
            marginTop: s(12),
          }}
        >
          一个关于太阳和钢铁的故事
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 2: TOWER FACTS ============
const TowerFactsScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const facts = [
    { label: "324 米", desc: "含天线总高", color: "#3b82f6" },
    { label: "7,300 吨", desc: "钢铁总重", color: "#8b5cf6" },
    { label: "250 万个", desc: "铆钉连接", color: "#f59e0b" },
    { label: "1889 年", desc: "建成于巴黎", color: "#10b981" },
  ];

  const towerIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
    delay: 5,
  });

  return (
    <AbsoluteFill
      style={{
        background: "#f8fafc",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: s(80),
      }}
    >
      {/* Tower */}
      <div
        style={{
          opacity: towerIn,
          transform: `scale(${interpolate(towerIn, [0, 1], [0.8, 1])})`,
        }}
      >
        <EiffelTowerSVG height={s(380)} />
      </div>

      {/* Facts */}
      <div style={{ display: "flex", flexDirection: "column", gap: s(18) }}>
        {facts.map((fact, i) => {
          const factIn = spring({
            frame,
            fps,
            config: { damping: 12, stiffness: 100 },
            delay: 15 + i * 8,
          });

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: s(16),
                background: "white",
                borderRadius: s(16),
                padding: `${s(16)}px ${s(24)}px`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                opacity: factIn,
                transform: `translateX(${interpolate(factIn, [0, 1], [40, 0])}px)`,
                minWidth: s(280),
                borderLeft: `${s(4)}px solid ${fact.color}`,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: s(28),
                    fontWeight: 700,
                    color: "#1f2937",
                    fontFamily: "system-ui",
                  }}
                >
                  {fact.label}
                </div>
                <div
                  style={{
                    fontSize: s(16),
                    color: "#6b7280",
                    fontFamily: "system-ui",
                  }}
                >
                  {fact.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 3: SUN EFFECT ============
const SunEffectScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const sceneIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
    delay: 5,
  });
  const sunIn = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 60 },
    delay: 20,
  });
  const raysIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 40,
  });
  const heatIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 60,
  });
  const textIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 80,
  });

  const heatOpacity = interpolate(heatIn, [0, 1], [0, 0.4]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #dbeafe 0%, #f0f9ff 60%, #f8fafc 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: s(30),
          fontSize: s(32),
          fontWeight: 700,
          color: "#1e293b",
          fontFamily: "system-ui",
          opacity: sceneIn,
        }}
      >
        太阳照射效应
      </div>

      {/* Sun */}
      <div
        style={{
          position: "absolute",
          top: s(60),
          right: s(140),
          opacity: sunIn,
          transform: `scale(${interpolate(sunIn, [0, 1], [0.3, 1])})`,
        }}
      >
        <Sun size={s(130)} />
      </div>

      {/* Heat rays from sun to tower */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: raysIn,
        }}
        viewBox="0 0 1280 720"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="980"
            y1={200 + i * 30}
            x2="540"
            y2={200 + i * 60}
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="8 4"
            opacity={0.5}
          />
        ))}
      </svg>

      {/* Tower with heat overlay */}
      <div
        style={{
          position: "relative",
          opacity: sceneIn,
          marginLeft: s(-200),
        }}
      >
        <EiffelTowerSVG height={s(340)} />
        {/* Heat glow on right side */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(239,68,68,0.25))",
            opacity: heatOpacity,
            borderRadius: s(4),
          }}
        />
      </div>

      {/* Temperature cards */}
      <div
        style={{
          position: "absolute",
          bottom: s(50),
          display: "flex",
          gap: s(30),
          opacity: textIn,
          transform: `translateY(${interpolate(textIn, [0, 1], [20, 0])}px)`,
        }}
      >
        {[
          { label: "背阴面", temp: "20°C", color: "#3b82f6", border: false },
          { label: "向阳面", temp: "40°C", color: "#ef4444", border: true },
          { label: "温差", temp: "~20°C", color: "#f59e0b", border: false },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: s(12),
              padding: `${s(14)}px ${s(24)}px`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              textAlign: "center",
              border: item.border
                ? `2px solid ${item.color}`
                : "2px solid transparent",
            }}
          >
            <div
              style={{
                fontSize: s(14),
                color: "#6b7280",
                fontFamily: "system-ui",
                marginBottom: s(4),
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: s(26),
                fontWeight: 700,
                color: item.color,
                fontFamily: "system-ui",
              }}
            >
              {item.temp}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 4: THERMAL EXPANSION ============
const ThermalExpansionScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const titleIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 5,
  });
  const barIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
    delay: 20,
  });
  const expandAnim = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 40 },
    delay: 45,
  });
  const arrowIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 70,
  });
  const formulaIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 90,
  });

  const barExpand = interpolate(expandAnim, [0, 1], [1, 1.25]);
  const barR = interpolate(expandAnim, [0, 1], [55, 239]);
  const barG = interpolate(expandAnim, [0, 1], [65, 68]);
  const barB = interpolate(expandAnim, [0, 1], [81, 68]);

  return (
    <AbsoluteFill
      style={{
        background: "#f8fafc",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: s(28),
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: s(36),
          fontWeight: 700,
          color: "#1f2937",
          fontFamily: "system-ui",
          opacity: titleIn,
          transform: `translateY(${interpolate(titleIn, [0, 1], [20, 0])}px)`,
        }}
      >
        热胀冷缩原理
      </div>

      {/* Bar comparison */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: s(20),
          opacity: barIn,
        }}
      >
        {/* Normal bar */}
        <div style={{ display: "flex", alignItems: "center", gap: s(16) }}>
          <div
            style={{
              fontSize: s(15),
              color: "#6b7280",
              fontFamily: "system-ui",
              width: s(60),
              textAlign: "right",
            }}
          >
            常温
          </div>
          <div
            style={{
              width: s(300),
              height: s(44),
              background: "#374151",
              borderRadius: s(6),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: s(15),
              fontFamily: "system-ui",
              fontWeight: 500,
            }}
          >
            铁
          </div>
        </div>

        {/* Heated bar */}
        <div style={{ display: "flex", alignItems: "center", gap: s(16) }}>
          <div
            style={{
              fontSize: s(15),
              color: "#ef4444",
              fontFamily: "system-ui",
              width: s(60),
              textAlign: "right",
              fontWeight: 600,
            }}
          >
            受热
          </div>
          <div
            style={{
              width: s(300) * barExpand,
              height: s(44),
              background: `rgb(${barR}, ${barG}, ${barB})`,
              borderRadius: s(6),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: s(15),
              fontFamily: "system-ui",
              fontWeight: 500,
            }}
          >
            铁（膨胀）
          </div>
        </div>

        {/* Expansion arrows */}
        <div
          style={{
            opacity: arrowIn,
            display: "flex",
            alignItems: "center",
            gap: s(8),
            color: "#ef4444",
            fontSize: s(16),
            fontFamily: "system-ui",
            fontWeight: 500,
          }}
        >
          <span style={{ fontSize: s(20) }}>{"\u2190"}</span>
          <span>膨胀方向</span>
          <span style={{ fontSize: s(20) }}>{"\u2192"}</span>
        </div>
      </div>

      {/* Causal flow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: s(12),
          opacity: formulaIn,
          transform: `translateY(${interpolate(formulaIn, [0, 1], [20, 0])}px)`,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { text: "阳光直射", bg: "#FEF3C7", color: "#92400e" },
          { text: "单侧加热", bg: "#FEE2E2", color: "#991b1b" },
          { text: "金属膨胀", bg: "#DBEAFE", color: "#1e40af" },
          { text: "铁塔倾斜", bg: "#D1FAE5", color: "#065f46" },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: s(12) }}>
            <span
              style={{
                background: step.bg,
                color: step.color,
                padding: `${s(8)}px ${s(16)}px`,
                borderRadius: s(10),
                fontSize: s(18),
                fontWeight: 600,
                fontFamily: "system-ui",
              }}
            >
              {step.text}
            </span>
            {i < 3 && (
              <span
                style={{
                  color: "#9ca3af",
                  fontSize: s(20),
                  fontFamily: "system-ui",
                }}
              >
                {"\u2192"}
              </span>
            )}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 5: THE LEAN ============
const LeanResultScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const towerIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
    delay: 5,
  });
  const leanAnim = spring({
    frame,
    fps,
    config: { damping: 30, stiffness: 20 },
    delay: 30,
  });
  const measureIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 60,
  });
  const circleIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 80,
  });

  const towerLean = interpolate(leanAnim, [0, 1], [0, 1.5]);

  return (
    <AbsoluteFill
      style={{
        background: "#f8fafc",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Left side: Tower leaning */}
      <div
        style={{
          position: "absolute",
          left: s(120),
          top: s(40),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Vertical reference line (dashed) */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            width: s(4),
            height: s(420),
            opacity: measureIn * 0.4,
          }}
          viewBox="0 0 4 420"
        >
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="420"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
        </svg>

        {/* Tower with lean */}
        <div
          style={{
            opacity: towerIn,
            transform: `rotate(${towerLean}deg)`,
            transformOrigin: "bottom center",
          }}
        >
          <EiffelTowerSVG height={s(370)} />
        </div>

        {/* Measurement badge */}
        <div
          style={{
            position: "absolute",
            top: s(20),
            left: s(140),
            opacity: measureIn,
            transform: `translateX(${interpolate(measureIn, [0, 1], [20, 0])}px)`,
          }}
        >
          <div
            style={{
              background: "#ef4444",
              color: "white",
              padding: `${s(8)}px ${s(16)}px`,
              borderRadius: s(8),
              fontSize: s(18),
              fontWeight: 700,
              fontFamily: "system-ui",
              whiteSpace: "nowrap",
            }}
          >
            最多偏移 18 cm
          </div>
        </div>
      </div>

      {/* Right side: Info */}
      <div
        style={{
          position: "absolute",
          right: s(80),
          display: "flex",
          flexDirection: "column",
          gap: s(20),
          maxWidth: s(380),
        }}
      >
        {/* Circular path diagram */}
        <div
          style={{
            background: "white",
            borderRadius: s(16),
            padding: s(24),
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            opacity: circleIn,
            transform: `translateY(${interpolate(circleIn, [0, 1], [20, 0])}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: s(12),
          }}
        >
          <div
            style={{
              fontSize: s(16),
              fontWeight: 600,
              color: "#1f2937",
              fontFamily: "system-ui",
            }}
          >
            塔顶每日运动轨迹
          </div>
          <svg width={s(130)} height={s(130)} viewBox="0 0 130 130">
            {/* Circular path */}
            <circle
              cx="65"
              cy="65"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            {/* Moving dot */}
            <circle
              cx={65 + 40 * Math.cos(frame * 0.05 - Math.PI / 2)}
              cy={65 + 40 * Math.sin(frame * 0.05 - Math.PI / 2)}
              r="6"
              fill="#3b82f6"
            />
            {/* Center dot */}
            <circle cx="65" cy="65" r="3" fill="#9ca3af" />
            <text
              x="65"
              y="120"
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              fontFamily="system-ui"
            >
              直径 ~15 cm
            </text>
          </svg>
        </div>

        {/* Facts */}
        {[
          { text: "铁塔向背离太阳的方向倾斜", delay: 95 },
          { text: "夏天倾斜幅度最大", delay: 110 },
          { text: "夜间铁塔会恢复垂直", delay: 125 },
        ].map((fact, i) => {
          const fIn = spring({
            frame,
            fps,
            config: { damping: 12, stiffness: 80 },
            delay: fact.delay,
          });
          return (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: s(12),
                padding: `${s(12)}px ${s(20)}px`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                opacity: fIn,
                transform: `translateX(${interpolate(fIn, [0, 1], [20, 0])}px)`,
                display: "flex",
                alignItems: "center",
                gap: s(10),
                fontSize: s(16),
                color: "#1f2937",
                fontFamily: "system-ui",
              }}
            >
              <span style={{ color: "#10b981", fontWeight: 700, fontSize: s(18) }}>
                {"\u2713"}
              </span>
              {fact.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 6: OUTRO ============
const OutroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const towerIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
    delay: 5,
  });
  const text1In = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 20,
  });
  const text2In = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    delay: 40,
  });
  const scienceIn = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 60 },
    delay: 55,
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: s(24),
      }}
    >
      {/* Tower + Sun */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: s(30),
          opacity: towerIn,
          transform: `scale(${interpolate(towerIn, [0, 1], [0.8, 1])})`,
        }}
      >
        <EiffelTowerSVG
          height={s(180)}
          color="#94a3b8"
          platformColor="#64748b"
        />
        <Sun size={s(70)} />
      </div>

      {/* Text */}
      <div
        style={{
          textAlign: "center",
          opacity: text1In,
          transform: `translateY(${interpolate(text1In, [0, 1], [20, 0])}px)`,
        }}
      >
        <div
          style={{
            fontSize: s(34),
            fontWeight: 700,
            color: "#f1f5f9",
            fontFamily: "system-ui",
          }}
        >
          下次看到埃菲尔铁塔
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          opacity: text2In,
          transform: `translateY(${interpolate(text2In, [0, 1], [20, 0])}px)`,
        }}
      >
        <div
          style={{
            fontSize: s(22),
            color: "#FBBF24",
            fontFamily: "system-ui",
            fontWeight: 500,
          }}
        >
          记住：它正在追着太阳微微倾斜
        </div>
      </div>

      {/* Science badge */}
      <div
        style={{
          opacity: scienceIn,
          transform: `scale(${interpolate(scienceIn, [0, 1], [0.5, 1])})`,
          background: "rgba(255,255,255,0.1)",
          borderRadius: s(20),
          padding: `${s(10)}px ${s(24)}px`,
          marginTop: s(10),
        }}
      >
        <span
          style={{
            fontSize: s(16),
            color: "#94a3b8",
            fontFamily: "system-ui",
            letterSpacing: s(3),
          }}
        >
          THERMAL EXPANSION
        </span>
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
          background: "#3b82f6",
        }}
      />
    </div>
  );
};

// ============ MAIN COMPOSITION ============
const SCENES = [
  { component: TitleScene, duration: 190, audio: "eiffel/01-title/audio.mp3" },
  { component: TowerFactsScene, duration: 285, audio: "eiffel/02-facts/audio.mp3" },
  { component: SunEffectScene, duration: 273, audio: "eiffel/03-sun/audio.mp3" },
  { component: ThermalExpansionScene, duration: 275, audio: "eiffel/04-expansion/audio.mp3" },
  { component: LeanResultScene, duration: 345, audio: "eiffel/05-lean/audio.mp3" },
  { component: OutroScene, duration: 174, audio: "eiffel/06-outro/audio.mp3" },
];

export const EIFFEL_TOTAL_FRAMES = SCENES.reduce(
  (sum, s) => sum + s.duration,
  0
);

export const EiffelTowerExplainer = () => {
  let currentStart = 0;

  return (
    <AbsoluteFill style={{ background: "#f8fafc" }}>
      {SCENES.map(({ component: Scene, duration, audio }, i) => {
        const from = currentStart;
        currentStart += duration;
        return (
          <Sequence key={i} from={from} durationInFrames={duration}>
            <Scene />
            <Audio src={staticFile(audio)} volume={1} />
          </Sequence>
        );
      })}
      <ProgressBar />
    </AbsoluteFill>
  );
};
