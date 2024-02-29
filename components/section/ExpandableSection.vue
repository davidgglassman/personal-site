<template>
  <div class="mb-16 sm:mb-24 lg:mb-32">
    <ExpandableSectionHeader :id="id" :label="label" />
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
  id: String,
  label: String,
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
