<template>
  <div class="h-full min-h-screen w-full min-w-[300px] cursor-default flex-col bg-grey-100 text-left font-inter text-sm font-normal text-grey-900 selection:bg-accent-1 selection:text-grey-900 dark:bg-grey-950 dark:text-grey-400 sm:text-base lg:text-lg">
    <div class="mx-auto flex h-full w-full max-w-[49rem] flex-col justify-between p-4 md:p-8">
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
