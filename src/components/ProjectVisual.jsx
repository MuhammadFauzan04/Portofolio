import ProjectMockup from "./ProjectMockup";

export default function ProjectVisual({ accent = "blue", logo, title, variant = 1 }) {
  return (
    <div className={`visual-panel visual-panel--${accent}`}>
      <div className="visual-panel__mesh" />
      <div className="visual-panel__grid" />
      <div className="visual-panel__content">
        {logo ? (
          <img src={logo} alt={title} className="visual-panel__logo" />
        ) : (
          <ProjectMockup accent={accent} variant={variant} />
        )}
      </div>
    </div>
  );
}