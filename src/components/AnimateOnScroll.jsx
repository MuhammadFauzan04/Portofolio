import useScrollReveal from "../hooks/useScrollReveal";

export default function AnimateOnScroll({ children, delay = 0, className = "" }) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
