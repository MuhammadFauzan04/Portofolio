import { useEffect, useRef, useState } from "react";
import { useContent } from "../context/LanguageContext";

const DURATION = 1700; // ms, simulated loading progress
const EXIT_DURATION = 650; // ms, must match the CSS exit transition below
const RING_RADIUS = 28;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export default function Preloader({ onFinish }) {
  const { ui } = useContent();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    document.body.classList.add("is-loading");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setProgress(100);
      setExiting(true);
      setTimeout(() => {
        setDone(true);
        document.body.classList.remove("is-loading");
        onFinish?.();
      }, EXIT_DURATION);
    };

    if (prefersReduced) {
      finish();
      return () => document.body.classList.remove("is-loading");
    }

    let raf;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("is-loading");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  const dashOffset =
    RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * progress) / 100;

  return (
    <div
      className={`preloader ${exiting ? "preloader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={ui.loadingPage(progress)}
    >
      <div className="preloader__mark">
        <span className="preloader__letter">F</span>
        <svg className="preloader__ring" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="preloaderRingGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--blue-1)" />
              <stop offset="100%" stopColor="var(--blue-2)" />
            </linearGradient>
          </defs>
          <circle className="preloader__ring-track" cx="32" cy="32" r={RING_RADIUS} />
          <circle
            className="preloader__ring-fill"
            cx="32"
            cy="32"
            r={RING_RADIUS}
            style={{
              strokeDasharray: RING_CIRCUMFERENCE,
              strokeDashoffset: dashOffset,
            }}
          />
        </svg>
      </div>
      <div className="preloader__bar">
        <div className="preloader__bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="preloader__label">
        <span>{ui.preparingExperience}</span>
        <span className="preloader__percent">{progress}%</span>
      </div>
    </div>
  );
}
