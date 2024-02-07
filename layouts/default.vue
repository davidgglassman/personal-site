<template>
  <div class="h-full w-full cursor-default flex-col bg-grey-100 text-left font-inter text-lg font-normal text-grey-900 selection:bg-accent-1 selection:text-grey-900 dark:bg-grey-900">
    <div class="mx-auto flex h-full w-full max-w-[49rem] flex-col justify-between p-8">
      <div class="content flex h-auto flex-col justify-between">
        <!-- Header Section -->

        <header class="mb-32 flex justify-between align-middle">
          <ul class="flex gap-2">
            <li v-for="(item, i) in items" :key="i">
              <NuxtLink :to="item.path" class="flex-row-standard h-10 w-auto rounded-xl border border-grey-400 bg-grey-100 p-4 text-grey-900">
                <Icon :name="item.icon" class="h-8 w-8" />
                <p class="text-sm font-semibold">{{ item.name }}</p>
              </NuxtLink>
            </li>
          </ul>

          <ColorMode />
        </header>

        <!-- Content Section -->

        <slot />
      </div>

      <!-- Footer Section -->

      <footer class="flex-row-standard h-8 w-full gap-6">
        <p v-for="i in 3" class="w-18 text-base font-semibold text-grey-900">Some Text</p>
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
  @apply bg-grey-200;
}
</style>
