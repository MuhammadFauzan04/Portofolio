import { useContent } from "../context/LanguageContext";
import AnimateOnScroll from "./AnimateOnScroll";
import { QuoteMark } from "./Icons";

// Four tiles under the quote. Put your own images in /public and reference
// them here — src is the path Vite serves from the public folder root.
const TILES = [
  { src: "/quote-1.jpeg", color: "#0fa596", zoom: 1.2, x: "50%", y: "30%" },
  { src: "/quote-2.jpeg", color: "#ff5b1f", zoom: 1.2, x: "50%", y: "30%" },
  { src: "/quote-3.jpeg", color: "#e23744", zoom: 1.2, x: "50%", y: "30%" },
  { src: "/quote-4.jpeg", color: "#3b82f6", zoom: 1.2, x: "50%", y: "30%" },
];

export default function Quote() {
  const { about } = useContent();

  return (
    <section id="quote" className="section quote">
      <AnimateOnScroll className="quote__inner">
        <div className="quote__avatars" aria-hidden="true">
          <span className="quote__mark">
            <QuoteMark size={16} />
          </span>
          <span className="quote__avatar">
            <img src="/profile-cutout.webp" alt="" loading="lazy" />
          </span>
        </div>
        <blockquote className="quote__text">{about.academic}</blockquote>
        <cite className="quote__cite">{about.author}</cite>
      </AnimateOnScroll>

      <div className="quote__strip">
        {TILES.map((t, i) => (
          <AnimateOnScroll
            key={i}
            className="quote__tile"
            variant="up"
            delay={i * 80}
          >
            <div className="quote__tile-bg" style={{ background: t.color }}>
              <img
                src={t.src}
                alt=""
                loading="lazy"
                draggable="false"
                style={{
                  "--zoom": t.zoom,
                  objectPosition: `${t.x} ${t.y}`,
                  transformOrigin: `${t.x} ${t.y}`,
                }}
              />
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
