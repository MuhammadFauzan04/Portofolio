import { useEffect, useMemo, useRef, useState } from "react";
import { hero } from "../data/portfolio";
import HeroIdCard from "./HeroIdCard";
import { gsap, prefersReducedMotion } from "../lib/gsap";

const STAR_COLORS = ["#60a5fa", "#67e8f9", "#bfdbfe"];
const ROLES = [
  "UI/UX Designer",
  "Sistem Informasi",
  "User-Centered Design",
  "Frontend Enthusiast",
];

// Splits a phrase around the first letter of a target word, so that letter
// can be styled separately (e.g. as a script-font accent) while the rest
// of the phrase keeps its normal styling.
function splitAccentLetter(text, word) {
  const idx = text.indexOf(word);
  if (idx === -1) {
    return { before: text, letter: "", after: "" };
  }
  return {
    before: text.slice(0, idx),
    letter: text.charAt(idx).toUpperCase(),
    after: text.slice(idx + 1),
  };
}

// Renders a decorative script-font letter that visually overlays the normal
// letter it replaces, without affecting text flow/wrapping. The "ghost"
// span reserves the exact width/position a normal letter would take (kept
// invisible), and the script glyph is absolutely positioned on top of it —
// so it can be drawn larger and spill over neighboring letters without ever
// pushing the rest of the line around.
function ScriptLetter({ char }) {
  return (
    <span className="hero__title-letter">
      <span className="hero__title-letter__ghost" aria-hidden="true">
        {char}
      </span>
      <span className="hero__title-script">{char}</span>
    </span>
  );
}

// Keeps the hero title locked to exactly 2 lines. Each line is forced to
// nowrap via CSS; this hook measures whether either line's natural width
// exceeds the available space and, if so, shrinks the title's font-size
// (as a plain px override) until both lines fit — rather than letting the
// browser wrap a line and push the heading to 3+ lines.
function useFitTitle(titleRef, deps = []) {
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const fit = () => {
      const container = el.parentElement;
      if (!container) return;

      // Reset to the CSS-defined size before measuring, so we always
      // scale down from the "natural" size rather than compounding a
      // previous shrink.
      el.style.fontSize = "";
      const baseSize = parseFloat(window.getComputedStyle(el).fontSize);
      const containerWidth = container.clientWidth;

      const lines = el.querySelectorAll(
        ".hero__title-line1, .hero__title-line2"
      );

      let scale = 1;
      lines.forEach((line) => {
        const width = line.scrollWidth;
        if (width > containerWidth) {
          scale = Math.min(scale, containerWidth / width);
        }
      });

      if (scale < 1) {
        // Small safety margin so the line doesn't sit flush against the edge.
        el.style.fontSize = `${baseSize * scale * 0.97}px`;
      }
    };

    fit();
    window.addEventListener("resize", fit);

    // Re-fit once web fonts finish loading, since swapped fonts can change
    // line width after the initial measurement.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit);
    }

    return () => window.removeEventListener("resize", fit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function useLocalTime(timeZone) {
  const [time, setTime] = useState(() =>
    new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone,
    }).format(new Date())
  );

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}

function useTypewriter(words, { typeSpeed = 55, deleteSpeed = 30, pause = 1600 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setText(words[0]);
      return;
    }

    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    } else {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(
        () => setText(next),
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const starsRef = useRef(null);
  const orbA = useRef(null);
  const orbB = useRef(null);
  const titleRef = useRef(null);
  const typedRole = useTypewriter(ROLES);
  const localTime = useLocalTime("Asia/Makassar");
  const accentGrad = useMemo(
    () => splitAccentLetter(hero.titleLineGrad, "Berpusat"),
    []
  );

  useFitTitle(titleRef, [hero.titleLine1, hero.titleLineGrad]);

  const stars = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1.2 + 0.8,
      delay: Math.random() * 6,
      duration: Math.random() * 3 + 3,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let mouseX = 0,
      mouseY = 0,
      curX = 0,
      curY = 0,
      frame;

    const onMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.04;
      curY += (mouseY - curY) * 0.04;
      if (orbA.current) {
        orbA.current.style.marginLeft = `${curX * 0.6}px`;
        orbA.current.style.marginTop = `${curY * 0.6}px`;
      }
      if (orbB.current) {
        orbB.current.style.marginLeft = `${curX * -0.4}px`;
        orbB.current.style.marginTop = `${curY * -0.4}px`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Scroll-scrubbed depth parallax: the two orbs and the starfield drift at
  // different speeds as the hero scrolls out of view, giving the section a
  // sense of depth rather than moving as one flat layer.
  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(orbA.current, {
        y: 140,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
      gsap.to(orbB.current, {
        y: 220,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
      gsap.to(starsRef.current, {
        y: 80,
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__orb-field">
        <div className="orb orb--a" ref={orbA} />
        <div className="orb orb--b" ref={orbB} />
        <div className="hero__stars">
          {stars.map((s) => (
            <span
              key={s.id}
              className="star"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                background: s.color,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      <HeroIdCard />

      <div className="hero-corner" aria-hidden="true">
        <span className="hero-corner__pin">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        <div className="hero-corner__info">
          <span className="hero-corner__city">Makassar, Indonesia</span>
          <span className="hero-corner__time">
            <span className="hero-corner__dot" />
            {localTime} WITA — waktu setempat
          </span>
        </div>
      </div>

      <div className="hero__eyebrow">
        <span className="hero__eyebrow-dot" />
        {hero.eyebrow}
      </div>

      <h1 className="hero__title" ref={titleRef}>
        <span className="hero__title-line1">
          <ScriptLetter char={hero.titleLine1.charAt(0).toUpperCase()} />
          {hero.titleLine1.slice(1)}
        </span>
        <br />
        <span className="hero__title-line2">
          {accentGrad.before}
          <ScriptLetter char={accentGrad.letter} />
          {accentGrad.after}
        </span>
      </h1>

      <p className="hero__role">
        <span className="hero__role-label">Fokus saat ini:</span>{" "}
        <span className="hero__role-typed">
          {typedRole}
          <span className="hero__role-caret" aria-hidden="true" />
        </span>
      </p>

      <p className="hero__subtitle">{hero.subtitle}</p>

      <div className="hero__cta">
        <a href={hero.ctaPrimary.href} className="btn btn--primary">
          {hero.ctaPrimary.label}
        </a>
        <a href={hero.ctaGhost.href} className="btn btn--ghost">
          {hero.ctaGhost.label}
        </a>
      </div>

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-hint__line" />
      </div>
    </section>
  );
}