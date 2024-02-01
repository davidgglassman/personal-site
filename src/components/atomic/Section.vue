<template>
  <div class="mb-20 h-auto w-full min-w-[328px] xl:mb-32">
    <SectionLabel :label="props.name" />
    <slot />
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import SectionLabel from "./SectionLabel.vue";

// -------- Vue

// -------- Store

// -------- External

// ------------------------ Props

const props = defineProps({
  name: String,
});

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
