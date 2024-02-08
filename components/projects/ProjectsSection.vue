<template>
  <SectionHeader label="Projects" />

  <!-- Project Cards -->

  <div class="mb-16 sm:mb-24 lg:mb-32">
    <ProjectCard v-for="(item, i) in data" :key="i" :data="item" class="mb-2" />
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const data = [
  {
    title: "Some Project 1",
    content: "Lorem ipsum, dolor sit amet. Exercitationem ea, odio omnis quasi aspernatur distinctio! Itaque repudiandae doloremque repellendus omnis.",
  },
  {
    title: "Some Project 2",
    content: "Lorem ipsum, dolor sit amet. Exercitationem ea, odio omnis quasi aspernatur distinctio! Itaque repudiandae doloremque repellendus omnis.",
  },
  {
    title: "Some Project 3",
    content: "Lorem ipsum, dolor sit amet. Exercitationem ea, odio omnis quasi aspernatur distinctio! Itaque repudiandae doloremque repellendus omnis.",
  },
  {
    title: "Some Project 4",
    content: "Lorem ipsum, dolor sit amet. Exercitationem ea, odio omnis quasi aspernatur distinctio! Itaque repudiandae doloremque repellendus omnis.",
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
