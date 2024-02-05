import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    nav_items: [],
    visible_nav_items: [],
    current_nav_item: null,
    last_selected_nav_item: null,
  }),
  getters: {
    getNavItems() {
      return this.nav_items;
    },
    getVisibleNavItems() {
      return this.visible_nav_items;
    },
    getCurrentNavItem() {
      return this.current_nav_item;
    },
  },
  actions: {
    setNavItems(collection) {
      if (collection) {
        this.nav_items = collection;
      }
    },
    setNavItemVisibility(item, state) {
      if (this.nav_items && this.visible_nav_items) {
        const index = this.visible_nav_items.indexOf(item);

        if (state) {
          if (index === -1) {
            this.visible_nav_items.push(item);
          }
        } else {
          if (index !== -1) {
            this.visible_nav_items.splice(index, 1);
          }
        }

        for (let i = 0; i < this.nav_items.length; i++) {
          if (this.visible_nav_items.includes(this.nav_items[i])) {
            this.current_nav_item = this.nav_items[i];
            break;
          }
        }
      }
    },
    setLastSelectedNavItem(item) {
      this.last_selected_nav_item = item;
    },
  },
});
