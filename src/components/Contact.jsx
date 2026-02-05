import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="Contact animate" id="Contact">
      <h1>{t.contactTitle}</h1>

      <div className="contanier">
        {/* معلومات التواصل */}
        <div className="info">
          <h2>{t.contactTitle}</h2>

          <div className="link-info">
            {/* ايميل */}
            <a href="mailto:raghad.alsharif.sa@gmail.com">
              {t.contactEmail}
            </a>

            {/* جوال */}
            <a href="tel:+966533091077">
              +966533091077
            </a>

           

            {/* GitHub */}
            <a
              href="https://github.com/Raghad-alsharif-sa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub /> GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/raghad-alsharif-07141b389"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* الفورم */}
        <div className="form">
          <form>
            <div className="inputs_form">
              <input
                type="text"
                placeholder={t.contactName}
                required
              />
              <input
                type="email"
                placeholder={t.contactEmail}
                required
              />
              <textarea
                placeholder={t.contactMessage}
                required
              ></textarea>
            </div>

            <button type="submit" className="btnn">
              {t.contactSend}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}