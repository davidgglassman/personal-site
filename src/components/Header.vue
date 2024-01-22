<template>
  <div class="header w-full bg-gray-50 h-auto flex-col-standard justify-center p-4 mb-4">
    <h1 class="name font-blackout_sunrise text-gray-700 my-6">David Glassman</h1>
    <img class="object-cover object-center w-auto rounded-3xl" :src="'../src/assets/img/portraits/9.png'" alt="Some picture" />
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

// -------- Event Bus

// -------- Store

// -------- Router

// -------- External

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style scoped>
.header {
  min-width: 300px;
  max-width: 800px;
}

/* SMARTPHONES PORTRAIT */
@media only screen and (min-width: 300px) {
  .name {
    font-size: 3rem;
    line-height: 3rem;
  }
}

/* SMARTPHONES LANDSCAPE */
@media only screen and (min-width: 480px) {
  .name {
    font-size: 3.25rem;
    line-height: 3.25rem;
  }
}

/* TABLETS PORTRAIT */
@media only screen and (min-width: 768px) {
  .name {
    font-size: 5.5rem;
    line-height: 5.5rem;
  }
}

/* TABLET LANDSCAPE / DESKTOP */
@media only screen and (min-width: 1024px) {
  .name {
    font-size: 6rem;
    line-height: 6rem;
  }
}
</style>
