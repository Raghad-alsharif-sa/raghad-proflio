import { useLanguage } from "../context/LanguageContext";
import AboutImg from "../assets/About.jpg"; 

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="About animate" id="About">
    
      <div className="box">
        <h1>{t.aboutTitle}</h1>
        <p>{t.aboutText}</p>
      </div>

     
      <div className="about-image-wrapper">
        <div className="about-image-bg"></div>
        <img src={AboutImg} alt="About" className="about-image" />
      </div>
    </section>
  );
}
