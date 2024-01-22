<template>
  <div class="w-full h-auto bg-gray-50 p-4 flex-col-standard justify-start pt-24">
    <p class="header font-blackout_sunrise text-gray-700">Projects</p>
    <ProjectTile v-for="project in projects" :key="project.name" :data="project" />
  </div>
</template>

<script setup>
// ------------------------ Imports

import ProjectTile from "./ProjectTile.vue";

// -------- Components

// -------- Vue

// -------- Event Bus

// -------- Store

// -------- Router

// -------- External

// ------------------------ Props

// ------------------------ Variables

let projects = [
  {
    name: "Project 1",
    info: "Project 1 Info",
    content: "Project 1 Content",
    images: ["https://placehold.co/600x300?text=Project+1+Image+1", "https://placehold.co/600x300?text=Project+1+Image+2", "https://placehold.co/600x300?text=Project+1+Image+3", "https://placehold.co/600x300?text=Project+1+Image+4", "https://placehold.co/600x300?text=Project+1+Image+5", "https://placehold.co/600x300?text=Project+1+Image+6"],
  },
  {
    name: "Project 2",
    info: "Project 2 Info",
    content: "Project 2 Content",
    images: ["https://placehold.co/600x300?text=Project+2+Image+1", "https://placehold.co/600x300?text=Project+2+Image+2", "https://placehold.co/600x300?text=Project+2+Image+3"],
  },
  {
    name: "Project 3",
    info: "Project 3 Info",
    content: "Project 3 Content",
    images: ["https://placehold.co/600x300?text=Project+3+Image+1", "https://placehold.co/600x300?text=Project+3+Image+2"],
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style scoped>
/* SMARTPHONES PORTRAIT */
@media only screen and (min-width: 300px) {
  .header {
    font-size: 3rem;
    line-height: 3rem;
  }
}

/* SMARTPHONES LANDSCAPE */
@media only screen and (min-width: 480px) {
  .header {
    font-size: 3.25rem;
    line-height: 3.25rem;
  }
}

/* TABLETS PORTRAIT */
@media only screen and (min-width: 768px) {
  .header {
    font-size: 5.5rem;
    line-height: 5.5rem;
  }
}

/* TABLET LANDSCAPE / DESKTOP */
@media only screen and (min-width: 1024px) {
  .header {
    font-size: 6rem;
    line-height: 6rem;
  }
}
</style>
