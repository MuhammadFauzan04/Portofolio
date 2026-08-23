// Renders a project's real screenshot floating over a soft, animated color
// mesh — replacing the old abstract-logo panel with an honest preview of
// the actual product, while keeping the colorful "glow" identity per card.
export default function ProjectVisual({ accent = "blue", image, logo, title }) {
  return (
    <div className={`showcase-visual showcase-visual--${accent}`}>
      <div className="showcase-visual__mesh" />
      <div className="showcase-visual__grid" />
      {image && (
        <img
          src={image}
          alt={title}
          className="showcase-visual__shot"
          loading="lazy"
        />
      )}
      {logo && (
        <span className="showcase-visual__badge">
          <img src={logo} alt="" />
        </span>
      )}
    </div>
  );
}
