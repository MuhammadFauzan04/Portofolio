import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import ScrollProgress from "./ScrollProgress";

// Kerangka umum halaman studi kasus: bilah atas, hero, daftar isi yang
// mengikuti scroll, dan area konten. Setiap <section> anak harus punya data-id.
// Elemen yang otomatis muncul halus saat di-scroll. Tambah selector di sini bila perlu.
const REVEAL = [
  ".cs-head", ".cs-content h3", ".tz-method", ".cs-tags", ".tz-callout", ".cs-table",
  ".tz-problem", ".tz-hmw li", ".cs-card", ".tz-screen", ".tzd-sw", ".tzd-cell",
  ".tzd-pal__row > div", ".tzd-type__hero", ".tzd-type__list", ".tz-logo", ".tz-next",
].join(",");

export default function CaseShell({ slug, docTitle, title, subtitle, facts, hero, sections, className = "", children }) {
  const [active, setActive] = useState(sections[0][0]);
  const root = useRef(null);

  // Animasi muncul saat scroll. Dilewati bila pengguna memilih "reduced motion".
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(REVEAL, root.current).filter(
        (el) => !el.parentElement?.closest(REVEAL)?.matches(".tz-screen, .tz-problem, .cs-card")
      );
      gsap.set(targets, { opacity: 0, y: 26 });
      ScrollTrigger.batch(targets, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
            stagger: 0.09, overwrite: true, clearProps: "opacity,transform",
          }),
      });
    }, root);
    const t = setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  useEffect(() => {
    document.title = docTitle;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.dataset.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("[data-id]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [docTitle]);

  return (
    <div ref={root} className={`cs ${className}`}>
      <ScrollProgress />
      <div className="cs-bar">
        <a href="#projects" className="cs-back">← Semua karya</a>
        <div className="cs-bar__tools"><LanguageToggle /><ThemeToggle /></div>
      </div>

      <div className="cs-frame">
        <section className="cs-hero">
          <h1>{title}</h1>
          <p className="cs-hero__sub">{subtitle}</p>
          <dl className="cs-facts">
            {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          {hero}
        </section>

        <div className="cs-layout">
          <nav className="cs-toc" aria-label="Isi studi kasus">
            {sections.map(([id, label]) => (
              <a key={id} href={`#/project/${slug}`} className={active === id ? "is-active" : ""}
                onClick={(e) => { e.preventDefault(); document.querySelector(`[data-id="${id}"]`)?.scrollIntoView({ behavior: "smooth" }); }}>
                {label}
              </a>
            ))}
          </nav>
          <div className="cs-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
