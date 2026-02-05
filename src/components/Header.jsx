import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { t, toggleLanguage } = useLanguage();

  return (
    <header className="animate">
      <nav className="container nav">
        <div className="title">
          <a href="#Home">{t.title}</a>
        </div>
        <div className="links">
          <a href="#Home">{t.home}</a>
          <a href="#About">{t.about}</a>
          <a href="#Skills">{t.skills}</a>
          <a href="#Projects">{t.projects}</a>
          <a href="#Contact">{t.contact}</a>
        </div>
        <div className="icons">
          <button id="chang-lang" onClick={toggleLanguage}>
            {t.languageBtn}
          </button>
        </div>
      </nav>
    </header>
  );
}