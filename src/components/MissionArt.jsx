// Two line-art tiles for the About "mission" slider — abstract visuals about
// *how* the work gets done (research, iteration), deliberately different
// from the literal project screenshots shown in Karya. Reuses the same
// gradient system as project covers (`.cover--{accent}`) so it stays on
// the same visual language as the rest of the site.

function ResearchIcon() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* interface being studied */}
      <rect x="28" y="38" width="114" height="84" rx="7" stroke="#fff" strokeWidth="1.6" opacity="0.9" />
      <line x1="28" y1="58" x2="142" y2="58" stroke="#fff" strokeWidth="1.3" opacity="0.65" />
      <circle cx="39" cy="48" r="2.1" fill="#fff" opacity="0.75" />
      <circle cx="48" cy="48" r="2.1" fill="#fff" opacity="0.75" />
      <circle cx="57" cy="48" r="2.1" fill="#fff" opacity="0.75" />
      <line x1="42" y1="74" x2="120" y2="74" stroke="#fff" strokeWidth="1.3" opacity="0.5" />
      <line x1="42" y1="89" x2="100" y2="89" stroke="#fff" strokeWidth="1.3" opacity="0.35" />
      <line x1="42" y1="104" x2="128" y2="104" stroke="#fff" strokeWidth="1.3" opacity="0.5" />
      <rect x="42" y="114" width="36" height="8" rx="2" stroke="#fff" strokeWidth="1.2" opacity="0.55" />

      {/* sticky-note style annotations, like usability notes */}
      <rect x="150" y="34" width="26" height="20" rx="2" fill="#fff" opacity="0.14" transform="rotate(6 163 44)" />
      <rect x="12" y="128" width="24" height="18" rx="2" fill="#fff" opacity="0.12" transform="rotate(-8 24 137)" />

      {/* magnifying glass — the research lens */}
      <circle cx="148" cy="134" r="33" stroke="#fff" strokeWidth="1" opacity="0.16" strokeDasharray="2 6" />
      <circle cx="148" cy="134" r="22" stroke="#fff" strokeWidth="1" opacity="0.28" strokeDasharray="2 6" />
      <circle cx="148" cy="134" r="15" stroke="#fff" strokeWidth="2.2" fill="rgba(0,0,0,0.12)" />
      <line x1="158.6" y1="144.6" x2="176" y2="162" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ProcessIcon() {
  const nodes = [
    { x: 100, y: 30 },
    { x: 170, y: 100 },
    { x: 100, y: 170 },
    { x: 30, y: 100 },
  ];
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* looping path connecting the four stages, arrow closing the loop */}
      <path
        d="M100 30 A70 70 0 1 1 34 82"
        stroke="#fff"
        strokeWidth="1.6"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M22 71 L34 82 L47 69"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="19" stroke="#fff" strokeWidth="1" opacity="0.22" />
          <circle cx={n.x} cy={n.y} r="8" fill="rgba(0,0,0,0.18)" stroke="#fff" strokeWidth="1.6" />
          <text
            x={n.x}
            y={n.y + 3.5}
            textAnchor="middle"
            fontSize="8"
            fontFamily="JetBrains Mono, monospace"
            fill="#fff"
            opacity="0.85"
          >
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}
    </svg>
  );
}

const ICONS = { research: ResearchIcon, process: ProcessIcon };

export default function MissionArt({ variant, accent = "blue", label }) {
  const Icon = ICONS[variant] || ResearchIcon;
  return (
    <div className={`cover cover--${accent} mission-art`}>
      <span className="cover__grain" aria-hidden="true" />
      <div className="mission-art__icon">
        <Icon />
      </div>
      {label && <span className="chip chip--glass mission-art__tag">{label}</span>}
    </div>
  );
}
