import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="Skills animate" id="Skills">
      <h1>{t.skillsTitle}</h1>

      <div className="cards">
        <div className="skill-card">
          <h4>HTML</h4>
        </div>

        <div className="skill-card">
          <h4>CSS</h4>
        </div>

        <div className="skill-card">
          <h4>JavaScript</h4>
        </div>

        <div className="skill-card">
          <h4>React</h4>
        </div>

        <div className="skill-card">
          <h4>MySQL</h4>
        </div>
      </div>
    </section>
  );
}
