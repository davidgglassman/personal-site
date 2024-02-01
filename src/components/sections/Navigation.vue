<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="mb-3 text-sm font-bold xl:text-base">{{ item.toUpperCase() }}</div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

// -------- Store

// -------- External

// ------------------------ Props

// ------------------------ Variables

const items = ["About", "Experience", "Skills", "Projects", "Trivia", "Faq"];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
