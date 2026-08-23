import { useEffect, useMemo, useState } from "react";
import { useContent } from "../context/LanguageContext";

export default function CertificateModal({ item, onClose }) {
  const { ui } = useContent();
  const [imgError, setImgError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = useMemo(() => {
    if (!item) return [];
    if (item.certificates?.length > 0) return item.certificates;
    if (item.certificate)
      return [{ label: ui.defaultCertificateLabel, image: item.certificate }];
    return [];
  }, [item, ui.defaultCertificateLabel]);

  const current = slides[activeIndex];

  useEffect(() => {
    setImgError(false);
    setActiveIndex(0);
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, onClose, slides.length]);

  if (!item || !current) return null;

  const goNext = () => {
    setImgError(false);
    setActiveIndex((i) => (i + 1) % slides.length);
  };
  const goPrev = () => {
    setImgError(false);
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content certificate-modal"
        role="dialog"
        aria-modal="true"
        aria-label={ui.certificateOf(item.role, item.org)}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label={ui.close}>
          ✕
        </button>

        <div className="certificate-modal__image-wrap">
          {slides.length > 1 && (
            <button
              type="button"
              className="certificate-modal__nav certificate-modal__nav--prev"
              onClick={goPrev}
              aria-label={ui.prevCertificate}
            >
              ‹
            </button>
          )}

          {imgError ? (
            <div className="certificate-modal__placeholder">
              {ui.certificateUnavailablePrefix} <code>public/</code>{" "}
              {ui.certificateUnavailableSuffix}{" "}
              <code>{current.image?.replace(/^\//, "")}</code>.
            </div>
          ) : (
            <img
              src={current.image}
              alt={`${current.label} - ${item.role} — ${item.org}`}
              className="certificate-modal__image"
              onError={() => setImgError(true)}
            />
          )}

          {slides.length > 1 && (
            <button
              type="button"
              className="certificate-modal__nav certificate-modal__nav--next"
              onClick={goNext}
              aria-label={ui.nextCertificate}
            >
              ›
            </button>
          )}
        </div>

        {slides.length > 1 && (
          <div className="certificate-modal__dots">
            {slides.map((slide, idx) => (
              <button
                key={slide.image}
                type="button"
                className={`certificate-modal__dot ${
                  idx === activeIndex ? "certificate-modal__dot--active" : ""
                }`}
                onClick={() => {
                  setImgError(false);
                  setActiveIndex(idx);
                }}
                aria-label={slide.label}
              />
            ))}
          </div>
        )}

        <div className="certificate-modal__body">
          <span className="certificate-modal__label">{current.label}</span>
          <div className="certificate-modal__meta">
            <h3>{item.role}</h3>
            <p>{item.org}</p>
            {item.period && (
              <span className="certificate-modal__period">{item.period}</span>
            )}
          </div>
          {!imgError && (
            <div className="certificate-modal__actions">
              <a
                href={current.image}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-modal__link"
              >
                {ui.openInNewTab}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
