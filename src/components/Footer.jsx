import { useContent } from "../context/LanguageContext";

export default function Footer() {
  const { footer } = useContent();
  return (
    <footer className="footer">
      <div className="footer__inner">{footer.text}</div>
    </footer>
  );
}
