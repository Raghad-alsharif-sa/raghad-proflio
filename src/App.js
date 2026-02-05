import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import "./App.css";

function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "dark" ? "" : "lite-mode";
  }, [theme]);

  return (
    <header>
      <div className="container">
        <div className="title">
          <a href="#home">{lang === "EN" ? "Raghad" : "رغد"}</a>
        </div>
        <nav>
          <div className="links">
            <a href="#home">{lang === "EN" ? "Home" : "الرئيسية"}</a>
            <a href="#about">{lang === "EN" ? "About" : "عن رغد"}</a>
            <a href="#skills">{lang === "EN" ? "Skills" : "المهارات"}</a>
            <a href="#projects">{lang === "EN" ? "Projects" : "مشاريعي"}</a>
            <a href="#contact">{lang === "EN" ? "Contact" : "تواصل"}</a>
          </div>
        </nav>
        <div className="icons">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button onClick={toggleLanguage}>{lang}</button>
        </div>
      </div>
    </header>
  );
}

function App() {
  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const animates = document.querySelectorAll(".animate");
      animates.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("show");
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;