import { useState } from "react";
import { projects } from "../data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectModal from "./ProjectModal";
import ProjectVisual from "./ProjectVisual";
import SplitReveal from "./SplitReveal";

export default function Projects() {
  const [active, setActive] = useState(null);
  const list = projects.list;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Karya Pilihan</span>
            <SplitReveal as="h2" className="section__title" text="Studi kasus" />
            <p className="karya-intro">
              Setiap kartu di bawah adalah tab yang sedang &ldquo;terbuka&rdquo; di ruang kerja saya — arahkan kursor untuk membuka detailnya.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="karya-grid">
          {list.map((p, i) => (
            <AnimateOnScroll
              key={p.id}
              delay={Math.min(i, 4) * 90}
              variant={p.featured ? "scale" : i % 2 === 0 ? "left" : "right"}
              duration={p.featured ? 1 : 0.9}
              className={`karya-cell karya-cell--${i + 1}`}
            >
              <button
                type="button"
                className={`karya-card${p.featured ? " karya-card--hero" : ""}`}
                onClick={() => setActive(p)}
              >
                <div className="karya-card__chrome">
                  <span className="karya-card__dots" aria-hidden="true">
                    <i /><i /><i />
                  </span>
                  <span className="karya-card__url">karya/{p.id}</span>
                  <span className="karya-card__tabnum">TAB {String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="karya-card__visual">
                  <ProjectVisual accent={p.accent} logo={p.logo} title={p.title} />
                </div>

                {p.featured ? (
                  <div className="karya-card__overlay">
                    <div className="pf-tag">{p.tag}</div>
                    <h3>{p.title}</h3>
                    <span className="pf-link">
                      Lihat detail studi kasus
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                  </div>
                ) : (
                  <div className="karya-card__footer">
                    <div>
                      <div className="pc-tag">{p.tag}</div>
                      <h4>{p.title}</h4>
                    </div>
                    <span className="karya-card__arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                  </div>
                )}
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
