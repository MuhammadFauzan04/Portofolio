import { useRef } from "react";
import { useContent, useLanguage } from "../context/LanguageContext";
import AnimateOnScroll from "./AnimateOnScroll";
import SplitReveal from "./SplitReveal";
import MissionArt from "./MissionArt";
import { ArrowRight } from "./Icons";

// Slide 1 is the real profile photo. Slides 2–3 are abstract "how I work"
// illustrations (research, iteration) — deliberately not project
// screenshots, since actual work already has its own section (Karya).
const MISSION_SLIDES = [
  { type: "photo", src: "/tentang-3.jpeg", x: "50%", y: "22%", zoom: 1.12 },
  { type: "art", variant: "research", accent: "teal" },
  { type: "art", variant: "process", accent: "violet" },
];

const ART_LABELS = {
  research: { id: "Riset & Discovery", en: "Research & Discovery" },
  process: { id: "Proses Iteratif", en: "Iterative Process" },
};

export default function About() {
  const { about, projects, experience } = useContent();
  const { lang } = useLanguage();
  const trackRef = useRef(null);

  const stats = [
    { value: projects.list.length, label: about.statLabels.projects },
    { value: experience.internships.length, label: about.statLabels.internships },
    { value: experience.organizations.length, label: about.statLabels.organizations },
  ];

  const next = () => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    track.scrollTo({
      left: atEnd ? 0 : track.scrollLeft + track.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="section mission">
      <div className="mission__grid">
        <div className="mission__copy">
          <AnimateOnScroll>
            <span className="label">[ {about.sectionLabel} ]</span>
          </AnimateOnScroll>
          <SplitReveal
            as="h2"
            className="mission__title"
            text={about.sectionTitle}
          />
          <AnimateOnScroll delay={120}>
            <div className="mission__rule" />
            <p className="mission__text">{about.description}</p>
            <p className="mission__text mission__text--dim">{about.secondary}</p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mission__media" delay={100} variant="left">
          <button
            type="button"
            className="arrow-box mission__next"
            onClick={next}
            aria-label="Next"
          >
            <ArrowRight size={16} />
          </button>
          <div className="mission__track" ref={trackRef}>
            {MISSION_SLIDES.map((s, i) => (
              <figure className="mission__slide" key={i}>
                {s.type === "photo" ? (
                  <img
                    src={s.src}
                    alt={about.photoAlt}
                    loading="lazy"
                    draggable="false"
                    style={{ "--zoom": s.zoom, objectPosition: `${s.x} ${s.y}` }}
                  />
                ) : (
                  <MissionArt
                    variant={s.variant}
                    accent={s.accent}
                    label={ART_LABELS[s.variant]?.[lang]}
                  />
                )}
              </figure>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      <div className="stats">
        {stats.map((s) => (
          <AnimateOnScroll className="stat" key={s.label} variant="up">
            <span className="stat__value">{s.value}</span>
            <span className="stat__label">{s.label}</span>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
