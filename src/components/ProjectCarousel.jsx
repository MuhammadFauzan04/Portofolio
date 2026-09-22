import { useState } from "react";
import { useContent } from "../context/LanguageContext";
import { ArrowLeft, ArrowRight } from "./Icons";

// Manual carousel: the user drives it with the arrows or the dots, nothing
// advances on its own.
export default function ProjectCarousel({ images = [] }) {
  const { ui } = useContent();
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const go = (delta) =>
    setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <div className="carousel">
      <div className="carousel__track">
        {images.map((src, i) => (
          <div
            key={src}
            className={`carousel__slide ${
              i === index ? "carousel__slide--active" : ""
            }`}
          >
            <img
              src={src}
              alt={`${ui.previewLabel} ${i + 1}`}
              className="carousel__image"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--prev"
              onClick={() => go(-1)}
              aria-label={ui.prevLabel || "Previous"}
            >
              <ArrowLeft size={15} />
            </button>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--next"
              onClick={() => go(1)}
              aria-label={ui.nextLabel || "Next"}
            >
              <ArrowRight size={15} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel__foot">
          <div className="carousel__dots">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`carousel__dot ${
                  i === index ? "carousel__dot--active" : ""
                }`}
                aria-label={`${ui.slideLabel} ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <span className="carousel__count">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
