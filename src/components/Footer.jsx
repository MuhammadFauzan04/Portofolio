import { useContent } from "../context/LanguageContext";

export default function Footer() {
  const { footer } = useContent();
  return (
    <footer className="footer">
      <div className="container">{footer.text}</div>
    </footer>
  );
}
