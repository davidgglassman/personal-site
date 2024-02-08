<template>
  <div class="mb-12 lg:mb-16">
    <div class="mb-4 text-xl font-bold lg:text-3xl">{{ year }}</div>
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
