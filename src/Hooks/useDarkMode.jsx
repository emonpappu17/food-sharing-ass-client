import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Default to system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement; // <html> element
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");

    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");

    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};
