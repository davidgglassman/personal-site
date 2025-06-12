import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSelector = () => {
  useEffect(() => {
    const updateTheme = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    updateTheme();

    window.addEventListener("astro:after-swap", updateTheme);

    return () => {
      window.removeEventListener("astro:after-swap", updateTheme);
    };
  }, []);

  const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button type="button" id="theme-selector" onClick={toggleTheme} aria-label="Toggle theme">
      <FaMoon className="hidden size-4 hover:text-[#a5a5a5] dark:inline" />
      <FaSun className="inline size-4 hover:text-[#a5a5a5] dark:hidden" />
    </button>
  );
};

export default ThemeSelector;
