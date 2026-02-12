import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProfessionalDevelopment from "./components/ProfessionalDevelopment";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] selection:bg-teal-500/30 font-sans pb-20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <ProfessionalDevelopment />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
