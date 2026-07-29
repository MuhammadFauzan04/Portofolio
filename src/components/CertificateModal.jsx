import { useEffect, useState } from "react";

export default function CertificateModal({ item, onClose }) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content certificate-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Sertifikat magang di ${item.org}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          ✕
        </button>

        <div className="certificate-modal__image-wrap">
          {imgError ? (
            <div className="certificate-modal__placeholder">
              Sertifikat belum tersedia. Tambahkan file gambar ke folder{" "}
              <code>public/</code> dengan nama{" "}
              <code>{item.certificate?.replace(/^\//, "")}</code>.
            </div>
          ) : (
            <img
              src={item.certificate}
              alt={`Sertifikat magang - ${item.role} di ${item.org}`}
              className="certificate-modal__image"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <div className="certificate-modal__body">
          <span className="certificate-modal__label">Sertifikat Magang</span>
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
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-modal__link"
              >
                Buka di tab baru ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
