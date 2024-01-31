<template>
  <div class="size-full">
    <div class="mb-3 font-semibold text-primary-2 sm:text-base md:text-lg lg:text-base">{{ data.years }}</div>
    <div class="xs:text-lg text-base font-bold text-grey-100 sm:text-xl md:text-[1.325rem] lg:text-lg xl:text-xl">{{ data.title }}</div>
    <div class="font-semibold text-accent-1 lg:text-base xl:text-lg">{{ data.company }}</div>

    <ul class="my-5 ml-4 list-outside list-disc">
      <li v-for="(item, i) in data.items" :key="i" class="mb-2 text-grey-300">{{ item }}</li>
    </ul>

    <div class="flex w-full flex-wrap">
      <div v-for="(item, i) in data.skills" :key="i" class="flex-row-standard mb-2 mr-2 inline-block h-8 rounded-full border border-primary-2 px-4 text-justify text-xs text-primary-2 last:mr-0 sm:text-sm">{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

// -------- Store

// -------- External

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
