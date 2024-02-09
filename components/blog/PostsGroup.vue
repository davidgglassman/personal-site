<template>
  <div class="mb-12">
    <div v-if="!hideYear" class="mb-4 text-xl font-bold lg:text-3xl">{{ year }}</div>
    <PostSummary v-for="(item, i) in items" :key="i" :data="item" />
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
  items: Array,
  hideYear: Boolean,
});

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
