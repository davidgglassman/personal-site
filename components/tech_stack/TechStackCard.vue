<template>
  <div class="card p-3">
    <div class="flex size-full justify-between">
      <div class="flex flex-col justify-start align-top">
        <Icon :name="icon" class="mr-3 h-5 w-5" />
      </div>
      <div class="flex w-full flex-col">
        <div class="flex w-full items-center justify-between">
          <div class="mb-1 font-semibold lg:text-lg">{{ label }}</div>
          <div class="-mt-2 h-[.35rem] w-[.35rem] rounded-full bg-grey-500 md:h-2 md:w-2"></div>
        </div>
        <p class="text-left leading-normal">{{ content }}</p>
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
