<template>
  <button class="mb-4 flex h-auto w-full justify-between align-middle text-lg sm:mb-2 lg:text-xl">
    <p class="text-sm font-medium sm:text-base lg:font-semibold">{{ data.title }}</p>
    <p class="hidden text-sm font-medium lg:inline lg:text-base">{{ data.date }}</p>
  </button>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

const props = defineProps({
  data: Object,
});
// ------------------------ Variables

// ------------------------ Composables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
