<template>
  <div class="mb-4 text-base font-bold sm:text-lg lg:text-2xl">{{ label }}</div>
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
    <TechStackCard v-for="(item, i) in contentItems" :key="i" :label="item.label" :icon="item.icon" :content="item.content" />
  </div>

  <div class="card mt-4 p-4">
    <div v-for="(item, i) in legendItems" :key="i" class="mb-1 flex w-full items-start justify-start gap-3">
      <div class="mt-1 h-[.35rem] w-[.35rem] min-w-[.35rem] rounded-full bg-grey-500 md:h-2 md:w-2"></div>
      <p class="grow text-xs leading-normal text-grey-700 dark:text-grey-600 md:text-sm">{{ item.content }}</p>
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
  label: String,
  contentItems: Array,
  legendItems: Array,
});

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
