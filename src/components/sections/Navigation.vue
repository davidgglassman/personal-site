<template>
  <div>
    <div v-for="(item, i) in items" :key="i" @click="selectItem(item)" class="mb-2 cursor-pointer text-sm font-bold tracking-widest" :class="{ 'text-primary-2': item === currentItem }">{{ `${item === currentItem ? "..." : ""}${item.toUpperCase()}` }}</div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import { ref, onMounted, watch } from "vue";

// -------- Store

import { useDataStore } from "../../store/DataStore";

// -------- External

// ------------------------ Props

// ------------------------ Variables

const items = ref([]);
const currentItem = ref(null);

const dataStore = useDataStore();

// ------------------------ Computed

// ------------------------ Functions

const selectItem = (item) => {
  dataStore.setLastSelectedNavItem(item);
};

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
    currentItem.value = dataStore.getCurrentNavItem;
  },
);
</script>

<style scoped></style>
