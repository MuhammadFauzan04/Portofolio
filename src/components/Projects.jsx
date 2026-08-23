import { useMemo, useState } from "react";
import { useContent } from "../context/LanguageContext";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectModal from "./ProjectModal";
import ProjectVisual from "./ProjectVisual";
import SplitReveal from "./SplitReveal";

export default function Projects() {
  const { projects } = useContent();
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("all");

  const categories = useMemo(() => {
    const seen = new Map();
    projects.list.forEach((p) => {
      if (p.category && !seen.has(p.category)) seen.set(p.category, p.category);
    });
    return Array.from(seen.values());
  }, [projects.list]);

  const filtered = useMemo(() => {
    if (filter === "all") return projects.list;
    return projects.list.filter((p) => p.category === filter);
  }, [projects.list, filter]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">{projects.sectionLabel}</span>
            <SplitReveal as="h2" className="section__title" text={projects.sectionTitle} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={60}>
          <div className="project-filters" role="tablist" aria-label={projects.sectionLabel}>
            <button
              type="button"
              role="tab"
              aria-selected={filter === "all"}
              className={`project-filter ${filter === "all" ? "project-filter--active" : ""}`}
              onClick={() => setFilter("all")}
            >
              {projects.filterAllLabel}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                className={`project-filter ${filter === cat ? "project-filter--active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="project-showcase" key={filter}>
          {filtered.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`project-showcase__item ${
                p.featured ? "project-showcase__item--featured" : ""
              }`}
              style={{ "--stagger": `${i * 70}ms` }}
              onClick={() => setActive(p)}
            >
              <span className="project-showcase__media">
                <ProjectVisual
                  accent={p.accent}
                  image={p.images?.[0]}
                  logo={p.logo}
                  title={p.title}
                />
                <span className="project-showcase__overlay">
                  <span className="project-showcase__view">
                    {p.featured ? projects.viewCaseStudyLabel : projects.viewDetailLabel}
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
                </span>
              </span>

              <span className="project-showcase__body">
                <span className="project-showcase__top">
                  <span className="project-showcase__tag">{p.tag}</span>
                  {p.category && (
                    <span className="project-showcase__category">{p.category}</span>
                  )}
                </span>
                <span className="project-showcase__title">{p.title}</span>
                <span className="project-showcase__summary">{p.summary}</span>
                <span className="project-showcase__meta">
                  {p.meta.slice(0, 3).map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
