<template>
  <div class="card mb-8 lg:mb-12">
    <div class="mb-3 font-bold">{{ data.years }}</div>

    <div class="items-left mb-2 flex flex-col justify-between text-primary-2 sm:mb-0 sm:flex-row sm:items-center">
      <div class="font-bold tracking-wide lg:text-lg">{{ data.roles.main.title }}</div>
      <div class="text-[.65rem] font-medium leading-4 opacity-65 sm:text-xs lg:text-sm">{{ data.roles.main.years }}</div>
    </div>

    <div v-for="(role, i) in data.roles.other" :key="i" class="items-left mb-2 flex flex-col justify-between text-grey-800 dark:text-primary-1 sm:mb-0 sm:flex-row sm:items-center" :style="{ opacity: `${100 - (i + 1) * 30}%` }">
      <div class="font-semibold tracking-wide lg:text-lg">{{ role.title }}</div>
      <div class="text-[.65rem] font-medium leading-4 opacity-65 sm:text-xs lg:text-sm">{{ role.years }}</div>
    </div>

    <a :href="data.url" target="_blank" class="link mt-4 inline-block font-bold lg:text-lg">{{ data.company }}</a>

    <ul class="ml-4 mt-5 list-outside list-disc">
      <li v-for="(item, i) in data.items" :key="i" class="mt-4">
        <div class="mb-2 sm:mb-1">{{ item.content }}</div>
        <a v-if="item.link" :href="item.link.url" target="_blank"
          ><span class="link font-semibold">{{ item.link.title }}</span></a
        >
      </li>
    </ul>
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
