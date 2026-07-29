import { useEffect } from "react";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectModal({ project, onClose }) {
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
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          ✕
        </button>

        <div className="modal-visual">
        <ProjectCarousel images={project.images} />
        </div>

        <div className="modal-body">
          <div className="pf-tag">{project.tag}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="pf-meta">
            {project.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}