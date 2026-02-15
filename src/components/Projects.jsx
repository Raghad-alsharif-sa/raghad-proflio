import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="Projects animate" id="Projects">
      <h1>{t.projectsTitle}</h1>

      <div className="projects_box">
        <div className="text">
          <h3>{t.project1Title}</h3>
          <p>{t.project1Desc}</p>
        </div>
      </div>

      <div className="projects_box">
        <div className="text">
          <h3>{t.project2Title}</h3>
          <p>{t.project2Desc}</p>
        </div>
      </div>

      <div className="projects_box">
        <div className="text">
          <h3>{t.project3Title}</h3>
          <p>{t.project3Desc}</p>
        </div>
      </div>
    </section>
  );
}
