import { useId } from "react";

/**
 * Decorative 8-pointed asterisk / sparkle accent.
 * Orange–yellow gradient shape, optionally wrapped in a frosted
 * glass panel with a soft blurred glow behind it.
 *
 * Purely decorative — always aria-hidden and non-interactive.
 */
export default function SparkleAccent({
  size = 64,
  top,
  left,
  right,
  bottom,
  rotate = 0,
  variant = "glass", // "glass" | "glow" | "plain"
  duration = 8,
  delay = 0,
  spin = true,
  className = "",
}) {
  const gradientId = useId();

  return (
    <span
      className={`sparkle sparkle--${variant} ${className}`}
      aria-hidden="true"
      style={{
        "--sparkle-size": `${size}px`,
        "--sparkle-duration": `${duration}s`,
        "--sparkle-delay": `${delay}s`,
        top,
        left,
        right,
        bottom,
      }}
    >
      {variant !== "plain" && <span className="sparkle__glow" />}
      {variant === "glass" && <span className="sparkle__panel" />}
      <svg
        className={`sparkle__icon${spin ? " sparkle__icon--spin" : ""}`}
        viewBox="0 0 100 100"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd23f" />
            <stop offset="100%" stopColor="#ff8a00" />
          </linearGradient>
        </defs>
        <g fill={`url(#${gradientId})`}>
          <path d="M50 6 C68 26 68 74 50 94 C32 74 32 26 50 6 Z" />
          <path
            d="M50 6 C68 26 68 74 50 94 C32 74 32 26 50 6 Z"
            transform="rotate(45 50 50)"
          />
          <path
            d="M50 6 C68 26 68 74 50 94 C32 74 32 26 50 6 Z"
            transform="rotate(90 50 50)"
          />
          <path
            d="M50 6 C68 26 68 74 50 94 C32 74 32 26 50 6 Z"
            transform="rotate(135 50 50)"
          />
        </g>
      </svg>
    </span>
  );
}
