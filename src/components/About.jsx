import { useContent } from "../context/LanguageContext";
import AnimateOnScroll from "./AnimateOnScroll";
import SplitReveal from "./SplitReveal";

export default function About() {
  const { about } = useContent();

  return (
    <section id="about" className="section about">
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">{about.sectionLabel}</span>
            <SplitReveal
              as="h2"
              className="section__title"
              text={about.sectionTitle}
            />
          </div>
        </AnimateOnScroll>

        <div className="about__grid">
        <AnimateOnScroll className="about__photo-wrap" variant="scale" duration={1.1}>
            <div className="about__blob about__blob--a" />
            <div className="about__blob about__blob--b" />

            <div className="about__photo-frame">
              <img
                src={about.photo}
                alt={about.photoAlt}
                className="about__photo"
              />
            </div>

            <span className="about__badge about__badge--1">
              <span className="about__badge-arrow about__badge-arrow--1" />
              {about.badges[0]}
            </span>
            <span className="about__badge about__badge--2">
              <span className="about__badge-arrow about__badge-arrow--2" />
              {about.badges[1]}
            </span>
            <span className="about__badge about__badge--3">
              <span className="about__badge-arrow about__badge-arrow--3" />
              {about.badges[2]}
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100} className="about__text" variant="right">
            <p>{about.description}</p>
            <p>{about.academic}</p>
            <p>{about.secondary}</p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
