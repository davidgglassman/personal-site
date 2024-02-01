import { ref, onUnmounted } from "vue";

export function useMatchMedia(query) {
  const match = window.matchMedia(query);

  const isMatching = ref(match.matches);

  match.addEventListener("change", (e) => (isMatching.value = e.matches));

  onUnmounted(() => window.removeEventListener("change"));

  return isMatching;
}