type IndustryVisualProps = {
  industry: string;
  className?: string;
};

/**
 * Custom-drawn abstract line art per industry — geometric, monochrome with a
 * single gold accent, matching the brand's "no stock imagery" guideline.
 * Each visual is built from the industry's own visual vocabulary rather than
 * a literal photo: candlestick/yield lines for FinTech, a vital-sign pulse
 * for Healthcare, a routing/network grid for Logistics.
 */
export default function IndustryVisual({ industry, className = "" }: IndustryVisualProps) {
  const common = "h-full w-full";

  switch (industry) {
    case "FinTech":
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          <defs>
            <linearGradient id="fintechFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B8934A" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#B8934A" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* baseline grid */}
          {[60, 100, 140, 180].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
          ))}
          {/* yield curve */}
          <path
            d="M0 170 C 50 150, 80 190, 120 150 C 160 110, 190 140, 230 100 C 270 60, 310 90, 400 40"
            fill="none"
            stroke="#B8934A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 170 C 50 150, 80 190, 120 150 C 160 110, 190 140, 230 100 C 270 60, 310 90, 400 40 L 400 240 L 0 240 Z"
            fill="url(#fintechFade)"
          />
          {/* candlesticks */}
          {[
            { x: 40, top: 120, bottom: 165, wickTop: 105, wickBottom: 178 },
            { x: 90, top: 140, bottom: 158, wickTop: 130, wickBottom: 172 },
            { x: 150, top: 95, bottom: 132, wickTop: 85, wickBottom: 142 },
            { x: 210, top: 70, bottom: 105, wickTop: 58, wickBottom: 118 },
            { x: 270, top: 55, bottom: 85, wickTop: 42, wickBottom: 96 },
            { x: 330, top: 30, bottom: 60, wickTop: 20, wickBottom: 72 },
          ].map((c, i) => (
            <g key={i}>
              <line x1={c.x} y1={c.wickTop} x2={c.x} y2={c.wickBottom} stroke="#8A8A8E" strokeWidth="1" />
              <rect
                x={c.x - 5}
                y={c.top}
                width="10"
                height={Math.max(c.bottom - c.top, 4)}
                fill={i % 2 === 0 ? "#F5F5F2" : "#5C5C61"}
                opacity="0.85"
              />
            </g>
          ))}
          <circle cx="330" cy="45" r="4" fill="#B8934A" />
        </svg>
      );

    case "Healthcare":
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          <defs>
            <linearGradient id="healthFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B8934A" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#B8934A" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* concentric rings, evoking a scan/vitals monitor */}
          {[90, 65, 40].map((r) => (
            <circle
              key={r}
              cx="140"
              cy="120"
              r={r}
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
          ))}
          {/* pulse line */}
          <path
            d="M0 130 H 60 L 80 130 L 95 70 L 115 190 L 135 40 L 150 130 H 400"
            fill="none"
            stroke="#B8934A"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* cross mark */}
          <g transform="translate(300,70)">
            <rect x="-3" y="-16" width="6" height="32" fill="#F5F5F2" opacity="0.85" />
            <rect x="-16" y="-3" width="32" height="6" fill="#F5F5F2" opacity="0.85" />
          </g>
          <circle cx="115" cy="190" r="4" fill="#B8934A" />
          <path d="M0 130 H 60 L 80 130 L 95 70 L 115 190 L 135 40 L 150 130 H 400 V 240 H 0 Z" fill="url(#healthFade)" opacity="0.5" />
        </svg>
      );

    case "Logistics":
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          {/* route grid */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="240" stroke="#FFFFFF" strokeOpacity="0.045" strokeWidth="1" />
          ))}
          {[0, 1, 2].map((i) => (
            <line key={`h${i}`} x1="0" y1={i * 80 + 40} x2="400" y2={i * 80 + 40} stroke="#FFFFFF" strokeOpacity="0.045" strokeWidth="1" />
          ))}
          {/* route path connecting nodes */}
          <path
            d="M20 200 L 100 200 L 100 120 L 220 120 L 220 60 L 340 60 L 340 20"
            fill="none"
            stroke="#B8934A"
            strokeWidth="2"
            strokeDasharray="1 10"
            strokeLinecap="round"
          />
          <path
            d="M20 200 L 100 200 L 100 120 L 220 120 L 220 60 L 340 60 L 340 20"
            fill="none"
            stroke="#B8934A"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          {/* nodes */}
          {[
            { x: 20, y: 200, r: 5, fill: "#F5F5F2" },
            { x: 100, y: 120, r: 4, fill: "#8A8A8E" },
            { x: 220, y: 120, r: 4, fill: "#8A8A8E" },
            { x: 220, y: 60, r: 4, fill: "#8A8A8E" },
            { x: 340, y: 20, r: 6, fill: "#B8934A" },
          ].map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n.fill} />
          ))}
          {/* container/box mark */}
          <g transform="translate(58,150)" opacity="0.85">
            <rect x="-14" y="-10" width="28" height="20" fill="none" stroke="#F5F5F2" strokeWidth="1.5" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke="#F5F5F2" strokeWidth="1.5" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="240" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
          ))}
          <circle cx="200" cy="120" r="36" fill="none" stroke="#B8934A" strokeWidth="1.5" />
          <circle cx="200" cy="120" r="4" fill="#B8934A" />
        </svg>
      );
  }
}
