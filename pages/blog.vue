<template>
  <div>
    <SectionHeader label="Posts" />

    <!-- Posts -->

    <BlogSection v-for="i in 3" :key="i" :year="`${2027 - i}`">
      <PostSummary v-for="(item, i) in posts" :key="i" :post="item" />
    </BlogSection>

    <!-- Tags -->

    <div class="my-32 grid grid-cols-4 gap-4">
      <button v-for="i in 10" :key="i" class="h-8 w-auto rounded-xl border border-grey-400 text-center font-semibold">Tag</button>
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

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
.content {
  overscroll-behavior: none !important;
}
</style>
