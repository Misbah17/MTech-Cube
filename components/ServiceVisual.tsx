type ServiceVisualProps = {
  slug: string;
  className?: string;
};

/**
 * Custom-drawn abstract visuals per service — same "no stock imagery"
 * approach as IndustryVisual, built from each service's own visual
 * vocabulary (browser chrome for web dev, server stack for cloud, node
 * graph for AI, layered canvas for design, route map for consulting).
 */
export default function ServiceVisual({ slug, className = "" }: ServiceVisualProps) {
  const common = "h-full w-full";

  switch (slug) {
    case "web-app-development":
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="240" stroke="#FFFFFF" strokeOpacity="0.04" strokeWidth="1" />
          ))}
          {/* browser chrome */}
          <rect x="60" y="40" width="280" height="170" rx="8" fill="none" stroke="#8A8A8E" strokeWidth="1.25" />
          <line x1="60" y1="72" x2="340" y2="72" stroke="#8A8A8E" strokeWidth="1.25" />
          <circle cx="80" cy="56" r="4" fill="#5C5C61" />
          <circle cx="96" cy="56" r="4" fill="#5C5C61" />
          <circle cx="112" cy="56" r="4" fill="#5C5C61" />
          {/* code lines */}
          {[
            { x: 84, y: 96, w: 90 },
            { x: 84, y: 114, w: 140 },
            { x: 104, y: 132, w: 110 },
            { x: 104, y: 150, w: 70 },
            { x: 84, y: 168, w: 130 },
          ].map((l, i) => (
            <rect key={i} x={l.x} y={l.y} width={l.w} height="6" rx="3" fill={i === 1 ? "#B8934A" : "#3A3A3E"} opacity={i === 1 ? 0.9 : 0.7} />
          ))}
          <rect x="230" y="150" width="60" height="24" rx="6" fill="none" stroke="#B8934A" strokeWidth="1.5" />
        </svg>
      );

    case "cloud-infrastructure":
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          {[40, 90, 140, 190].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#FFFFFF" strokeOpacity="0.04" strokeWidth="1" />
          ))}
          {/* server stack */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(150, ${60 + i * 34})`}>
              <rect width="120" height="24" rx="4" fill="none" stroke="#8A8A8E" strokeWidth="1.25" />
              <circle cx="14" cy="12" r="2.5" fill={i === 1 ? "#B8934A" : "#5C5C61"} />
              <line x1="30" y1="12" x2="90" y2="12" stroke="#3A3A3E" strokeWidth="2" />
            </g>
          ))}
          {/* connection nodes */}
          <circle cx="320" cy="70" r="5" fill="#B8934A" />
          <circle cx="340" cy="130" r="4" fill="#8A8A8E" />
          <circle cx="310" cy="180" r="4" fill="#8A8A8E" />
          <path d="M270 72 L320 70 M270 106 L340 130 M270 174 L310 180" stroke="#B8934A" strokeOpacity="0.4" strokeWidth="1" />
        </svg>
      );

    case "ai-automation":
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          {(() => {
            const nodes = [
              { x: 60, y: 120 }, { x: 130, y: 70 }, { x: 130, y: 170 },
              { x: 210, y: 40 }, { x: 210, y: 120 }, { x: 210, y: 200 },
              { x: 290, y: 90 }, { x: 290, y: 160 }, { x: 350, y: 120 },
            ];
            const edges = [
              [0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[4,7],[5,7],[6,8],[7,8],
            ];
            return (
              <>
                {edges.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={nodes[a].x} y1={nodes[a].y}
                    x2={nodes[b].x} y2={nodes[b].y}
                    stroke="#B8934A" strokeOpacity="0.25" strokeWidth="1"
                  />
                ))}
                {nodes.map((n, i) => (
                  <circle key={i} cx={n.x} cy={n.y} r={i === 8 ? 6 : 4} fill={i === 8 ? "#B8934A" : "#8A8A8E"} />
                ))}
              </>
            );
          })()}
        </svg>
      );

    case "ui-ux-design":
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          {/* layered artboards */}
          <rect x="70" y="70" width="150" height="110" rx="6" fill="none" stroke="#3A3A3E" strokeWidth="1.25" />
          <rect x="100" y="50" width="150" height="110" rx="6" fill="none" stroke="#5C5C61" strokeWidth="1.25" />
          <rect x="130" y="30" width="150" height="110" rx="6" fill="#0F0F11" stroke="#B8934A" strokeWidth="1.5" />
          {/* layout grid inside top artboard */}
          <rect x="145" y="45" width="120" height="16" rx="3" fill="#3A3A3E" />
          <rect x="145" y="70" width="55" height="55" rx="4" fill="none" stroke="#8A8A8E" strokeWidth="1" />
          <rect x="210" y="70" width="55" height="26" rx="4" fill="none" stroke="#8A8A8E" strokeWidth="1" />
          <rect x="210" y="100" width="55" height="25" rx="4" fill="#B8934A" opacity="0.7" />
          <circle cx="330" cy="70" r="3" fill="#B8934A" />
        </svg>
      );

    case "it-consulting-strategy":
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          {/* compass / roadmap */}
          <circle cx="140" cy="120" r="70" fill="none" stroke="#3A3A3E" strokeWidth="1.25" />
          <circle cx="140" cy="120" r="45" fill="none" stroke="#5C5C61" strokeWidth="1" />
          <line x1="140" y1="50" x2="140" y2="190" stroke="#3A3A3E" strokeWidth="1" />
          <line x1="70" y1="120" x2="210" y2="120" stroke="#3A3A3E" strokeWidth="1" />
          <path d="M140 120 L165 85" stroke="#B8934A" strokeWidth="2" strokeLinecap="round" />
          <circle cx="140" cy="120" r="5" fill="#B8934A" />
          {/* roadmap milestones */}
          <path d="M240 180 L280 150 L320 160 L360 100" fill="none" stroke="#8A8A8E" strokeWidth="1.25" strokeDasharray="1 8" strokeLinecap="round" />
          {[
            { x: 240, y: 180 }, { x: 280, y: 150 }, { x: 320, y: 160 }, { x: 360, y: 100 },
          ].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={i === 3 ? 5 : 3.5} fill={i === 3 ? "#B8934A" : "#5C5C61"} />
          ))}
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 240" className={`${common} ${className}`} aria-hidden="true">
          <circle cx="200" cy="120" r="40" fill="none" stroke="#B8934A" strokeWidth="1.5" />
        </svg>
      );
  }
}
