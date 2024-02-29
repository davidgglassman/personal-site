import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    expanded: {
      tech: false,
      faq: false,
    },
  }),
  getters: {
    getExpanded(key) {
      return key in this.expanded ? this.expanded[key] : false;
    },
  },
  actions: {
    setExpanded(key, state) {
      if (key in this.expanded) {
        this.expanded[key] = state;
      }
    },
  },
});
