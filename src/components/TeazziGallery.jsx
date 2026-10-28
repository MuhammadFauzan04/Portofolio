import { useEffect, useRef, useState } from "react";
import { thumb } from "../lib/thumb";
import ImageLightbox from "./ImageLightbox";

// Pakai thumbnail WebP bila ada; jika belum dibuat, jatuh ke file aslinya.
function Shot({ src, alt }) {
  return (
    <img
      src={thumb(src)}
      alt={alt}
      onError={(e) => {
        if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = "1"; e.currentTarget.src = src; }
      }}
    />
  );
}

// Galeri hasil desain, pola yang sama dengan MediLink: satu layar tampil, ganti lewat tab,
// tombol, panah keyboard, atau geser; klik gambar untuk memperbesar (lightbox).
// Layar tanpa `src` (slot) hanya muncul saat dev dan tidak ikut lightbox.
export default function TeazziGallery({ screens }) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const touchX = useRef(null);
  const n = screens.length;
  const s = screens[i];
  const go = (d) => setI((v) => (v + d + n) % n);

  const shots = screens.filter((x) => x.src);
  const zi = shots.indexOf(s);

  // Muat gambar sebelum/sesudahnya lebih dulu supaya pergantian tidak berkedip.
  useEffect(() => {
    [(i + 1) % n, (i - 1 + n) % n].forEach((k) => {
      if (screens[k].src) new Image().src = thumb(screens[k].src);
    });
  }, [i, n, screens]);

  return (
    <div className="cs-gal tz-gal">
      <div
        className="tz-gal__stage" tabIndex={0}
        onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
      >
        <div className="cs-gal__main tz-gal__main" key={s.id}>
          <div className="tz-gal__phone">
            {s.src ? (
              <button type="button" className="cs-gal__open" onClick={() => setZoom(true)} aria-label={`Perbesar layar ${s.name}`}>
                <Shot src={s.src} alt={`Layar ${s.name}`} />
                <span className="cs-gal__hint">Perbesar</span>
              </button>
            ) : (
              <div className="tz-slot">
                <b>Slot gambar</b>
                <span>Letakkan PNG di <code>public/</code>, lalu isi <code>src</code> pada layar "{s.id}" di <code>teazziCase.js</code></span>
              </div>
            )}
          </div>

          <div className="tz-gal__text">
            <span className="tz-chip">{s.n} · {s.solves}</span>
            <h3>{s.name}</h3>
            <p>{s.d}</p>
            {s.decisions.length > 0 && <ul className="cs-list">{s.decisions.map((x) => <li key={x}>{x}</li>)}</ul>}
            {!s.src && <p className="tz-draft">Hanya tampil saat pengembangan. Di situs publik slot ini disembunyikan sampai gambarnya ada.</p>}

            <div className="tz-gal__nav">
              <button type="button" onClick={() => go(-1)} aria-label="Layar sebelumnya">←</button>
              <button type="button" onClick={() => go(1)} aria-label="Layar berikutnya">→</button>
              <span className="cs-gal__count">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-gal__tabs" role="tablist">
        {screens.map((x, k) => (
          <button key={x.id} role="tab" aria-selected={k === i} className={k === i ? "is-on" : ""} onClick={() => setI(k)}>
            {x.name}
          </button>
        ))}
      </div>

      {zoom && zi >= 0 && (
        <ImageLightbox
          screens={shots} index={zi} label="Teazzi" className="lb--phone"
          onIndex={(k) => setI(screens.indexOf(shots[k]))}
          onClose={() => setZoom(false)}
        />
      )}
    </div>
  );
}
