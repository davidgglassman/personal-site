<template>
  <button class="h-16 w-full rounded-full border-2 border-primary-2 text-lg font-semibold text-primary-2 hover:bg-primary-2 hover:text-grey-900">{{ label.toUpperCase() }}</button>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

// -------- Store

// -------- External

// ------------------------ Props

const props = defineProps({
  label: String,
});

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
