import { useContent } from "../context/LanguageContext";

// Infinite skill ticker. The list is rendered twice and the track slides
// exactly -50%, so the loop is seamless. Pauses on hover.
export default function Marquee() {
  const { skills } = useContent();
  const items = skills.items;

  const row = (hidden) => (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((label) => (
        <li key={label} className="marquee__item">
          <span>{label}</span>
          <i className="marquee__star" aria-hidden="true">✦</i>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" role="region" aria-label={skills.sectionTitle}>
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
