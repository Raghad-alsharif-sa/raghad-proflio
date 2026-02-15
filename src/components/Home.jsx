import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed(t.heroName.slice(0, index + 1));
      index++;
      if (index === t.heroName.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [t.heroName]);

  return (
    <section className="Home animate" id="Home">
      <div className="div_Text">
        <h4>{t.heroHello}</h4>
        <h1>{displayed}</h1>
        <h2>{t.heroRole}</h2>
        <p>{t.heroWelcome}</p>
      </div>

      <div className="btns">
        <a href="#Projects" className="btn">
          {t.viewWork}
        </a>

        <a href="/Raghad ALshareef.pdf" download className="btn_no_bg">
          {t.downloadCV}
        </a>
      </div>
    </section>
  );
}
