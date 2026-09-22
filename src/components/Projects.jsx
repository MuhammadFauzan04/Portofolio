import { useMemo, useState } from "react";
import { useContent } from "../context/LanguageContext";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectModal from "./ProjectModal";
import ProjectCover from "./ProjectCover";
import SplitReveal from "./SplitReveal";
import { ArrowUpRight } from "./Icons";

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
      <div className="projects__head">
        <AnimateOnScroll>
          <span className="label">[ {projects.sectionLabel} ]</span>
        </AnimateOnScroll>
        <SplitReveal as="h2" className="projects__title" text={projects.sectionTitle} />

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
      </div>

      <div className="project-grid" key={filter}>
        {filtered.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className="project-card"
            style={{ "--stagger": `${(i % 2) * 90}ms` }}
            onClick={() => setActive(p)}
          >
            <span className="project-card__media">
              <ProjectCover project={p} variant="card" />
              <span className="project-card__tag chip chip--glass">{p.tag}</span>
              <span className="project-card__go arrow-circle">
                <ArrowUpRight size={16} />
              </span>
            </span>

            <span className="project-card__body">
              <span className="project-card__row">
                <span className="project-card__title">{p.title}</span>
                {p.category && (
                  <span className="project-card__category">{p.category}</span>
                )}
              </span>
              <span className="project-card__summary">{p.summary}</span>
              <span className="project-card__meta">
                {p.meta.slice(0, 3).map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </span>
            </span>
          </button>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
