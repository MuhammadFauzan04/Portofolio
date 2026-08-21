import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

// Splits a heading into words, each masked inside an overflow-hidden box,
// then reveals them with a staggered upward wipe as the heading scrolls
// into view — a much more "designed" reveal than a plain fade.
export default function SplitReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inners = el.querySelectorAll(".split-word__inner");

    if (prefersReducedMotion()) {
      gsap.set(inners, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.05,
          delay: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, delay]);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span className="split-word" key={i}>
          <span className="split-word__inner">{word}</span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
