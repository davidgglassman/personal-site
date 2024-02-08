<template>
  <div class="card mb-2 p-4 pl-0 pt-0">
    <div class="flex size-full justify-between">
      <div class="flex flex-col justify-start align-top">
        <Icon :name="icon" class="h-12 w-12 p-3 lg:h-16 lg:w-16 lg:p-4" />
      </div>
      <div class="flex-col-standard pt-2">
        <div class="flex w-full items-center justify-between">
          <div class="mb-1 text-sm font-semibold sm:text-base lg:text-lg lg:font-bold">{{ label }}</div>
          <div class="h-2 w-2 rounded-full bg-grey-500 sm:h-3 sm:w-3 lg:h-4 lg:w-4"></div>
        </div>
        <p class="leading-normal">{{ content }}</p>
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
  icon: String,
  label: String,
  level: Number,
  content: String,
});

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
