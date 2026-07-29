import { footer } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">{footer.text}</div>
    </footer>
  );
}
