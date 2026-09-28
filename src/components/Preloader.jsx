import { useEffect, useRef, useState } from "react";
import { useContent } from "../context/LanguageContext";
import Logo3DF from "./Logo3DF";

const MIN_SHOW = 3000; // ms, so the throw-in + a few turns are always seen
const MAX_WAIT = 10000; // ms, fail-safe: never keep the splash forever
const EXIT_DURATION = 650; // ms, must match the CSS exit transition below

export default function Preloader({ onFinish }) {
  const { ui } = useContent();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);
  const logoRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("is-loading");
    let cancelled = false;
    let raf;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finish = async () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setProgress(100);
      // let the 3D logo stop facing front before the overlay fades out
      if (!prefersReduced) await logoRef.current?.finish();
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

    // The logo keeps spinning until the site is really ready: window "load"
    // (all images/styles) + web fonts, with a minimum on-screen time.
    const pageLoaded = new Promise((res) => {
      if (document.readyState === "complete") res();
      else window.addEventListener("load", res, { once: true });
    });
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const minTime = new Promise((res) => setTimeout(res, MIN_SHOW));
    const maxTime = new Promise((res) => setTimeout(res, MAX_WAIT));

    Promise.race([Promise.all([pageLoaded, fontsReady, minTime]), maxTime]).then(
      () => {
        if (!cancelled) finish();
      }
    );

    // Progress creeps toward 92% while waiting; 100% is set on finish().
    const start = performance.now();
    const tick = (now) => {
      if (finishedRef.current) return;
      const t = Math.min((now - start) / (MIN_SHOW * 1.2), 1);
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 92));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      document.body.classList.remove("is-loading");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  return (
    <div
      className={`preloader ${exiting ? "preloader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={ui.loadingPage(progress)}
    >
      <Logo3DF ref={logoRef} />
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
