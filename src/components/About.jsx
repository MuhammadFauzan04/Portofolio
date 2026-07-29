import { about } from "../data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";
import SparkleAccent from "./SparkleAccent";

export default function About() {
  return (
    <section id="about" className="section about">
      <SparkleAccent size={44} top="6%" right="6%" variant="glow" duration={9} delay={0} />
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Tentang</span>
            <h2 className="section__title">
              Desain yang lahir dari riset, bukan tebakan.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="about__grid">
        <AnimateOnScroll className="about__photo-wrap">
            <div className="about__blob about__blob--a" />
            <div className="about__blob about__blob--b" />

            <div className="about__photo-frame">
              <img
                src={about.photo}
                alt="Foto profil"
                className="about__photo"
              />
            </div>

            <span className="about__badge about__badge--1">
              <span className="about__badge-arrow about__badge-arrow--1" />
              UI/UX Designer
            </span>
            <span className="about__badge about__badge--2">
              <span className="about__badge-arrow about__badge-arrow--2" />
              User-Centered Design
            </span>
            <span className="about__badge about__badge--3">
              <span className="about__badge-arrow about__badge-arrow--3" />
              Sistem Informasi
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100} className="about__text">
            <p>{about.description}</p>
            <p>{about.academic}</p>
            <p>{about.secondary}</p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}