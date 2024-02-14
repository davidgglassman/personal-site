<template>
  <div class="mb-16 sm:mb-24 lg:mb-32">
    <h1 class="mb-6 text-2xl font-bold sm:text-3xl lg:text-5xl"><span class="text-primary-2">Hey there!</span> I'm Dave.</h1>

    <p class="inline font-medium lg:font-semibold">I'm an art-loving, coffee-guzzling software developer from Brooklyn. Welcome to my little slice of the internet pie. Here, you can <NuxtLink to="/about" class="link">get to know me</NuxtLink> better</p>
    <p class="inline font-medium lg:font-semibold" :class="{ hidden: !showBlog }">, check out some of the <NuxtLink to="/projects" class="link">software projects</NuxtLink> I've worked on, or read some of my <NuxtLink to="/blog" class="link">blog posts</NuxtLink>. I'm just getting started with writing, so there's not much content yet, but I'm working on it!</p>
    <p class="inline font-medium lg:font-semibold" :class="{ hidden: showBlog }">&nbsp;or check out some of the <NuxtLink to="/projects" class="link">software projects</NuxtLink> I've worked on. I'm just getting started with writing, so I'll add a blog section as soon as I get some posts under my belt. Stay tuned!</p>

    <div class="mt-6 flex items-center justify-start gap-5 lg:gap-6">
      <a v-for="(item, i) in filteredItems" :key="i" :href="item.link" target="_blank" class="h-8">
        <Icon :name="item.icon" class="h-5 w-5 lg:h-6 lg:w-6" />
      </a>

      <!-- Setting this to always hide for now until I've worked out the subscription workflow -->
      <button v-if="false" class="flex-row-standard h-8" @click="showSubscribe = !showSubscribe">
        <Icon name="bell" class="mb-2 h-5 w-5 lg:h-6 lg:w-6" />
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
    icon: "github",
    link: "https://github.com/davidgglassman",
  },
  {
    icon: "instagram",
    link: "https://instagram.com/davidgglassman/",
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
