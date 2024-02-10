<template>
  <header class="mt-4 flex flex-wrap justify-between align-middle sm:mb-24 sm:flex-nowrap md:mt-0 lg:mb-32" :class="{ 'mb-16': !menuActive }">
    <Icon name="menu" class="h-8 w-8 sm:hidden" :class="{ hidden: menuActive === true }" @click="menuActive = true" />
    <Icon name="close" class="h-7 w-7 sm:hidden" :class="{ hidden: menuActive === false }" @click="menuActive = false" />

    <ul class="hidden w-full gap-1 sm:flex lg:gap-2">
      <li v-for="(item, i) in filteredItems" :key="i">
        <NuxtLink :to="item.path" class="flex h-10 w-full items-center justify-start gap-4 border border-grey-400 bg-grey-100 p-4 text-grey-900 dark:border-grey-700 dark:bg-grey-950 dark:text-grey-300 sm:h-6 sm:justify-center sm:gap-2 sm:rounded-xl md:h-8 md:w-auto lg:h-10">
          <Icon :name="item.icon" class="h-4 w-4" />
          <p class="text-xs font-semibold lg:text-sm">{{ item.name }}</p>
        </NuxtLink>
      </li>
    </ul>

    <ColorMode />
  </header>

  <ul class="mb-8 mt-3 flex w-full flex-col border border-grey-400 dark:border-grey-700 sm:flex-row sm:gap-2 md:gap-1 lg:gap-2" :class="{ hidden: !menuActive }">
    <li v-for="(item, i) in filteredItems" :key="i">
      <NuxtLink :to="item.path" @click="menuActive = false" class="flex h-10 w-full items-center justify-start gap-4 border border-grey-400 bg-grey-100 p-4 text-grey-900 dark:border-grey-700 dark:bg-grey-950 dark:text-grey-300 sm:h-6 sm:justify-center sm:gap-2 sm:rounded-xl md:h-8 md:w-auto lg:h-10">
        <Icon :name="item.icon" class="h-4 w-4" />
        <p class="text-xs font-semibold lg:text-sm">{{ item.name }}</p>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const { showBlog } = await useShowBlog();

const menuActive = ref(false);

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

const filteredItems = computed(() => {
  if (showBlog.value) {
    return items;
  } else {
    return items.filter((item) => !item.name.includes("Blog"));
  }
});

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

onMounted(() => {
  const mediaQuery = window.matchMedia("(min-width: 440px)");

  function handleMediaChange(e) {
    if (e.matches) {
      menuActive.value = false;
    }
  }

  mediaQuery.addEventListener("change", handleMediaChange);
});

// -------- Watch
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-grey-200 dark:bg-grey-800;
}
</style>
