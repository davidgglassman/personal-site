<template>
  <div class="mb-16">
    <div class="mb-4 text-3xl font-bold">{{ year }}</div>
    <slot />
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

const props = defineProps({
  year: String,
});

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
