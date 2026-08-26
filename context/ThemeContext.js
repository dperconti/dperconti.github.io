import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = ["light", "dark"];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "book") {
      // Migrate legacy book theme
      setTheme("light");
      applyTheme("light");
      localStorage.setItem("theme", "light");
    } else if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("light");
    }
  }, []);

  const applyTheme = (themeName) => {
    document.documentElement.classList.remove("light", "book", "dark");
    document.documentElement.classList.add(themeName);
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
