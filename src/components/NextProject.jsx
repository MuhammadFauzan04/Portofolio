import { useEffect, useRef } from "react";

// Pembatas + kartu "Proyek berikutnya" di akhir halaman studi kasus.
// theme: "teazzi" | "medilink" (warna), device: "phone" | "laptop" (bentuk mockup).
// images: array URL; phone memakai 3 gambar, laptop memakai 2.
export default function NextProject({ href, title, subtitle, tags = [], images, device = "phone", theme = "teazzi" }) {
  const sep = useRef(null);
  const slots = device === "laptop" ? [["r", 1], ["c", 0]] : [["l", 1], ["r", 2], ["c", 0]];

  // Garis pembatas "tergambar" dari tengah ke kedua sisi saat masuk layar.
  useEffect(() => {
    const el = sep.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("is-in"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); }
    }, { threshold: 0.8 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="cs-sep" ref={sep} aria-hidden="true">
        <i /><span><b>✦</b>Lanjut ke proyek lain</span><i />
      </div>
      <a className={`cs-next cs-next--${theme} cs-next--${device}`} href={href}>
        <div className="cs-next__text">
          <small><i aria-hidden="true" />Proyek berikutnya</small>
          <strong>{title}</strong>
          <span className="cs-next__sub">{subtitle}</span>
          <ul className="cs-next__meta">{tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <span className="cs-next__cta">Lihat studi kasus <b aria-hidden="true">→</b></span>
        </div>
        <div className="cs-next__phones" aria-hidden="true">
          {slots.map(([pos, n]) => (
            <span key={pos} className={`cs-next__ph cs-next__ph--${pos}`}>
              <img src={images[n]} alt="" loading="lazy" />
            </span>
          ))}
        </div>
      </a>
    </>
  );
}
