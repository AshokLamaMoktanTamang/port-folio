import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Objective" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "professional-development", label: "Professional" },
    { id: "work-projects", label: "Work Projects" },
    { id: "personal-projects", label: "Personal" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-[#0b1120]/98 backdrop-blur-xl border-b border-slate-800 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between font-sans">
        <a
          href="#home"
          className="text-white font-bold tracking-widest text-lg hover:text-teal-400 transition-colors z-50 border-2 border-transparent"
        >
          AL<span className="text-teal-400">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[9px] uppercase tracking-[0.2em] font-black transition-all ${
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
            className="flex items-center gap-2 px-4 py-1.5 bg-teal-500 text-white rounded text-[10px] uppercase tracking-widest font-black hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/20"
          >
            <Download size={12} />
            CV
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-4 z-50">
          <a
            href="/Ashok_Lama.pdf"
            download
            className="p-2 text-teal-400 hover:text-white transition-colors"
          >
            <Download size={20} />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-300 hover:text-white transition-colors bg-slate-800/50 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-[#070b14] lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
          style={{ top: "0" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />

          <div className="flex flex-col items-center justify-center h-[100vh] gap-6 px-8 relative z-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[13px] uppercase tracking-[0.35em] font-black transition-all py-2 w-full text-center ${
                  activeSection === item.id ? "text-teal-400" : "text-slate-300"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="w-16 h-px bg-slate-800 my-4" />
            <a
              href="/Ashok_Lama.pdf"
              download
              className="flex items-center gap-3 px-8 py-4 bg-teal-500 text-white rounded-xl text-xs uppercase tracking-widest font-black hover:bg-teal-600 transition-all w-full justify-center shadow-2xl shadow-teal-500/20"
            >
              <Download size={18} />
              Download Full CV
            </a>
            <div className="absolute inset-0 bg-black before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md z-[-1]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
