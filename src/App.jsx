import { useEffect, useState } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function Header() {
  const { t, toggleLanguage } = useLanguage();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "dark" ? "" : "light-mode";
  }, [theme]);

  return (
    <header>
      <div className="container">
        <div className="title">
          <a href="#Home">{t.heroName}</a>
        </div>

        <nav>
          <div className="links">
            <a href="#Home">{t.home}</a>
            <a href="#About">{t.about}</a>
            <a href="#Skills">{t.skills}</a>
            <a href="#Projects">{t.projects}</a>
            <a href="#Contact">{t.contact}</a>
          </div>
        </nav>

        <div className="icons">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <button onClick={toggleLanguage}>
            {t.languageBtn}
          </button>
        </div>
      </div>
    </header>
  );
}

function MainApp() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate");
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
