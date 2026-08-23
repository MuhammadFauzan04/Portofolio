import { createContext, useContext, useEffect, useState } from "react";
import { content } from "../data/portfolio";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return "id";
  const saved = window.localStorage.getItem("lang");
  if (saved === "id" || saved === "en") return saved;
  // Fall back to the visitor's browser language when nothing is saved yet.
  const browserLang = window.navigator.language?.toLowerCase() || "";
  return browserLang.startsWith("id") ? "id" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === "id" ? "en" : "id"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

// Convenience hook: returns the full content tree already resolved to the
// current language, so components can destructure sections the same way
// they did when `portfolio.js` exported flat, single-language objects.
export function useContent() {
  const { lang } = useLanguage();
  return content[lang];
}
