import { createContext, useContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext(null);
const STRIP_COUNT = 14;
const MAX_DELAY = 300;
const MAX_DURATION = 1500;
const FADE_DELAY = MAX_DELAY + MAX_DURATION + 60; // ms, after the slowest drip lands
const FADE_DURATION = 500;
const CLEANUP_AFTER = FADE_DELAY + FADE_DURATION + 80;

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function makeDrips() {
  return Array.from({ length: STRIP_COUNT }, (_, i) => ({
    id: i,
    delay: Math.random() * MAX_DELAY,
    duration: MAX_DURATION - Math.random() * 500,
    radius: 40 + Math.random() * 40,
  }));
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [liquid, setLiquid] = useState(null); // { key, theme, drips } | null
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";

    // Apply the new theme immediately — the real colors fade in on their own
    // (see the shared CSS transitions). This liquid overlay is a purely
    // decorative, translucent tint dripping down on top, so the page
    // content is never hidden while it plays.
    setTheme(next);
    setLiquid({ key: Date.now(), theme: next, drips: makeDrips() });

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setLiquid(null), CLEANUP_AFTER);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {liquid && (
        <div
          key={liquid.key}
          className={`theme-liquid theme-liquid--${liquid.theme}`}
          style={{
            "--liquid-fade-delay": `${FADE_DELAY}ms`,
            "--liquid-fade-duration": `${FADE_DURATION}ms`,
          }}
          aria-hidden="true"
        >
          {liquid.drips.map((d) => (
            <span
              key={d.id}
              className="theme-liquid__drip"
              style={{
                left: `${(d.id / STRIP_COUNT) * 100}%`,
                width: `${100 / STRIP_COUNT + 0.6}%`,
                animationDelay: `${d.delay}ms`,
                animationDuration: `${d.duration}ms`,
                borderBottomLeftRadius: `${d.radius}% ${d.radius * 0.6}%`,
                borderBottomRightRadius: `${d.radius}% ${d.radius * 0.6}%`,
              }}
            />
          ))}
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
