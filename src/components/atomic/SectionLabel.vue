<template>
  <div class="relative mb-6 inline-flex w-full items-center justify-center">
    <hr class="h-px w-full border-0 bg-grey-100" />
    <span class="absolute left-1/2 -translate-x-1/2 bg-grey-900 px-3 font-semibold text-grey-100">{{ label.toUpperCase() }}</span>
  </div>
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
