import { contact } from "../data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";
import SparkleAccent from "./SparkleAccent";

const ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.15 3.5 3.25 4.4 3.25 5.5C3.25 6.6 4.15 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.4 6.35 3.5 5.25 3.5ZM20.5 20.5H17.13V14.6C17.13 13.2 16.6 12.35 15.38 12.35C14.16 12.35 13.53 13.17 13.53 14.6V20.5H10.16V8.5H13.53V10.06C13.53 10.06 14.51 8.28 16.79 8.28C19.07 8.28 20.5 9.69 20.5 12.87V20.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.2C2 16.68 4.87 20.47 8.84 21.8C9.34 21.89 9.52 21.58 9.52 21.3C9.52 21.06 9.51 20.32 9.51 19.44C6.73 20.04 6.14 18.14 6.14 18.14C5.68 16.96 5.03 16.65 5.03 16.65C4.12 16.02 5.1 16.03 5.1 16.03C6.1 16.1 6.63 17.07 6.63 17.07C7.5 18.6 8.93 18.16 9.49 17.9C9.58 17.25 9.83 16.81 10.11 16.56C7.89 16.31 5.55 15.44 5.55 11.56C5.55 10.44 5.95 9.53 6.6 8.81C6.49 8.56 6.14 7.51 6.7 6.11C6.7 6.11 7.55 5.83 9.5 7.16C10.32 6.93 11.19 6.81 12.06 6.81C12.93 6.81 13.81 6.93 14.62 7.16C16.57 5.83 17.42 6.11 17.42 6.11C17.98 7.51 17.63 8.56 17.52 8.81C18.18 9.53 18.57 10.44 18.57 11.56C18.57 15.45 16.23 16.31 14 16.55C14.36 16.86 14.68 17.46 14.68 18.38C14.68 19.69 14.67 20.96 14.67 21.3C14.67 21.58 14.85 21.9 15.36 21.8C19.33 20.47 22.19 16.68 22.19 12.2C22.19 6.58 17.71 2 12.19 2H12Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SparkleAccent size={44} top="6%" right="6%" variant="glow" duration={9} delay={6} />
      <div className="container">
        <AnimateOnScroll className="contact-box">
          <div className="contact-box__spotlight" />
          <div className="contact-box__spotlight-core" />

          <div className="contact-box__inner">
            <div className="contact-box__text">
              <h2>{contact.title}</h2>
              <p>{contact.desc}</p>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Kirim Email →
              </a>
            </div>

            <div className="contact-box__divider" />

            <div className="contact-box__socials">
              {contact.socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label={s.label}
                >
                  {ICONS[s.key]}
                </a>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
