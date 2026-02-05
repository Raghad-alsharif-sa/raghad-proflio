import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="animate">
      <div className="container">
        <div className="title2">
          <a href="#Home">{t.title}</a>
        </div>
        <div className="links2">
          <a href="#Home">{t.home}</a>
          <a href="#About">{t.about}</a>
          <a href="#Skills">{t.skills}</a>
          <a href="#Projects">{t.projects}</a>
          <a href="#Contact">{t.contact}</a>
        </div>
      </div>
      <div className="footer-span">
        <span>© 2026 Raghad Alsharif</span>
      </div>
    </footer>
  );
}