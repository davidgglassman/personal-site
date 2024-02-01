<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="mb-2 text-sm font-bold tracking-widest">{{ item.toUpperCase() }}</div>
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
