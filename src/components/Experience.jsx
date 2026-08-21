import { useMemo, useRef, useState } from "react";
import { experience } from "../data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";
import CertificateModal from "./CertificateModal";
import SplitReveal from "./SplitReveal";

const TABS = [
  { key: "internships", label: "Magang & Kerja" },
  { key: "certifications", label: "Sertifikasi & Pelatihan" },
  { key: "organizations", label: "Organisasi" },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("internships");
  const [activeCertificate, setActiveCertificate] = useState(null);
  const trackRef = useRef(null);

  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 3,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 10,
      drift: (Math.random() - 0.5) * 60,
    }));
  }, []);

  const items = experience[activeTab];

  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth * 0.8 * dir;
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="experience" className="section experience">
      <div className="experience__bg">
        <div className="experience__blob experience__blob--a" />
        <div className="experience__blob experience__blob--b" />
        <div className="experience__particles">
          {particles.map((p) => (
            <span
              key={p.id}
              className="experience__particle"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                "--drift": `${p.drift}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <AnimateOnScroll>
          <div className="section__header experience__header">
            <div>
              <span className="section__label">Pengalaman</span>
              <SplitReveal
                as="h2"
                className="section__title"
                text="Perjalanan magang dan organisasi"
              />
            </div>

            <div className="experience__nav">
              <button
                type="button"
                className="experience__arrow"
                onClick={() => scrollBy(-1)}
                aria-label="Sebelumnya"
              >
                ←
              </button>
              <button
                type="button"
                className="experience__arrow"
                onClick={() => scrollBy(1)}
                aria-label="Selanjutnya"
              >
                →
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={80}>
          <div className="experience__tabs">
            {TABS.map((tab) => (
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
              {item.certificate && (
                <button
                  type="button"
                  className="experience__cert-btn"
                  onClick={() => setActiveCertificate(item)}
                >
                  Lihat Sertifikat
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