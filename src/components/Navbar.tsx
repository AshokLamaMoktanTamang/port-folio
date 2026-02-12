import { Download } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "skills",
        "work-projects",
        "personal-projects",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 py-3" : "bg-transparent py-6"}`}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between font-sans">
        <a
          href="#home"
          className="text-white font-bold tracking-widest text-lg hover:text-teal-400 transition-colors"
        >
          AL<span className="text-teal-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "Objective" },
            { id: "experience", label: "Work" },
            { id: "skills", label: "Skills" },
            { id: "work-projects", label: "Work Projects" },
            { id: "personal-projects", label: "Personal" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[10px] uppercase tracking-[0.15em] font-bold transition-all ${
                activeSection === item.id
                  ? "text-teal-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/Ashok_Lama.pdf"
            download
            className="flex items-center gap-2 px-4 py-1.5 bg-teal-500 text-white rounded text-[10px] uppercase tracking-widest font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/20"
          >
            <Download size={12} />
            CV
          </a>
        </div>

        <a
          href="/Ashok_Lama.pdf"
          download
          className="md:hidden p-2 text-teal-400 hover:text-teal-300 transition-colors"
        >
          <Download size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
