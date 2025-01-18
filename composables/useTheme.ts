// composables/useTheme.ts
import { ref, computed } from "vue";

export type Theme = "system" | "dark" | "light";

export function useTheme() {
  const theme = ref<Theme>("system");
  const isDark = ref(false);

  // Computed property to determine which theme is actually in use
  const activeTheme = computed(() => {
    if (theme.value === "system") {
      return isDark.value ? "dark" : "light";
    }
    return theme.value;
  });

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;

    if (newTheme === "system") {
      if (import.meta.client) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        isDark.value = prefersDark;
      }
    } else {
      isDark.value = newTheme === "dark";
    }

    if (import.meta.client) {
      if (isDark.value) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", newTheme);
    }
  };

  if (import.meta.client) {
    // Initialize theme on client-side
    const savedTheme = (localStorage.getItem("theme") as Theme | null) ?? "system";
    setTheme(savedTheme);

    // Watch for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (theme.value === "system") {
        isDark.value = e.matches;
        if (isDark.value) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    });
  }

  return {
    theme,
    isDark,
    activeTheme,
    setTheme,
  };
}
