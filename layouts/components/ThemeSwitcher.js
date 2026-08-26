import { useTheme } from "context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="site-theme-toggle"
      aria-label={`Switch to ${next} mode`}
    >
      <span className="site-theme-toggle__dot" aria-hidden="true" />
      <span>{theme}</span>
    </button>
  );
};

export default ThemeSwitcher;
