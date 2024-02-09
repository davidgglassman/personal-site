<template>
  <header class="mb-16 mt-4 flex flex-wrap justify-between align-middle sm:mb-24 sm:flex-nowrap md:mt-0 lg:mb-32">
    <ul class="flex w-full flex-col sm:flex-row sm:gap-2 md:gap-1 lg:gap-2">
      <li v-for="(item, i) in items" :key="i">
        <NuxtLink :to="item.path" :class="{ 'rounded-t-xl': i === 0, 'rounded-b-xl': i === items.length - 1 }" class="flex h-10 w-full items-center justify-start gap-4 border border-grey-400 bg-grey-100 p-4 text-grey-900 dark:border-grey-700 dark:bg-grey-950 dark:text-grey-300 sm:h-6 sm:justify-center sm:gap-2 sm:rounded-xl md:h-8 md:w-auto lg:h-10">
          <Icon :name="item.icon" class="h-4 w-4" />
          <p class="text-xs font-semibold lg:text-sm">{{ item.name }}</p>
        </NuxtLink>
      </li>
    </ul>

    <ColorMode />
  </header>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const items = [
  {
    name: "Home",
    icon: "house",
    path: "/",
  },
  {
    name: "About",
    icon: "info",
    path: "/about",
  },
  {
    name: "Blog",
    icon: "pen",
    path: "/blog",
  },
  {
    name: "Projects",
    icon: "hammer",
    path: "/projects",
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-grey-200 dark:bg-grey-700;
}
</style>
