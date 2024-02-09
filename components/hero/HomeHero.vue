<template>
  <div class="mb-16 sm:mb-24 lg:mb-32">
    <h1 class="mb-6 text-2xl font-bold sm:text-3xl lg:text-5xl"><span class="text-grey-600">Hey!</span> I'm David</h1>
    <p class="font-medium lg:font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt error aliquam inventore, architecto adipisci distinctio. Enim quod qui similique? Esse praesentium at exercitationem. Fugiat, animi! Rem.</p>

    <div class="mt-6 flex items-center justify-start gap-5 lg:gap-6">
      <a v-for="(item, i) in filteredItems" :key="i" :href="item.link" target="_blank" class="h-8">
        <Icon :name="item.icon" class="h-5 w-5 lg:h-6 lg:w-6" />
      </a>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

const { showBlog } = await useShowBlog();

// ------------------------ Variables

const items = [
  {
    icon: "email",
    link: "mailto:davidglassman@fastmail.com",
  },
  {
    icon: "bell",
    link: "",
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
