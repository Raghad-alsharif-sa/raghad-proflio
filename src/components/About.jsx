import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="About animate" id="About">
      <h1>{t.aboutTitle}</h1>
      <div className="container">
        <div className="div_Text">
          <h3>{t.aboutTitle}</h3>
          <p>{t.aboutText}</p>
        </div>
        <img className="img-About" src="img\profile.jpg" alt="Raghad" />
      </div>
    </section>
  );
}