// Small inline icons shared by the redesigned sections.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowUpRight = ({ size = 14, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export const ArrowRight = ({ size = 16, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = ({ size = 16, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M20 12H4M10 6l-6 6 6 6" />
  </svg>
);

export const CornerDownLeft = ({ size = 12, ...rest }) => (
  <svg {...base} width={size} height={size} strokeWidth={2.2} {...rest}>
    <path d="M19 5v6a3 3 0 0 1-3 3H5M9 10l-4 4 4 4" />
  </svg>
);

export const QuoteMark = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M4 17.5c0-4.4 1.8-8 5.5-10.5l1.2 1.6C8.6 10 7.9 11.6 7.8 13H10.5v6H4v-1.5zm9.5 0c0-4.4 1.8-8 5.5-10.5l1.2 1.6c-2.1 1.4-2.8 3-2.9 4.4H20v6h-6.5v-1.5z" />
  </svg>
);

export const LogoMark = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" aria-hidden="true" {...rest}>
    <path d="M6 20V6a2 2 0 0 1 2-2h11M6 12h9" />
  </svg>
);
