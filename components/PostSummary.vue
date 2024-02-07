<template>
  <button class="mb-2 flex h-auto w-full justify-between align-middle text-xl">
    <p class="font-semibold">{{ post.title }}</p>
    <p class="text-base font-medium">{{ post.date }}</p>
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
