import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="Contact animate" id="Contact">
      <h1>{t.contactTitle}</h1>

      <div className="contanier">
        <div className="info">
          <div className="link-info">
            <a
              href="mailto:raghad.alsharif.sa@gmail.com"
              className="social-link"
            >
              <FaEnvelope /> Email
            </a>

            <a
              href="https://github.com/Raghad-alsharif-sa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub /> GitHub
            </a>

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

        <div className="form">
          <form>
            <div className="inputs_form">
              <input type="text" placeholder={t.contactName} required />
              <input type="email" placeholder={t.contactEmail} required />
              <textarea placeholder={t.contactMessage} required></textarea>
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
