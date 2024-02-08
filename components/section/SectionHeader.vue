<template>
  <div class="flex justify-between align-middle">
    <h1 class="mb-6 text-2xl font-bold sm:text-3xl lg:text-5xl">{{ label }}</h1>
    <button v-if="buttonLabel !== undefined" class="btn h-8 lg:h-10" @click="clickAction">{{ buttonLabel }}</button>
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
