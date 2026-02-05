import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="Skills animate" id="Skills">
      <h1>{t.skillsTitle}</h1>
      <div className="cards">
        <div className="skill-card"><i className="fa-brands fa-html5"></i><h4>HTML</h4></div>
        <div className="skill-card"><i className="fa-brands fa-css3-alt"></i><h4>CSS</h4></div>
        <div className="skill-card"><i className="fa-brands fa-js"></i><h4>JavaScript</h4></div>
        <div className="skill-card"><i className="fa-brands fa-MySQL"></i><h4>MySQL</h4></div>
      </div>
    </section>
  );
}