import { skills } from "../data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";
import SparkleAccent from "./SparkleAccent";

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
  return (
    <section id="skills" className="section skills">
      <SparkleAccent size={44} top="6%" right="6%" variant="glow" duration={9} delay={2} />
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Kemampuan</span>
            <h2 className="section__title">Skill yang saya kuasai</h2>
          </div>
        </AnimateOnScroll>

        <div className="skill-row">
          {skills.items.map((item, i) => (
            <AnimateOnScroll key={item} delay={i * 40}>
              <span className="skill-chip">{item}</span>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="process">
          <AnimateOnScroll>
            <div className="section__header process__header">
              <span className="section__label">Pendekatan</span>
              <h3 className="section__title section__title--sm">
                Proses kerja saya
              </h3>
            </div>
          </AnimateOnScroll>

          <div className="process__flow">
            <ProcessConnectors count={skills.process.length} />

            <div className="process__grid">
              {skills.process.map((step, i) => (
                <AnimateOnScroll
                  key={step.num}
                  delay={i * 100}
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
