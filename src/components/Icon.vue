<template>
  <component :is="icon" :class="class" />
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import { defineAsyncComponent } from "vue";

// -------- Store

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

// -------- Watch
</script>

<style scoped></style>
