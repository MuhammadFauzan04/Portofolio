import { useState } from "react";
import { useContent } from "../context/LanguageContext";
import ProjectCover from "./ProjectCover";
import ProjectModal from "./ProjectModal";
import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowUpRight, CornerDownLeft, Download } from "./Icons";

// Which projects are pinned as the two big cards in the hero.
const HERO_PROJECT_IDS = ["medilink", "belibis"];

export default function Hero() {
  const { hero, projects } = useContent();
  const [active, setActive] = useState(null);

  const cards = HERO_PROJECT_IDS.map((id) =>
    projects.list.find((p) => p.id === id)
  ).filter(Boolean);

  // Roles double as the four tag chips: two hug the left edge, two the right.
  const tagHalf = Math.ceil(hero.roles.length / 2);
  const tagsLeft = hero.roles.slice(0, tagHalf);
  const tagsRight = hero.roles.slice(tagHalf);

  // Keep the pill glued to the last word of the first line so it never
  // wraps onto a line of its own.
  const titleWords = hero.titleLine1.split(" ");
  const lastWord = titleWords[titleWords.length - 1];
  const firstWords = titleWords.slice(0, -1);

  const ctaLabel = hero.ctaPrimary.label.replace(/\s*→\s*$/, "");

  return (
    <section className="hero" id="hero">
      <div className="hero__top">
        <div className="hero__intro">
          <p className="hero__lead">{hero.subtitle}</p>
          <div className="hero__cta-row">
            <a href={hero.ctaPrimary.href} className="btn">
              {ctaLabel}
              <ArrowUpRight size={13} />
            </a>
            <a
              href={hero.ctaCv.href}
              className="btn btn--ghost"
              download
            >
              {hero.ctaCv.label}
              <Download size={13} />
            </a>
          </div>
        </div>

        <div className="hero__headline">
          <h1 className="hero__title">
            {firstWords.join(" ")}{" "}
            <span className="hero__nowrap">
              {lastWord}
              <span className="hero__pill" aria-hidden="true">
                <span className="hero__pill-dot">
                  <CornerDownLeft size={12} />
                </span>
              </span>
            </span>
            <br />
            {hero.titleLineGrad}
          </h1>
        </div>
      </div>

      <div className="hero__tags">
        <div className="hero__tag-group">
          {tagsLeft.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="hero__tag-group">
          {tagsRight.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="hero__cards">
        {cards.map((p, i) => (
          <AnimateOnScroll key={p.id} delay={i * 90} variant="scale" duration={1}>
            <button
              type="button"
              className="hero-card"
              onClick={() => setActive(p)}
              aria-label={`${hero.cardLabel}: ${p.title}`}
            >
              <ProjectCover project={p} variant="hero" />
              <span className="hero-card__foot">
                <span className="hero-card__label">{hero.cardLabel}</span>
                <span className="arrow-circle">
                  <ArrowUpRight size={16} />
                </span>
              </span>
            </button>
          </AnimateOnScroll>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
