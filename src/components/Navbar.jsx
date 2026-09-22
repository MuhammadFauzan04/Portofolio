import { useEffect, useRef, useState } from "react";
import { useContent } from "../context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { LogoMark } from "./Icons";
import { gsap, prefersReducedMotion } from "../lib/gsap";

// Section ids that should be tracked for the scrollspy active-link
// indicator. "hero" is included so the logo/first link states feel right
// at the very top of the page, even though it has no matching nav link.
const SECTION_IDS = ["hero", "about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const { nav, ui } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight whichever section currently occupies the vertical
  // "reading band" of the viewport, rather than waiting for it to fully
  // enter/exit.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open, and animate the panel
  // + its links in with a short staggered entrance each time it opens.
  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);

    if (!menuOpen || !panelRef.current) return undefined;

    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power1.out" }
      );
      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          delay: 0.05,
        }
      );
    }, panelRef);

    return () => ctx.revert();
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const half = Math.ceil(nav.links.length / 2);
  const leftLinks = nav.links.slice(0, half);
  const rightLinks = nav.links.slice(half);

  const renderLink = (link) => (
    <a
      key={link.href}
      href={link.href}
      className={activeId === link.href.slice(1) ? "is-active" : ""}
    >
      {link.label}
    </a>
  );

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__links navbar__links--left">
          {leftLinks.map(renderLink)}
        </div>

        <a href="#hero" className="navbar__logo" onClick={closeMenu}>
          <LogoMark size={18} />
          {nav.brand}
        </a>

        <div className="navbar__side">
          <div className="navbar__links navbar__links--right">
            {rightLinks.map(renderLink)}
          </div>
          <div className="navbar__actions">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
              aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={panelRef}
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar__mobile-links">
          {nav.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={(el) => (linksRef.current[i] = el)}
              className={activeId === link.href.slice(1) ? "is-active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="btn btn--primary navbar__mobile-cta"
          onClick={closeMenu}
        >
          {ui.contactCtaArrow}
        </a>
      </div>
    </nav>
  );
}
