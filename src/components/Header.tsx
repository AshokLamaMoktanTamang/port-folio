import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import avatar from "@/assets/images/me.jpeg";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      style={{
        backgroundColor: "var(--color-surface)",
        borderBottom: "1px solid var(--color-background)",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(8px)",
      }}
    >
      <nav
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Tilt glareEnable glareColor="var(--color-accent)">
            <img
              src={avatar}
              alt="Ashok Lama"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "2px solid var(--color-accent)",
              }}
            />
          </Tilt>
          <h1
            style={{
              color: "var(--color-accent)",
              fontWeight: 600,
              userSelect: "none",
              margin: 0,
              fontSize: isMobile ? "1rem" : "inherit",
            }}
          >
            Ashok Lama
          </h1>
        </div>

        {isMobile ? (
          <>
            <button
              onClick={toggleMobileMenu}
              style={{
                background: "none",
                border: "none",
                color: "var(--color-accent)",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Toggle menu"
            >
              ☰
            </button>

            {isMobileMenuOpen && (
              <div
                style={{
                  position: "fixed",
                  top: "60px",
                  left: 0,
                  right: 0,
                  backgroundColor: "var(--color-surface)",
                  borderBottom: "1px solid var(--color-background)",
                  padding: "1rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          color:
                            activeSection === href.slice(1)
                              ? "var(--color-accent)"
                              : "var(--color-muted)",
                          borderBottom:
                            activeSection === href.slice(1)
                              ? "2px solid var(--color-accent)"
                              : "none",
                          paddingBottom: "2px",
                          display: "block",
                        }}
                        className="nav-link"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    color:
                      activeSection === href.slice(1)
                        ? "var(--color-accent)"
                        : "var(--color-muted)",
                    borderBottom:
                      activeSection === href.slice(1)
                        ? "2px solid var(--color-accent)"
                        : "none",
                    paddingBottom: "2px",
                  }}
                  className="nav-link"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
