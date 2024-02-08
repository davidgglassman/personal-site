<template>
  <div class="h-full w-full min-w-[300px] cursor-default flex-col bg-grey-100 text-left font-inter text-sm font-normal text-grey-900 selection:bg-accent-1 selection:text-grey-900 dark:bg-grey-950 dark:text-grey-400 sm:text-base lg:text-lg">
    <div class="mx-auto flex h-full w-full max-w-[49rem] flex-col justify-between p-4 md:p-8">
      <div class="content flex h-auto flex-col justify-between">
        <!-- Header Section -->

        <header class="mb-16 flex flex-wrap justify-between align-middle sm:mb-24 sm:flex-nowrap lg:mb-32">
          <ul class="flex w-full flex-col gap-2 sm:flex-row md:gap-1 lg:gap-2">
            <li v-for="(item, i) in items" :key="i">
              <NuxtLink :to="item.path" class="flex h-10 w-full items-center justify-start gap-4 rounded-xl border border-grey-400 bg-grey-100 p-4 text-grey-900 dark:border-grey-700 dark:bg-grey-950 dark:text-grey-300 sm:h-6 sm:justify-center sm:gap-0 md:h-8 md:w-auto lg:h-10">
                <Icon :name="item.icon" class="h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8" />
                <p class="text-xs font-semibold lg:text-sm">{{ item.name }}</p>
              </NuxtLink>
            </li>
          </ul>

          <ColorMode />
        </header>

        <!-- Content Section -->

        <slot />
      </div>

      <!-- Footer Section -->

      <footer class="flex-row-standard h-8 w-full gap-4 lg:gap-6">
        <p v-for="i in 3" class="w-18 text-xs font-semibold text-grey-900 dark:text-grey-300 sm:text-sm lg:text-base">Some Text</p>
      </footer>
    </div>
  </div>
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
    icon: "placeholder",
    path: "/",
  },
  {
    name: "About",
    icon: "placeholder",
    path: "/about",
  },
  {
    name: "Blog",
    icon: "placeholder",
    path: "/blog",
  },
  {
    name: "Projects",
    icon: "placeholder",
    path: "/projects",
  },
];

// ------------------------ Composables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
.content {
  overscroll-behavior: none !important;
}

.router-link-exact-active {
  @apply bg-grey-200 opacity-75 dark:bg-grey-900;
}
</style>
