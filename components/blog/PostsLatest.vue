<template>
  <Section label="Latest Posts" buttonLabel="All Posts" :clickAction="showAllPosts">
    <PostSummary v-for="(item, i) in posts" :key="i" :post="item" />
  </Section>
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

// ------------------------ Computed

// ------------------------ Functions

const showAllPosts = () => {
  console.log("just confirming callback works");
};

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
