import { useState } from "react";
import { projects } from "../data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectMockup from "./ProjectMockup";
import ProjectModal from "./ProjectModal";
import ProjectVisual from "./ProjectVisual";
import SplitReveal from "./SplitReveal";

export default function Projects() {
  const [active, setActive] = useState(null);
  const featured = projects.list.find((p) => p.featured);
  const others = projects.list.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Karya Pilihan</span>
            <SplitReveal as="h2" className="section__title" text="Studi kasus" />
          </div>
        </AnimateOnScroll>

        {featured && (
          <AnimateOnScroll variant="scale" duration={1}>
            <button
              type="button"
              className="project-feature"
              onClick={() => setActive(featured)}
            >
              <div className="pf-copy">
                <div className="pf-tag">{featured.tag}</div>
                <h3>{featured.title}</h3>
                <p>{featured.summary}</p>
                <div className="pf-meta">
                  {featured.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <span className="pf-link">
                  Lihat detail studi kasus
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>
              <div className="pf-visual">
                <ProjectVisual
                  accent={featured.accent}
                  logo={featured.logo}
                  title={featured.title}
                />
              </div>
            </button>
          </AnimateOnScroll>
        )}

        <div className="project-grid">
          {others.map((p, i) => (
            <AnimateOnScroll
              key={p.id}
              delay={i * 100}
              variant={i % 2 === 0 ? "left" : "right"}
            >
              <button
                type="button"
                className="project-card"
                onClick={() => setActive(p)}
              >
               <div className="project-card__visual">
                  <ProjectVisual accent={p.accent} logo={p.logo} title={p.title} />
                </div>
                <div className="pc-tag">{p.tag}</div>
                <h4>{p.title}</h4>
                <p>{p.summary}</p>
                <span className="pf-link pf-link--sm">
                  Lihat detail
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}