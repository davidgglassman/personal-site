<template>
  <div class="card mb-8 lg:mb-12">
    <div class="mb-3 text-xs font-bold sm:text-sm">{{ data.years }}</div>

    <div class="flex items-center justify-between text-primary-2">
      <div class="text-xs font-bold tracking-wide sm:text-base lg:text-lg">{{ data.roles.main.title }}</div>
      <div class="text-xs font-bold sm:text-sm">{{ data.roles.main.years }}</div>
    </div>

    <div v-for="(role, i) in data.roles.other" :key="i" class="flex items-center justify-between text-grey-800 dark:text-primary-1" :style="{ opacity: `${100 - (i + 1) * 30}%` }">
      <div class="text-xs font-semibold tracking-wide sm:text-sm lg:text-base">{{ role.title }}</div>
      <div class="text-xs font-semibold">{{ role.years }}</div>
    </div>

    <a :href="data.url" target="_blank" class="link mt-4 inline-block text-xs font-bold sm:text-sm lg:text-base">{{ data.company }}</a>

    <ul class="ml-4 mt-5 list-outside list-disc text-xs sm:text-sm md:text-base">
      <li v-for="(item, i) in data.items" :key="i" class="mt-3">
        <div>{{ item.content }}</div>
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
