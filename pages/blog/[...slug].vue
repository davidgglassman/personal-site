<template>
  <div class="mb-16 sm:mb-24 lg:mb-32">
    <ContentRenderer :value="data" class="prose mx-auto mb-16 max-w-7xl" />

    <div class="flex gap-2">
      <a v-for="tag in data.tags" :key="tag" class="btn px-3 py-1">{{ tag }} </a>
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

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
