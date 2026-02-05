import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(t.title.slice(0, index + 1));
      index++;
      if (index === t.title.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [t.title]);

  return (
    <section className="Home animate" id="Home">
      <div className="div_Text">
        <h1>{displayed}</h1>
        <p>{t.description}</p>
      </div>
      <div className="btns">
        <a href="#Contact" className="btn">{t.viewWork}</a>
        <a href="/RAGHAD_CV.pdf" download className="btn_no_bg">{t.downloadCV}</a>
      </div>
    </section>
  );
}