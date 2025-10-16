import { createContext, useState, useEffect, useContext } from "react";

// Create the context
const ThemeContext = createContext();

/**
 * Provides light/dark theme state across the app.
 */
export function ThemeProvider({ children }) {

    const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme class and persist
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access theme context easily.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
