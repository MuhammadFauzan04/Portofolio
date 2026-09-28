import { thumb } from "../lib/thumb";

// Set `project.cover = { laptop, phone }` to get a mixed cover (one laptop +
// one phone) instead of the kind-based default.
// Cover art for a project card: the real mockup screenshots sit on a solid
// accent-colour field. Web projects show one laptop mockup, mobile projects
// show two staggered phones that bleed off the bottom edge.
export default function ProjectCover({ project, variant = "card", index = 0 }) {
  const { kind = "web", accent = "blue", images = [], title, cover } = project;
  const first = images[index % Math.max(images.length, 1)];
  const second = images[(index + 1) % Math.max(images.length, 1)];

  if (cover?.laptop && cover?.phone) {
    return (
      <div className={`cover cover--${accent} cover--both cover--${variant}`}>
        <span className="cover__grain" aria-hidden="true" />
        <img
          className="cover__laptop"
          src={thumb(cover.laptop)}
          alt={title}
          loading="lazy"
          draggable="false"
        />
        <img
          className="cover__phone cover__phone--a"
          src={thumb(cover.phone)}
          alt=""
          loading="lazy"
          draggable="false"
        />
      </div>
    );
  }

  return (
    <div className={`cover cover--${accent} cover--${kind} cover--${variant}`}>
      <span className="cover__grain" aria-hidden="true" />
      {kind === "mobile" ? (
        <>
          <img
            className="cover__phone cover__phone--a"
            src={thumb(first)}
            alt={title}
            loading="lazy"
            draggable="false"
          />
          {second && second !== first && (
            <img
              className="cover__phone cover__phone--b"
              src={thumb(second)}
              alt=""
              loading="lazy"
              draggable="false"
            />
          )}
        </>
      ) : (
        <>
          <img
            className="cover__laptop"
            src={thumb(first)}
            alt={title}
            loading="lazy"
            draggable="false"
          />
          {variant === "strip" && second && second !== first && (
            <img
              className="cover__laptop cover__laptop--b"
              src={thumb(second)}
              alt=""
              loading="lazy"
              draggable="false"
            />
          )}
        </>
      )}
    </div>
  );
}
