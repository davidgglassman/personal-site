<template>
  <component :is="icon" :class="class" />
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import { defineAsyncComponent } from "vue";

// -------- Event Bus

// -------- Store

// -------- Router

// -------- External

// ------------------------ Props

const props = defineProps({
  name: String,
  class: String,
});

// ------------------------ Variables

const icon = defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg`));

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style scoped></style>
