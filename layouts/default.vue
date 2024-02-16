<template>
  <div class="canvas md:text-md h-full min-h-screen w-full min-w-[300px] cursor-default flex-col bg-grey-100 text-left font-inter text-sm font-normal leading-6 tracking-wide text-grey-900 selection:bg-accent-1 selection:text-grey-900 dark:bg-grey-950 dark:text-grey-400 sm:text-base">
    <div class="mx-auto flex h-full min-h-screen w-full max-w-[49rem] flex-col justify-between p-4 sm:p-6 md:p-8">
      <div class="flex h-auto flex-col justify-between">
        <Header />
        <slot />
      </div>

      <Footer />
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

// ------------------------ Composables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
