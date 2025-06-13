import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ThemeSelector = () => {
  useEffect(() => {
    const updateTheme = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
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
    <Button
      variant="icon"
      id="theme-selector"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <FaMoon className="hidden size-4 dark:inline" />
      <FaSun className="inline size-4 dark:hidden" />
    </Button>
  );
};

export default ThemeSelector;
