<template>
  <div class="card mb-8 lg:mb-12">
    <div class="mb-3 text-xs font-semibold sm:text-sm">{{ data.years }}</div>
    <div class="text-base font-bold tracking-wide sm:text-lg lg:text-2xl">{{ data.title }}</div>
    <div class="text-sm font-semibold sm:text-base lg:text-lg">{{ data.company }}</div>

    <ul class="my-5 ml-4 list-outside list-disc">
      <li v-for="(item, i) in data.items" :key="i" class="mb-4">{{ item }}</li>
    </ul>

    <div class="flex w-full flex-wrap">
      <div v-for="(item, i) in data.skills" :key="i" class="flex-row-standard mb-2 mr-2 inline-block rounded-full bg-grey-300 px-4 py-1 text-justify text-xs font-semibold last:mr-0 dark:bg-grey-800">{{ item }}</div>
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
