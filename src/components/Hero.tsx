import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-teal-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 animate-slide-up">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-teal-600 font-semibold mb-6 animate-slide-up animation-delay-200">
            {personalInfo.title}
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up animation-delay-400">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up animation-delay-600">
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Contact Me
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-all hover:shadow-lg hover:scale-105"
            >
              View Projects
            </button>
            <a
              href="/cv"
              download
              className="px-8 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-slide-up animation-delay-800">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-teal-600"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-teal-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all text-slate-700 hover:text-teal-600"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
