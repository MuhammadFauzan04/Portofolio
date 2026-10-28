import { useEffect, useRef } from "react";

// Lightbox layar penuh: Esc menutup, panah kiri/kanan berpindah, geser di layar sentuh.
export default function ImageLightbox({ screens, index, onIndex, onClose, label = "MediLink", className = "" }) {
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const n = screens.length;
  const go = (d) => onIndex((index + d + n) % n);
  const s = screens[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  });

  return (
    <div
      className={`lb ${className}`} role="dialog" aria-modal="true" aria-label={`Pratinjau layar ${s.name}`}
      onClick={onClose}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      <button ref={closeRef} className="lb__btn lb__close" onClick={onClose} aria-label="Tutup">✕</button>
      <button className="lb__btn lb__prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Layar sebelumnya">←</button>
      <button className="lb__btn lb__next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Layar berikutnya">→</button>
      <figure className="lb__fig" key={s.src} onClick={(e) => e.stopPropagation()}>
        <img src={s.src} alt={`Antarmuka ${label}: ${s.name}`} />
        <figcaption>
          <b>{s.name}</b> {s.d}
          <span>{String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
        </figcaption>
      </figure>
    </div>
  );
}
