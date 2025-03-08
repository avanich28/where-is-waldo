"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function applyTheme(theme) {
  const root = window.document.documentElement;

  localStorage.setItem("theme", theme);

  if (theme === "dark") root.classList.add(theme);
  else root.classList.remove("dark");
}

function initialTheme() {
  const prevTheme = localStorage.getItem("theme");
  const theme = prevTheme ? prevTheme : "system";

  return theme;
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("");

  useEffect(function () {
    setTheme(() => initialTheme());
  }, []);

  useEffect(
    function () {
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";

        setTheme(systemTheme);
        applyTheme(systemTheme);
      } else applyTheme(theme);
    },
    [theme]
  );

  function toggleTheme() {
    setTheme((color) => (color === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside provider!");

  return context;
}

export { ThemeProvider, useTheme };
