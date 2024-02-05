<template>
  <div>
    <div v-for="(item, i) in items" :key="i" @click="selectItem(item)" class="mb-2 cursor-pointer text-sm font-bold tracking-widest" :class="{ 'text-primary-2': item === currentItem }">
      <span v-show="item === currentItem"><hr class="border-1 inline-block w-3 border-primary-2" /></span>{{ item.toUpperCase() }}
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

import { useDataStore } from "../stores/DataStore";

// -------- External

// ------------------------ Props

// ------------------------ Variables

const items = ref([]);
const currentItem = ref(null);

let lastItem = null;

const dataStore = useDataStore();

// ------------------------ Computed

// ------------------------ Functions

const selectItem = (item) => {
  dataStore.setLastSelectedNavItem(item);
};

const onTimerExpired = () => {
  currentItem.value = lastItem;
};

const timer = new DebounceTimer(onTimerExpired, 350);

// ------------------------ Events

// -------- Lifecycle Hooks

onMounted(() => {
  dataStore.setNavItems(["About", "Experience", "Skills", "Projects", "FAQ", "Trivia"]);
});

// -------- Watch

watch(
  () => dataStore.nav_items,
  () => {
    items.value = dataStore.getNavItems;
  },
);

watch(
  () => dataStore.current_nav_item,
  () => {
    lastItem = dataStore.getCurrentNavItem;
    timer.restart();
  },
);
</script>

<style scoped></style>
