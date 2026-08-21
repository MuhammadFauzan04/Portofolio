import { useId } from "react";

/**
 * Flat 8-pointed asterisk sticker — four straight bars crossing at the
 * center (0°, 45°, 90°, 135°), die-cut with a soft white edge so it reads
 * like a vinyl sticker glued onto the screen. Purely decorative.
 */
function StickerShape({ gradientFrom, gradientTo }) {
  const gradientId = useId();
  const angles = [0, 45, 90, 135];

  return (
    <svg viewBox="0 0 100 100" className="corner-sticker__svg">
      <defs>
        <linearGradient id={gradientId} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="100%" stopColor={gradientTo} />
        </linearGradient>
      </defs>

      {/* die-cut white edge */}
      <g fill="var(--sticker-edge, #fff)">
        {angles.map((deg) => (
          <rect
            key={`edge-${deg}`}
            x="38.5"
            y="1"
            width="23"
            height="98"
            rx="5"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>

      {/* main gradient shape */}
      <g fill={`url(#${gradientId})`}>
        {angles.map((deg) => (
          <rect
            key={`bar-${deg}`}
            x="41"
            y="3"
            width="18"
            height="94"
            rx="4"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
    </svg>
  );
}

function CornerSticker({
  size,
  corner,
  offsetX,
  offsetY,
  rotate,
  opacity = 1,
  gradientFrom = "#ffb257",
  gradientTo = "#8a3d0c",
}) {
  const style = {
    width: size,
    height: size,
    opacity,
    "--sticker-rotate": `${rotate}deg`,
  };

  if (corner.includes("top")) style.top = offsetY;
  else style.bottom = offsetY;

  if (corner.includes("left")) style.left = offsetX;
  else style.right = offsetX;

  return (
    <div className="corner-sticker" style={style} aria-hidden="true">
      <StickerShape gradientFrom={gradientFrom} gradientTo={gradientTo} />
    </div>
  );
}

export default function CornerStickers() {
  return (
    <div className="corner-stickers" aria-hidden="true">
     <CornerSticker
  size={260}
  corner="top-left"
  offsetX={-80}
  offsetY={-80}
  rotate={-16}
  opacity={0.92}
  // 👇 tambahkan ini untuk sticker kiri atas (kalau tidak diisi, pakai default di bawah)
  gradientFrom="#ffe066"
  gradientTo="#ff8a3d"
/>
<CornerSticker
  size={190}
  corner="bottom-right"
  offsetX={-45}
  offsetY={-50}
  rotate={22}
  opacity={0.85}
  gradientFrom="#fff26e"   // 👈 sticker kanan bawah, warna ini
  gradientTo="#ff9a3c"     // 👈 dan ini
/>
    </div>
  );
}
