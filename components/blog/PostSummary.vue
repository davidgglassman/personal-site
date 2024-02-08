<template>
  <button class="mb-4 flex h-auto w-full justify-between align-middle text-lg sm:mb-2 lg:text-xl">
    <p class="text-sm font-medium sm:text-base lg:font-semibold">{{ post.title }}</p>
    <p class="hidden text-sm font-medium lg:inline lg:text-base">{{ post.date }}</p>
  </button>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

const props = defineProps({
  post: Object,
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
