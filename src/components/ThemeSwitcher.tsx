import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: 6,
    backgroundColor: "var(--color-accent)",
    color: "var(--color-background)",
    fontWeight: "600",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "background-color 0.3s ease",
    border: "none",
  };

  const hoverStyle = {
    backgroundColor: "var(--color-background)",
    color: "var(--color-accent)",
  };

  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{ ...buttonStyle, ...(hover ? hoverStyle : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
