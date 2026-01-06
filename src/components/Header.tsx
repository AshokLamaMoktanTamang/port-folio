import React, { useState, useEffect } from "react";
import avatar from "@/assets/images/me.jpeg";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderProps {
  activeSection: string;
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#professional-development", label: "Professional Development" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo / Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative">
            <img
              src={avatar}
              alt="Ashok Lama"
              className="w-10 h-10 rounded-full border-2 border-accent shadow-md group-hover:shadow-accent/50 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse group-hover:bg-accent/0"></div>
          </div>
          <h1 className="text-lg md:text-xl font-bold tracking-tight text-text group-hover:text-highlight transition-colors">
            Ashok Lama
          </h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-all duration-200 hover:text-highlight relative py-1
                  ${
                    activeSection === href.slice(1)
                      ? "text-highlight"
                      : "text-muted"
                  }
                `}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                    activeSection === href.slice(1)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
          ))}
          <li className="ml-4 pl-4 border-l border-white/10">
            <ThemeSwitcher />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-muted hover:text-highlight transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-white/5 shadow-2xl py-4 px-6 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium py-2 border-b border-white/5
                      ${
                        activeSection === href.slice(1)
                          ? "text-highlight pl-2"
                          : "text-muted"
                      }
                      hover:text-highlight hover:pl-2 transition-all duration-200
                    `}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
