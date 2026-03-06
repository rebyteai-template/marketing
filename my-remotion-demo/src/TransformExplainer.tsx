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

// ============ SCENE 1: TITLE/INTRO ============
const TitleScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const boxIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 5,
  });

  const titleIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 25,
  });

  const subtitleIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 45,
  });

  const lineIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 55,
  });

  // Teaser animation: the box translates, rotates, and scales
  const teaserProgress = interpolate(frame, [15, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const teaserX = interpolate(teaserProgress, [0, 0.3, 0.6, 1], [0, 80, 80, 0]);
  const teaserY = interpolate(teaserProgress, [0, 0.3, 0.6, 1], [0, 0, -60, 0]);
  const teaserRotate = interpolate(teaserProgress, [0, 0.3, 0.6, 1], [0, 0, 45, 360]);
  const teaserScale = interpolate(teaserProgress, [0, 0.3, 0.6, 1], [1, 1.3, 0.8, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Animated teaser box */}
      <div
        style={{
          width: s(80),
          height: s(80),
          background: "#3b82f6",
          borderRadius: s(12),
          opacity: boxIn,
          transform: `translate(${s(teaserX)}px, ${s(teaserY)}px) rotate(${teaserRotate}deg) scale(${teaserScale})`,
          marginBottom: s(40),
          boxShadow: "0 8px 32px rgba(59,130,246,0.4)",
        }}
      />

      {/* Title */}
      <div
        style={{
          fontSize: s(56),
          fontWeight: 800,
          color: "#f1f5f9",
          fontFamily: "system-ui",
          opacity: titleIn,
          transform: `scale(${interpolate(titleIn, [0, 1], [0.7, 1])})`,
          letterSpacing: s(2),
        }}
      >
        CSS Transform
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: s(20),
          color: "#94a3b8",
          fontFamily: "system-ui",
          opacity: subtitleIn,
          transform: `translateY(${interpolate(subtitleIn, [0, 1], [20, 0])}px)`,
          marginTop: s(16),
        }}
      >
        Move, Rotate, Scale, Skew — in one property
      </div>

      {/* Accent line */}
      <div
        style={{
          width: s(120) * lineIn,
          height: s(3),
          background: "#3b82f6",
          borderRadius: s(2),
          marginTop: s(20),
        }}
      />
    </AbsoluteFill>
  );
};

// ============ CODE SNIPPET CARD ============
const CodeCard = ({
  code,
  opacity,
  translateY = 0,
}: {
  code: string;
  opacity: number;
  translateY?: number;
}) => {
  const { s } = useScale();

  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: s(10),
        padding: `${s(12)}px ${s(20)}px`,
        opacity,
        transform: `translateY(${translateY}px)`,
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      <code
        style={{
          fontSize: s(16),
          color: "#a5f3fc",
          fontFamily: "'SF Mono', 'Fira Code', monospace",
        }}
      >
        {code}
      </code>
    </div>
  );
};

// ============ INSIGHT BADGE ============
const InsightBadge = ({
  text,
  opacity,
  translateY = 0,
}: {
  text: string;
  opacity: number;
  translateY?: number;
}) => {
  const { s } = useScale();

  return (
    <div
      style={{
        background: "rgba(59,130,246,0.1)",
        border: `${s(1)}px solid rgba(59,130,246,0.3)`,
        borderRadius: s(8),
        padding: `${s(8)}px ${s(16)}px`,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <span
        style={{
          fontSize: s(14),
          color: "#60a5fa",
          fontFamily: "system-ui",
          fontWeight: 500,
        }}
      >
        {text}
      </span>
    </div>
  );
};

// ============ SCENE 2: TRANSLATE ============
const TranslateScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const headerIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 5,
  });

  const boxIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 15,
  });

  // Phase 1: translateX (frames 30-90)
  const phase1 = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 30,
  });

  // Phase 2: translateY (frames 90-150)
  const phase2 = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 90,
  });

  // Phase 3: translate(x, y) (frames 150-210)
  const phase3 = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 150,
  });

  const codeIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 180,
  });

  const insightIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 200,
  });

  // Compute box position based on active phase
  let moveX = 0;
  let moveY = 0;

  if (frame < 90) {
    // Phase 1: translateX only
    moveX = interpolate(phase1, [0, 1], [0, 150]);
    moveY = 0;
  } else if (frame < 150) {
    // Phase 2: translateY only (reset X)
    moveX = interpolate(phase2, [0, 1], [150, 0]);
    moveY = interpolate(phase2, [0, 1], [0, 120]);
  } else {
    // Phase 3: translate(X, Y)
    moveX = interpolate(phase3, [0, 1], [0, 150]);
    moveY = interpolate(phase3, [0, 1], [120, 120]);
  }

  // Determine which code to show
  let codeText = "transform: translate(200px, 150px);";
  if (frame < 90) {
    codeText = "transform: translateX(200px);";
  } else if (frame < 150) {
    codeText = "transform: translateY(150px);";
  }

  return (
    <AbsoluteFill
      style={{
        background: "#f8fafc",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        padding: s(40),
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: s(36),
          fontWeight: 700,
          color: "#1e293b",
          fontFamily: "system-ui",
          opacity: headerIn,
          transform: `translateY(${interpolate(headerIn, [0, 1], [20, 0])}px)`,
        }}
      >
        translate()
      </div>

      {/* Demo area */}
      <div
        style={{
          position: "relative",
          width: s(600),
          height: s(350),
          marginTop: s(30),
        }}
      >
        {/* Grid lines */}
        <svg
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          viewBox="0 0 600 350"
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 100}
              y1="0"
              x2={i * 100}
              y2="350"
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 100 + 50}
              x2="600"
              y2={i * 100 + 50}
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Dashed outline - original position */}
        <div
          style={{
            position: "absolute",
            left: s(150),
            top: s(75),
            width: s(100),
            height: s(100),
            border: `${s(2)}px dashed #cbd5e1`,
            borderRadius: s(12),
            opacity: boxIn * 0.6,
          }}
        />

        {/* Arrow showing movement */}
        {(phase1 > 0.1 || phase3 > 0.1) && (
          <svg
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            viewBox="0 0 600 350"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
              </marker>
            </defs>
            <line
              x1="250"
              y1="125"
              x2={250 + moveX * 0.8}
              y2={75 + moveY * 0.8}
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="6 3"
              markerEnd="url(#arrowhead)"
              opacity={0.7}
            />
          </svg>
        )}

        {/* Moving box */}
        <div
          style={{
            position: "absolute",
            left: s(150),
            top: s(75),
            width: s(100),
            height: s(100),
            background: "#3b82f6",
            borderRadius: s(12),
            opacity: boxIn,
            transform: `translate(${s(moveX)}px, ${s(moveY)}px)`,
            boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: s(14),
            fontWeight: 600,
            fontFamily: "system-ui",
          }}
        >
          Box
        </div>
      </div>

      {/* Code card */}
      <CodeCard
        code={codeText}
        opacity={codeIn}
        translateY={interpolate(codeIn, [0, 1], [20, 0])}
      />

      {/* Insight */}
      <div style={{ marginTop: s(12) }}>
        <InsightBadge
          text="Moves the element without affecting layout flow"
          opacity={insightIn}
          translateY={interpolate(insightIn, [0, 1], [10, 0])}
        />
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 3: ROTATE & SCALE ============
const RotateScaleScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const headerLeftIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 5,
  });

  const headerRightIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 10,
  });

  const boxLeftIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 20,
  });

  const boxRightIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 25,
  });

  const codeLeftIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 60,
  });

  const codeRightIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 65,
  });

  // Rotate animation: 0 -> 45 -> 180 -> 360
  const rotatePhase = interpolate(frame, [30, 80, 140, 220], [0, 45, 180, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scale animation: 1 -> 1.5 -> 0.5 -> 1 (with spring bounce)
  const scalePhase1 = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 80 },
    delay: 30,
  });
  const scalePhase2 = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 80 },
    delay: 100,
  });
  const scalePhase3 = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 80 },
    delay: 170,
  });

  let scaleVal = 1;
  if (frame < 100) {
    scaleVal = interpolate(scalePhase1, [0, 1], [1, 1.5]);
  } else if (frame < 170) {
    scaleVal = interpolate(scalePhase2, [0, 1], [1.5, 0.5]);
  } else {
    scaleVal = interpolate(scalePhase3, [0, 1], [0.5, 1]);
  }

  // Code text for rotate
  let rotateCode = "transform: rotate(45deg);";
  if (frame >= 80 && frame < 140) {
    rotateCode = "transform: rotate(180deg);";
  } else if (frame >= 140) {
    rotateCode = "transform: rotate(360deg);";
  }

  // Code text for scale
  let scaleCode = "transform: scale(1.5);";
  if (frame >= 100 && frame < 170) {
    scaleCode = "transform: scale(0.5);";
  } else if (frame >= 170) {
    scaleCode = "transform: scale(1);";
  }

  return (
    <AbsoluteFill
      style={{
        background: "#f8fafc",
        flexDirection: "row",
      }}
    >
      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: s(20),
          bottom: s(20),
          width: s(1),
          background: "#e2e8f0",
        }}
      />

      {/* Left half: Rotate */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: s(20),
        }}
      >
        <div
          style={{
            fontSize: s(28),
            fontWeight: 700,
            color: "#1e293b",
            fontFamily: "system-ui",
            opacity: headerLeftIn,
            transform: `translateY(${interpolate(headerLeftIn, [0, 1], [20, 0])}px)`,
          }}
        >
          rotate()
        </div>

        {/* Rotate demo */}
        <div
          style={{
            position: "relative",
            width: s(180),
            height: s(180),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Dashed outline of original */}
          <div
            style={{
              position: "absolute",
              width: s(100),
              height: s(100),
              border: `${s(2)}px dashed #cbd5e1`,
              borderRadius: s(12),
              opacity: boxLeftIn * 0.4,
            }}
          />

          {/* Rotating box */}
          <div
            style={{
              width: s(100),
              height: s(100),
              background: "#3b82f6",
              borderRadius: s(12),
              opacity: boxLeftIn,
              transform: `rotate(${rotatePhase}deg)`,
              boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Center origin dot */}
            <div
              style={{
                width: s(8),
                height: s(8),
                background: "white",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Rotation indicator */}
          <div
            style={{
              position: "absolute",
              top: s(-5),
              right: s(10),
              fontSize: s(14),
              color: "#64748b",
              fontFamily: "system-ui",
              fontWeight: 600,
              opacity: boxLeftIn,
            }}
          >
            {Math.round(rotatePhase)}°
          </div>
        </div>

        <CodeCard
          code={rotateCode}
          opacity={codeLeftIn}
          translateY={interpolate(codeLeftIn, [0, 1], [10, 0])}
        />
      </div>

      {/* Right half: Scale */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: s(20),
        }}
      >
        <div
          style={{
            fontSize: s(28),
            fontWeight: 700,
            color: "#1e293b",
            fontFamily: "system-ui",
            opacity: headerRightIn,
            transform: `translateY(${interpolate(headerRightIn, [0, 1], [20, 0])}px)`,
          }}
        >
          scale()
        </div>

        {/* Scale demo */}
        <div
          style={{
            position: "relative",
            width: s(180),
            height: s(180),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Dashed outline of original size */}
          <div
            style={{
              position: "absolute",
              width: s(100),
              height: s(100),
              border: `${s(2)}px dashed #cbd5e1`,
              borderRadius: s(12),
              opacity: boxRightIn * 0.4,
            }}
          />

          {/* Scaling box */}
          <div
            style={{
              width: s(100),
              height: s(100),
              background: "#8b5cf6",
              borderRadius: s(12),
              opacity: boxRightIn,
              transform: `scale(${scaleVal})`,
              boxShadow: "0 4px 20px rgba(139,92,246,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: s(14),
              fontWeight: 600,
              fontFamily: "system-ui",
            }}
          >
            {scaleVal.toFixed(1)}x
          </div>
        </div>

        <CodeCard
          code={scaleCode}
          opacity={codeRightIn}
          translateY={interpolate(codeRightIn, [0, 1], [10, 0])}
        />
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 4: SKEW & COMBINED ============
const SkewCombinedScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const isFirstHalf = frame < 150;

  // --- First half: Skew demos ---
  const skewHeaderIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 5,
  });

  const skewXIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 20,
  });

  const skewYIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 50,
  });

  const skewCodeIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 80,
  });

  const skewXVal = interpolate(skewXIn, [0, 1], [0, 20]);
  const skewYVal = interpolate(skewYIn, [0, 1], [0, 20]);

  // --- Second half: Combined transforms ---
  const combinedHeaderIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 155,
  });

  const step1In = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 170,
  });

  const step2In = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 200,
  });

  const step3In = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 230,
  });

  const combinedCodeIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 250,
  });

  const insightIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 270,
  });

  // Combined transform values
  const combTranslateX = interpolate(step1In, [0, 1], [0, 100]);
  const combTranslateY = interpolate(step1In, [0, 1], [0, 50]);
  const combRotate = interpolate(step2In, [0, 1], [0, 45]);
  const combScale = interpolate(step3In, [0, 1], [1, 1.2]);

  // Cross-fade between halves
  const firstHalfOpacity = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const secondHalfOpacity = interpolate(frame, [150, 165], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#f8fafc" }}>
      {/* First half: Skew */}
      {isFirstHalf && (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: s(24),
            opacity: firstHalfOpacity,
          }}
        >
          <div
            style={{
              fontSize: s(36),
              fontWeight: 700,
              color: "#1e293b",
              fontFamily: "system-ui",
              opacity: skewHeaderIn,
              transform: `translateY(${interpolate(skewHeaderIn, [0, 1], [20, 0])}px)`,
            }}
          >
            skew()
          </div>

          <div
            style={{
              display: "flex",
              gap: s(60),
              alignItems: "center",
            }}
          >
            {/* skewX demo */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: s(12),
              }}
            >
              <div
                style={{
                  fontSize: s(18),
                  color: "#64748b",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  opacity: skewXIn,
                }}
              >
                skewX(20deg)
              </div>
              <div
                style={{
                  position: "relative",
                  width: s(160),
                  height: s(140),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Original outline */}
                <div
                  style={{
                    position: "absolute",
                    width: s(120),
                    height: s(80),
                    border: `${s(2)}px dashed #cbd5e1`,
                    borderRadius: s(8),
                    opacity: skewXIn * 0.4,
                  }}
                />
                {/* Skewed box */}
                <div
                  style={{
                    width: s(120),
                    height: s(80),
                    background: "#f59e0b",
                    borderRadius: s(8),
                    opacity: skewXIn,
                    transform: `skewX(${skewXVal}deg)`,
                    boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
                  }}
                />
              </div>
            </div>

            {/* skewY demo */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: s(12),
              }}
            >
              <div
                style={{
                  fontSize: s(18),
                  color: "#64748b",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  opacity: skewYIn,
                }}
              >
                skewY(20deg)
              </div>
              <div
                style={{
                  position: "relative",
                  width: s(160),
                  height: s(140),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Original outline */}
                <div
                  style={{
                    position: "absolute",
                    width: s(120),
                    height: s(80),
                    border: `${s(2)}px dashed #cbd5e1`,
                    borderRadius: s(8),
                    opacity: skewYIn * 0.4,
                  }}
                />
                {/* Skewed box */}
                <div
                  style={{
                    width: s(120),
                    height: s(80),
                    background: "#10b981",
                    borderRadius: s(8),
                    opacity: skewYIn,
                    transform: `skewY(${skewYVal}deg)`,
                    boxShadow: "0 4px 20px rgba(16,185,129,0.3)",
                  }}
                />
              </div>
            </div>
          </div>

          <CodeCard
            code="transform: skewX(20deg);"
            opacity={skewCodeIn}
            translateY={interpolate(skewCodeIn, [0, 1], [10, 0])}
          />
        </AbsoluteFill>
      )}

      {/* Second half: Combined transforms */}
      {!isFirstHalf && (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: s(20),
            opacity: secondHalfOpacity,
          }}
        >
          <div
            style={{
              fontSize: s(32),
              fontWeight: 700,
              color: "#1e293b",
              fontFamily: "system-ui",
              opacity: combinedHeaderIn,
              transform: `translateY(${interpolate(combinedHeaderIn, [0, 1], [20, 0])}px)`,
            }}
          >
            Combining Transforms
          </div>

          {/* Steps indicator */}
          <div
            style={{
              display: "flex",
              gap: s(20),
              marginBottom: s(8),
            }}
          >
            {[
              { label: "translate", active: step1In > 0.5, color: "#3b82f6" },
              { label: "rotate", active: step2In > 0.5, color: "#8b5cf6" },
              { label: "scale", active: step3In > 0.5, color: "#f59e0b" },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  background: step.active ? step.color : "#e2e8f0",
                  color: step.active ? "white" : "#94a3b8",
                  padding: `${s(6)}px ${s(14)}px`,
                  borderRadius: s(6),
                  fontSize: s(14),
                  fontWeight: 600,
                  fontFamily: "system-ui",
                  transition: "all 0.3s",
                }}
              >
                {step.label}
              </div>
            ))}
          </div>

          {/* Demo area */}
          <div
            style={{
              position: "relative",
              width: s(500),
              height: s(250),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Original position outline */}
            <div
              style={{
                position: "absolute",
                left: s(150),
                top: s(75),
                width: s(100),
                height: s(100),
                border: `${s(2)}px dashed #cbd5e1`,
                borderRadius: s(12),
                opacity: 0.4,
              }}
            />

            {/* Combined transform box */}
            <div
              style={{
                position: "absolute",
                left: s(150),
                top: s(75),
                width: s(100),
                height: s(100),
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                borderRadius: s(12),
                transform: `translate(${s(combTranslateX)}px, ${s(combTranslateY)}px) rotate(${combRotate}deg) scale(${combScale})`,
                boxShadow: "0 4px 24px rgba(59,130,246,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: s(12),
                fontWeight: 600,
                fontFamily: "system-ui",
              }}
            >
              Box
            </div>
          </div>

          <CodeCard
            code="transform: translate(100px, 50px) rotate(45deg) scale(1.2);"
            opacity={combinedCodeIn}
            translateY={interpolate(combinedCodeIn, [0, 1], [10, 0])}
          />

          <InsightBadge
            text="Order matters! Transforms apply right-to-left"
            opacity={insightIn}
            translateY={interpolate(insightIn, [0, 1], [10, 0])}
          />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ============ SCENE 5: TRANSFORM ORIGIN & 3D ============
const OriginAnd3DScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const isFirstPart = frame < 165;

  // --- First part: Transform Origin ---
  const originHeaderIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 5,
  });

  // Phase 1: center origin
  const originPhase1 = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 20,
  });

  // Phase 2: top-left origin
  const originPhase2 = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 65,
  });

  // Phase 3: bottom-right origin
  const originPhase3 = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 110,
  });

  const originCodeIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 40,
  });

  // Determine current origin label for code card
  const originLabel = frame < 65 ? "center" : frame < 110 ? "top left" : "bottom right";

  // --- Second part: 3D transforms ---
  const threeDHeaderIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 170,
  });

  const cardIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 185,
  });

  const rotateXAnim = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 60 },
    delay: 200,
  });

  const rotateYAnim = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 60 },
    delay: 250,
  });

  const threeDCodeIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 280,
  });

  const rotateXVal = interpolate(rotateXAnim, [0, 1], [0, 45]);
  const rotateYVal = interpolate(rotateYAnim, [0, 1], [0, 45]);

  // Cross-fade
  const firstPartOpacity = interpolate(frame, [145, 165], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const secondPartOpacity = interpolate(frame, [165, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#f8fafc" }}>
      {/* First part: Transform Origin */}
      {isFirstPart && (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: s(24),
            opacity: firstPartOpacity,
          }}
        >
          <div
            style={{
              fontSize: s(36),
              fontWeight: 700,
              color: "#1e293b",
              fontFamily: "system-ui",
              opacity: originHeaderIn,
              transform: `translateY(${interpolate(originHeaderIn, [0, 1], [20, 0])}px)`,
            }}
          >
            transform-origin
          </div>

          {/* Three origin demos side by side */}
          <div
            style={{
              display: "flex",
              gap: s(50),
              alignItems: "center",
            }}
          >
            {[
              { label: "center", origin: "center", dotX: 50, dotY: 50, phase: originPhase1, active: frame < 65 },
              { label: "top left", origin: "top left", dotX: 0, dotY: 0, phase: originPhase2, active: frame >= 65 && frame < 110 },
              { label: "bottom right", origin: "bottom right", dotX: 100, dotY: 100, phase: originPhase3, active: frame >= 110 },
            ].map((item, i) => {
              const rot = item.active ? interpolate(item.phase, [0, 1], [0, 45]) : 0;

              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: s(10),
                  }}
                >
                  <div
                    style={{
                      fontSize: s(14),
                      color: item.active ? "#3b82f6" : "#94a3b8",
                      fontFamily: "system-ui",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: s(120),
                      height: s(120),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Original outline */}
                    <div
                      style={{
                        position: "absolute",
                        width: s(90),
                        height: s(90),
                        border: `${s(2)}px dashed #cbd5e1`,
                        borderRadius: s(10),
                        opacity: 0.4,
                      }}
                    />
                    {/* Rotating box */}
                    <div
                      style={{
                        width: s(90),
                        height: s(90),
                        background: item.active ? "#3b82f6" : "#94a3b8",
                        borderRadius: s(10),
                        transform: `rotate(${rot}deg)`,
                        transformOrigin: item.origin,
                        boxShadow: item.active
                          ? "0 4px 20px rgba(59,130,246,0.3)"
                          : "none",
                        opacity: item.active ? 1 : 0.4,
                        position: "relative",
                      }}
                    >
                      {/* Origin dot */}
                      <div
                        style={{
                          position: "absolute",
                          left: `${item.dotX}%`,
                          top: `${item.dotY}%`,
                          width: s(10),
                          height: s(10),
                          background: "#ef4444",
                          borderRadius: "50%",
                          transform: "translate(-50%, -50%)",
                          border: `${s(2)}px solid white`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <CodeCard
            code={`transform-origin: ${originLabel};`}
            opacity={originCodeIn}
            translateY={interpolate(originCodeIn, [0, 1], [10, 0])}
          />
        </AbsoluteFill>
      )}

      {/* Second part: 3D Transforms */}
      {!isFirstPart && (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: s(24),
            opacity: secondPartOpacity,
          }}
        >
          <div
            style={{
              fontSize: s(36),
              fontWeight: 700,
              color: "#1e293b",
              fontFamily: "system-ui",
              opacity: threeDHeaderIn,
              transform: `translateY(${interpolate(threeDHeaderIn, [0, 1], [20, 0])}px)`,
            }}
          >
            3D Transforms
          </div>

          {/* 3D card demos */}
          <div
            style={{
              display: "flex",
              gap: s(60),
              alignItems: "center",
              perspective: s(800),
            }}
          >
            {/* rotateX card */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: s(12),
              }}
            >
              <div
                style={{
                  fontSize: s(16),
                  color: "#64748b",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  opacity: cardIn,
                }}
              >
                rotateX({Math.round(rotateXVal)}deg)
              </div>
              <div
                style={{
                  width: s(160),
                  height: s(200),
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  borderRadius: s(12),
                  opacity: cardIn,
                  transform: `rotateX(${rotateXVal}deg)`,
                  boxShadow: "0 8px 32px rgba(59,130,246,0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: s(8),
                  padding: s(16),
                }}
              >
                <div
                  style={{
                    width: s(40),
                    height: s(40),
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    width: s(80),
                    height: s(8),
                    background: "rgba(255,255,255,0.3)",
                    borderRadius: s(4),
                  }}
                />
                <div
                  style={{
                    width: s(100),
                    height: s(6),
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: s(3),
                  }}
                />
              </div>
            </div>

            {/* rotateY card */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: s(12),
              }}
            >
              <div
                style={{
                  fontSize: s(16),
                  color: "#64748b",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  opacity: cardIn,
                }}
              >
                rotateY({Math.round(rotateYVal)}deg)
              </div>
              <div
                style={{
                  width: s(160),
                  height: s(200),
                  background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                  borderRadius: s(12),
                  opacity: cardIn,
                  transform: `rotateY(${rotateYVal}deg)`,
                  boxShadow: "0 8px 32px rgba(139,92,246,0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: s(8),
                  padding: s(16),
                }}
              >
                <div
                  style={{
                    width: s(40),
                    height: s(40),
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    width: s(80),
                    height: s(8),
                    background: "rgba(255,255,255,0.3)",
                    borderRadius: s(4),
                  }}
                />
                <div
                  style={{
                    width: s(100),
                    height: s(6),
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: s(3),
                  }}
                />
              </div>
            </div>
          </div>

          <CodeCard
            code="transform: perspective(800px) rotateY(45deg);"
            opacity={threeDCodeIn}
            translateY={interpolate(threeDCodeIn, [0, 1], [10, 0])}
          />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ============ SCENE 6: OUTRO/SUMMARY ============
const OutroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { s } = useScale();

  const gridIn = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
    delay: 5,
  });

  const summaryItems = [
    { label: "translate()", desc: "Move elements", color: "#3b82f6", delay: 30 },
    { label: "rotate()", desc: "Spin elements", color: "#8b5cf6", delay: 45 },
    { label: "scale()", desc: "Resize elements", color: "#f59e0b", delay: 60 },
    { label: "skew()", desc: "Tilt elements", color: "#10b981", delay: 75 },
  ];

  const taglineIn = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 60 },
    delay: 100,
  });

  // Looping animations for the grid boxes
  const loopTranslate = Math.sin(frame * 0.08) * 20;
  const loopRotate = frame * 2;
  const loopScale = interpolate(Math.sin(frame * 0.06), [-1, 1], [0.7, 1.3]);
  const loopSkew = Math.sin(frame * 0.07) * 15;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: s(30),
      }}
    >
      {/* 4-element animated grid */}
      <div
        style={{
          display: "flex",
          gap: s(24),
          opacity: gridIn,
          transform: `scale(${interpolate(gridIn, [0, 1], [0.8, 1])})`,
        }}
      >
        {/* Translating box */}
        <div
          style={{
            width: s(60),
            height: s(60),
            background: "#3b82f6",
            borderRadius: s(10),
            transform: `translateY(${loopTranslate}px)`,
            boxShadow: "0 4px 16px rgba(59,130,246,0.4)",
          }}
        />
        {/* Rotating box */}
        <div
          style={{
            width: s(60),
            height: s(60),
            background: "#8b5cf6",
            borderRadius: s(10),
            transform: `rotate(${loopRotate}deg)`,
            boxShadow: "0 4px 16px rgba(139,92,246,0.4)",
          }}
        />
        {/* Scaling box */}
        <div
          style={{
            width: s(60),
            height: s(60),
            background: "#f59e0b",
            borderRadius: s(10),
            transform: `scale(${loopScale})`,
            boxShadow: "0 4px 16px rgba(245,158,11,0.4)",
          }}
        />
        {/* Skewing box */}
        <div
          style={{
            width: s(60),
            height: s(60),
            background: "#10b981",
            borderRadius: s(10),
            transform: `skewX(${loopSkew}deg)`,
            boxShadow: "0 4px 16px rgba(16,185,129,0.4)",
          }}
        />
      </div>

      {/* Summary bullets */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: s(14),
        }}
      >
        {summaryItems.map((item, i) => {
          const itemIn = spring({
            frame,
            fps,
            config: { damping: 12, stiffness: 100 },
            delay: item.delay,
          });

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: s(14),
                opacity: itemIn,
                transform: `translateX(${interpolate(itemIn, [0, 1], [-30, 0])}px)`,
              }}
            >
              <div
                style={{
                  width: s(12),
                  height: s(12),
                  background: item.color,
                  borderRadius: s(3),
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: s(20),
                  color: "#f1f5f9",
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontSize: s(18),
                  color: "#94a3b8",
                  fontFamily: "system-ui",
                }}
              >
                — {item.desc}
              </span>
            </div>
          );
        })}
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: taglineIn,
          transform: `scale(${interpolate(taglineIn, [0, 1], [0.8, 1])})`,
          marginTop: s(10),
        }}
      >
        <div
          style={{
            fontSize: s(28),
            fontWeight: 700,
            color: "#FBBF24",
            fontFamily: "system-ui",
            textAlign: "center",
          }}
        >
          One property. Endless possibilities.
        </div>
      </div>

      {/* Subtle badge */}
      <div
        style={{
          opacity: taglineIn * 0.6,
          background: "rgba(255,255,255,0.05)",
          borderRadius: s(20),
          padding: `${s(8)}px ${s(20)}px`,
        }}
      >
        <span
          style={{
            fontSize: s(13),
            color: "#64748b",
            fontFamily: "system-ui",
            letterSpacing: s(3),
          }}
        >
          CSS TRANSFORMS
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
  { component: TitleScene, duration: 120 },
  { component: TranslateScene, duration: 240 },
  { component: RotateScaleScene, duration: 270 },
  { component: SkewCombinedScene, duration: 300 },
  { component: OriginAnd3DScene, duration: 330 },
  { component: OutroScene, duration: 240 },
];

export const TRANSFORM_TOTAL_FRAMES = SCENES.reduce(
  (sum, s) => sum + s.duration,
  0,
);

export const TransformExplainer = () => {
  let currentStart = 0;

  return (
    <AbsoluteFill style={{ background: "#f8fafc" }}>
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
