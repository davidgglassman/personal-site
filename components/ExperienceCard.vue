<template>
  <div class="size-full">
    <div class="mb-3 text-xs font-semibold text-primary-2">{{ data.years }}</div>
    <div class="text-base font-semibold tracking-wide text-grey-700 dark:text-grey-100">{{ data.title }}</div>
    <div class="text-sm font-semibold text-primary-2 dark:text-accent-1">{{ data.company }}</div>

    <ul class="my-5 ml-4 list-outside list-disc">
      <li v-for="(item, i) in data.items" :key="i" class="mb-2 text-sm text-grey-500 dark:text-grey-300">{{ item }}</li>
    </ul>

    <div class="flex w-full flex-wrap">
      <div v-for="(item, i) in data.skills" :key="i" class="flex-row-standard mb-2 mr-2 inline-block rounded-full bg-primary-2 bg-opacity-10 px-4 py-1 text-justify text-xs font-semibold text-primary-2 last:mr-0">{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

const props = defineProps({
  data: Object,
});

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
