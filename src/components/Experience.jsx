import { useRef, useState } from "react";
import { useContent } from "../context/LanguageContext";
import AnimateOnScroll from "./AnimateOnScroll";
import CertificateModal from "./CertificateModal";
import SplitReveal from "./SplitReveal";
import { ArrowLeft, ArrowRight } from "./Icons";

export default function Experience() {
  const { experience } = useContent();
  const [activeTab, setActiveTab] = useState("internships");
  const [activeCertificate, setActiveCertificate] = useState(null);
  const trackRef = useRef(null);

  const items = experience[activeTab];

  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth * 0.8 * dir;
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="experience" className="section experience">
      <div className="experience__inner">
        <AnimateOnScroll>
          <div className="experience__header">
            <div>
              <span className="label">[ {experience.sectionLabel} ]</span>
              <SplitReveal
                as="h2"
                className="experience__title"
                text={experience.sectionTitle}
              />
            </div>

            <div className="experience__nav">
              <button
                type="button"
                className="experience__arrow"
                onClick={() => scrollBy(-1)}
                aria-label={experience.prevLabel}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                className="experience__arrow"
                onClick={() => scrollBy(1)}
                aria-label={experience.nextLabel}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={80}>
          <div className="experience__tabs">
            {experience.tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`experience__tab ${
                  activeTab === tab.key ? "experience__tab--active" : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="experience__track" ref={trackRef}>
          {items.map((item, i) => (
            <AnimateOnScroll
              key={item.id}
              delay={i * 90}
              className="experience__card"
            >
              <span className="experience__card-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="experience__period">{item.period}</span>
              <h4>{item.role}</h4>
              <p className="experience__org">{item.org}</p>
              <ul>
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              {(item.certificate || item.certificates?.length > 0) && (
                <button
                  type="button"
                  className="experience__cert-btn"
                  onClick={() => setActiveCertificate(item)}
                >
                  {experience.viewCertificateLabel}
                </button>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <CertificateModal
        item={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </section>
  );
}
