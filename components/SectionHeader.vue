<template>
  <div class="flex justify-between align-middle">
    <h1 class="mb-6 text-5xl font-bold">{{ label }}</h1>
    <button v-if="buttonLabel !== undefined" class="h-10 w-auto rounded-xl border border-grey-400 px-4 text-center font-semibold" @click="clickAction">{{ buttonLabel }}</button>
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
