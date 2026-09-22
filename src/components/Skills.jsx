import { useState } from "react";
import { useContent } from "../context/LanguageContext";
import AnimateOnScroll from "./AnimateOnScroll";
import SplitReveal from "./SplitReveal";
import { ArrowUpRight } from "./Icons";

export default function Skills() {
  const { skills, hero } = useContent();
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section services">
      <div className="services__head">
        <div>
          <AnimateOnScroll>
            <span className="label">[ {skills.sectionLabel} ]</span>
          </AnimateOnScroll>
          <SplitReveal
            as="h2"
            className="services__title"
            text={skills.sectionTitle}
          />
        </div>

        <AnimateOnScroll className="services__chips" delay={100}>
          {skills.items.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll className="services__sub">
        <span className="label">[ {skills.processLabel} ]</span>
        <h3>{skills.processTitle}</h3>
      </AnimateOnScroll>

      <ul className="service-list">
        {skills.process.map((step, i) => {
          const open = active === i;
          return (
            <li
              key={step.num}
              className={`service ${open ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
            >
              <button
                type="button"
                className="service__row"
                aria-expanded={open}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="service__num">{step.num}</span>
                <span className="service__title">{step.title}</span>
                <span className="service__desc">{step.desc}</span>
              </button>

              <div className="service__panel" aria-hidden={!open}>
                <div className="service__panel-inner">
                  <div className="service__preview">
                    {step.image && (
                      <img
                        src={step.image}
                        alt={step.title}
                        className="service__preview-img"
                      />
                    )}
                    <a
                      href="#projects"
                      className="arrow-circle service__go"
                      tabIndex={open ? 0 : -1}
                      aria-label={hero.ctaPrimary.label}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
