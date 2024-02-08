<template>
  <div class="card p-4">
    <div class="flex size-full justify-between">
      <div class="hidden flex-col justify-around align-top md:flex">
        <div class="aspect-video h-20 border border-grey-500 bg-grey-300 dark:border-grey-700 dark:bg-grey-900 md:h-32"></div>
        <div class="mt-4 flex items-center justify-start gap-4 lg:gap-6">
          <a v-for="(item, i) in data.items" :key="i" :href="item.url" target="_blank">
            <Icon :name="item.icon" class="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
        </div>
      </div>
      <div class="flex flex-col items-start justify-between md:ml-4">
        <div class="mb-4 text-base font-bold md:mb-1 md:text-lg lg:text-2xl">{{ data.title }}</div>
        <p class="text-sm leading-normal md:text-base">{{ data.content }}</p>
        <div class="mt-4 flex w-full flex-wrap items-center justify-end gap-2 md:flex-nowrap md:gap-3">
          <button class="btn h-8 min-w-28 text-xs hover:bg-grey-300">Link</button>
          <button class="btn h-8 min-w-28 text-xs hover:bg-grey-300">Learn More</button>
        </div>
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
