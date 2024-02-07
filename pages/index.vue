<template>
  <div>
    <!-- Hero Section -->

    <Section label="Hey! I'm David">
      <p class="text-justify font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt error aliquam inventore, architecto adipisci distinctio. Enim quod qui similique? Esse praesentium at exercitationem. Fugiat, animi! Rem.</p>
    </Section>

    <!-- Latest Posts Section -->

    <Section label="Latest Posts" buttonLabel="All Posts" :clickAction="showAllPosts">
      <PostSummary v-for="(item, i) in posts" :key="i" :post="item" />
    </Section>

    <!-- Subscribe / Contact Buttons -->

    <div class="flex-col-standard mb-32 h-auto w-full gap-12">
      <button class="h-16 w-auto min-w-56 rounded-xl border border-grey-400 p-4 text-center text-lg font-semibold dark:border-grey-700">Subscribe</button>
      <button class="h-16 w-auto min-w-56 rounded-xl border border-grey-400 p-4 text-center text-lg font-semibold dark:border-grey-700">Hit Me Up</button>
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

// fixed for layout purposes. this data will eventually be driven by Markdown files & from Nuxt Content.

const posts = [
  {
    title: "My First Post",
    date: "Jan 2024",
  },
  {
    title: "My Second Post",
    date: "Jan 2024",
  },
  {
    title: "My Third Post",
    date: "Jan 2024",
  },
  {
    title: "My Fourth Post",
    date: "Feb 2024",
  },
];

// ------------------------ Composables

// ------------------------ Computed

// ------------------------ Functions

const showAllPosts = () => {
  console.log("just confirming callback works");
};

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
.content {
  overscroll-behavior: none !important;
}
</style>
