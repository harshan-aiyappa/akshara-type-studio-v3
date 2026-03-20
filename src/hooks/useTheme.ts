import { useState, useEffect } from "react";

/**
 * useTheme — manages dark/light mode with system preference detection
 * Applies/removes `.dark` class on `<html>` element
 */
export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem("akshara-theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("akshara-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("akshara-theme", "light");
    }
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);
  const setDark   = () => setIsDark(true);
  const setLight  = () => setIsDark(false);

  return { isDark, toggleDark, setDark, setLight };
}
