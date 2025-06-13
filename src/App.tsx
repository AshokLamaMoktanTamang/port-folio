import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/ContactInfo";
import Footer from "./components/Footer";
import ProfessionalDevelopment from "./components/ProfessionalDevelopment";

function App() {
  // Track active section on scroll
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "experience",
      "professional-development",
      "contact",
    ];
    const handler = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = activeSection;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && el.offsetTop <= scrollPos) current = sec;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ProfessionalDevelopment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
