import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

// Each variant describes the "from" state; GSAP animates it back to the
// natural resting state (opacity 1 / no transform) when the element
// scrolls into view.
const VARIANTS = {
  up: { opacity: 0, y: 46 },
  down: { opacity: 0, y: -46 },
  scale: { opacity: 0, y: 24, scale: 0.88 },
  left: { opacity: 0, x: -56 },
  right: { opacity: 0, x: 56 },
  clip: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
};

export default function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  variant = "up",
  duration = 0.9,
  tag: Tag = "div",
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, clearProps: "transform,clipPath" });
      return;
    }

    const from = VARIANTS[variant] || VARIANTS.up;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        from,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          clipPath: "inset(0 0 0% 0)",
          duration,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 87%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, variant, duration]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
