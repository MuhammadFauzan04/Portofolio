import { useLayoutEffect, useRef } from "react";
import { skills } from "../data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";
import SplitReveal from "./SplitReveal";
import { gsap, prefersReducedMotion } from "../lib/gsap";

function ProcessConnectors({ count }) {
  const width = 1000;
  const segment = width / count;
  const centers = Array.from({ length: count }, (_, i) => segment * (i + 0.5));

  return (
    <svg
      className="process__connectors"
      viewBox="0 0 1000 260"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {centers.slice(0, -1).map((x1, i) => {
        const x2 = centers[i + 1];
        const up = i % 2 === 0;
        const y = up ? 78 : 182;
        const cy = up ? 6 : 254;
        const midX = (x1 + x2) / 2;
        return (
          <g className="process__connector" key={`${x1}-${x2}`}>
            <path d={`M ${x1} ${y} Q ${midX} ${cy} ${x2} ${y}`} />
            <circle cx={x1} cy={y} r="6" />
            <circle cx={x2} cy={y} r="6" />
          </g>
        );
      })}
    </svg>
  );
}

export default function Skills() {
  const flowRef = useRef(null);

  // Draws each connector line (and pops its endpoint dots) progressively as
  // the process flow scrolls through the viewport, tying the animation
  // directly to scroll position rather than just fading in.
  useLayoutEffect(() => {
    const flow = flowRef.current;
    if (!flow) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const connectors = flow.querySelectorAll(".process__connector");
      connectors.forEach((g, i) => {
        const path = g.querySelector("path");
        const dots = g.querySelectorAll("circle");
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.set(dots, { scale: 0, transformOrigin: "center" });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: flow,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        });
        gsap.to(dots, {
          scale: 1,
          duration: 0.3,
          delay: i * 0.05,
          scrollTrigger: {
            trigger: flow,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, flow);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Kemampuan</span>
            <SplitReveal
              as="h2"
              className="section__title"
              text="Skill yang saya kuasai"
            />
          </div>
        </AnimateOnScroll>

        <div className="skill-row">
          {skills.items.map((item, i) => (
            <AnimateOnScroll key={item} delay={i * 40} variant="scale" duration={0.6}>
              <span className="skill-chip">{item}</span>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="process">
          <AnimateOnScroll>
            <div className="section__header process__header">
              <span className="section__label">Pendekatan</span>
              <SplitReveal
                as="h3"
                className="section__title section__title--sm"
                text="Proses kerja saya"
              />
            </div>
          </AnimateOnScroll>

          <div className="process__flow" ref={flowRef}>
            <ProcessConnectors count={skills.process.length} />

            <div className="process__grid">
              {skills.process.map((step, i) => (
                <AnimateOnScroll
                  key={step.num}
                  delay={i * 100}
                  variant="scale"
                  className="process__card-slot"
                >
                  <div className="process__card">
                    <span className="process__num">{step.num}</span>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
