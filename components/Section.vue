<template>
  <div class="mb-32">
    <SectionHeader :label="label" :buttonLabel="buttonLabel" :clickAction="clickAction" />
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
  label: String,
  buttonLabel: String,
  clickAction: Function,
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
