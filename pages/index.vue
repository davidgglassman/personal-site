<template>
  <HomeHero />
  <PostsLatest v-if="showBlog" />
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const { showBlog } = await useShowBlog();

// ------------------------ Composables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
