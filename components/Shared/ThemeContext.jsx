import { createContext, useState, useEffect, useContext } from "react";

// Create the context
const ThemeContext = createContext();

/**
 * Provides light/dark theme state across the app.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // On mount, check localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  // Apply theme class to <body> and persist it
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light/dark
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
