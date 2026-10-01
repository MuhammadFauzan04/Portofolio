import { useEffect, useState } from "react";
import { useContent } from "../context/LanguageContext";
import ProjectCarousel from "./ProjectCarousel";
import ProjectCover from "./ProjectCover";
import { thumb } from "../lib/thumb";
import { Chevron, ArrowUpRight } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  const { ui } = useContent();
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    // Reset to the first pain point whenever a different project is opened.
    setOpenIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-banner">
          <ProjectCover project={project} variant="modal" />
          <div className="modal-banner__bar">
            {project.logo ? (
              <span className="modal-banner__logo">
                <img src={project.logo} alt="" loading="lazy" />
              </span>
            ) : (
              <span />
            )}
            <button
              type="button"
              className="modal-close"
              onClick={onClose}
              aria-label={ui.close}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-body__head">
            <span className="pf-tag">{project.tag}</span>
            {project.category && (
              <span className="chip">{project.category}</span>
            )}
          </div>

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          {project.meta?.length > 0 && (
            <div className="pf-meta">
              {project.meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          )}

          {project.caseStudyUrl && (
            <a
              className="btn btn--primary modal-prototype"
              href={project.caseStudyUrl}
              onClick={onClose}
              style={{ marginRight: 12 }}
            >
              {ui.caseStudyLabel}
              <ArrowUpRight size={14} />
            </a>
          )}

          {project.prototypeUrl ? (
            <a
              className="btn btn--primary modal-prototype"
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui.prototypeLabel}
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span
              className="btn btn--ghost modal-prototype is-disabled"
              aria-disabled="true"
            >
              {ui.prototypeSoonLabel}
            </span>
          )}

          {project.painPoints?.length > 0 && (
            <div className="pf-painpoints">
              {project.painPoints.map((p, i) => {
                const isOpen = openIndex === i;
                const panelId = `painpoint-panel-${project.id}-${i}`;
                return (
                  <div
                    className={`pf-painpoint${isOpen ? " is-open" : ""}`}
                    key={i}
                  >
                    <button
                      type="button"
                      className="pf-painpoint__head"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    >
                      <span className="pf-painpoint__index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pf-painpoint__problem">
                        <span className="label">
                          [ {ui.challengeLabel} ]
                        </span>
                        {p.problem}
                      </span>
                      <Chevron size={14} className="pf-painpoint__chevron" />
                    </button>

                    <div className="pf-painpoint__wrap" id={panelId}>
                      <div className="pf-painpoint__inner">
                        <p className="pf-painpoint__solution">
                          <span className="label">
                            [ {ui.solutionLabel} ]
                          </span>
                          {p.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {project.images?.length > 0 && (
            <div className="modal-gallery">
              <span className="label">[ {ui.previewLabel} ]</span>
              <ProjectCarousel images={project.images.map(thumb)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
