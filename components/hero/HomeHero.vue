<template>
  <div class="mb-16 sm:mb-24 lg:mb-32">
    <h1 class="mb-12 text-2xl font-bold sm:text-3xl lg:text-5xl"><span class="text-primary-2">Hey there!</span> I'm David.</h1>

    <p class="inline text-base font-semibold tracking-wide md:text-lg lg:text-xl lg:font-semibold">I'm an art-loving, coffee-sipping software developer from Brooklyn. Welcome to my little slice of the internet pie. The site is a work-in-progress and a bit barebones for now, I know. I'll keep updating it as I think of more things to add. I'm just getting started with writing, so I'll add a blog section as soon as I get some posts under my belt. Stay tuned!</p>

    <div class="mt-7 flex items-center justify-start gap-7 sm:gap-8">
      <a v-for="(item, i) in filteredItems" :key="i" :href="item.link" target="_blank" class="h-8">
        <Icon :name="item.icon" class="h-5 w-5 md:h-6 md:w-6" />
      </a>

      <!-- Setting this to always hide for now until I've worked out the subscription workflow -->
      <button v-if="false" class="flex-row-standard h-8" @click="showSubscribe = !showSubscribe">
        <Icon name="bell" class="mb-2 h-5 w-5" />
      </button>
    </div>

    <Subscribe v-show="showSubscribe" />
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

const { showBlog } = await useShowBlog();

const showSubscribe = ref(false);

// ------------------------ Variables

const items = [
  {
    icon: "email",
    link: "mailto:davidglassman@fastmail.com",
  },
  {
    icon: "linkedin",
    link: "https://linkedin.com/in/davidglassman29/",
  },
  {
    icon: "instagram",
    link: "https://instagram.com/davidgglassman/",
  },
  {
    icon: "github",
    link: "https://github.com/davidgglassman",
  },
];
// ------------------------ Computed

const filteredItems = computed(() => {
  if (showBlog.value) {
    return items;
  } else {
    return items.filter((item) => !item.icon.includes("bell"));
  }
});

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
