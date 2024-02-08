<template>
  <div class="mb-4 text-base font-bold sm:text-lg lg:text-2xl">{{ label }}</div>
  <div class="flex-col-standard">
    <TechStackCard v-for="(item, i) in contentItems" :key="i" :label="item.label" :icon="item.icon" :content="item.content" />

    <div class="card p-4">
      <div v-for="(item, i) in legendItems" :key="i" class="mb-1 flex w-full items-start justify-start gap-3">
        <div class="mt-1 h-2 w-2 min-w-2 rounded-full bg-grey-500 sm:h-3 sm:w-3"></div>
        <p class="grow text-xs leading-normal text-grey-700 sm:text-sm">{{ item.content }}</p>
      </div>
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
