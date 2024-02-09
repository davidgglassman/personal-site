<template>
  <HomeHero />
  <PostsLatest v-if="showBlog" />

  <div class="flex-col-standard mb-16 h-auto w-full gap-8 sm:mb-24 lg:mb-32 lg:gap-12">
    <button v-if="showBlog" class="btn-large">Subscribe</button>
    <button class="btn-large">Hit Me Up</button>
  </div>
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
