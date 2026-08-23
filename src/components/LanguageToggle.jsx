import { useContent, useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();
  const { ui } = useContent();

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label={ui.languageToggleLabel}
      title={ui.languageToggleLabel}
      data-lang={lang}
    >
      <span className="lang-toggle__globe" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9S9.6 5.6 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      </span>
      <span className="lang-toggle__track">
        <span className="lang-toggle__thumb" aria-hidden="true" />
        <span className="lang-toggle__option lang-toggle__option--id">ID</span>
        <span className="lang-toggle__option lang-toggle__option--en">EN</span>
      </span>
    </button>
  );
}
