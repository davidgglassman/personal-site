<template>
  <SectionHeader label="Posts" />

  <PostsGroup v-for="i in 3" :key="i" :year="`${2027 - i}`">
    <PostSummary v-for="(item, i) in posts" :key="i" :post="item" />
  </PostsGroup>
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

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>