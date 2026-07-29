import { useEffect, useState } from "react";
import { nav } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-dot" />
          {nav.brand}
        </a>
        <div className="navbar__links">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="navbar__actions">
          <ThemeToggle />
          <a href="#contact" className="navbar__cta">
            Hubungi Saya
          </a>
        </div>
      </div>
    </nav>
  );
}
