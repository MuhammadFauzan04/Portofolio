import { useEffect } from "react";
import { useContent } from "../context/LanguageContext";
import ProjectCarousel from "./ProjectCarousel";
import ProjectCover from "./ProjectCover";
import { thumb } from "../lib/thumb";

export default function ProjectModal({ project, onClose }) {
  const { ui } = useContent();

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
