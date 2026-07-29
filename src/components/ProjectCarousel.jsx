import { useEffect, useState } from "react";

const INTERVAL_MS = 3500;

export default function ProjectCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

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
            <img src={src} alt={`Preview ${i + 1}`} className="carousel__image" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="carousel__dots">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`carousel__dot ${
                i === index ? "carousel__dot--active" : ""
              }`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}