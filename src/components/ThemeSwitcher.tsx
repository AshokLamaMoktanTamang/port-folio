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

  // Initial theme check
  useEffect(() => {
    if (document.documentElement.classList.contains("light")) {
      setTheme("light");
    }
  }, []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-md bg-accent text-white font-semibold shadow-md flex items-center gap-2 transition-all duration-300 hover:bg-highlight hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
