<template>
  <div id="app" class="h-screen w-full cursor-default flex-col overflow-hidden bg-grey-100 text-left font-inter text-base leading-relaxed tracking-normal text-grey-700 selection:bg-accent-1 selection:text-grey-900 dark:bg-grey-900">
    <div class="content h-screen w-full overflow-scroll">
      <ColorMode />
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
