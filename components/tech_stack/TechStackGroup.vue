<template>
  <div class="mb-4 text-base font-bold sm:text-lg lg:text-2xl">{{ label }}</div>
  <TechStackCard v-for="(item, i) in items" :key="i" :label="item.label" :icon="item.icon" :content="item.content" />
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

const props = defineProps({
  label: String,
  items: Array,
});

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
