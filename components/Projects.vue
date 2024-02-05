<template>
  <Section name="Projects">
    <Card v-for="(item, i) in data.items" :key="i" class="mb-8 px-0 pt-0">
      <ProjectCard :data="item" />
    </Card>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

import data from "../data/projects.yml";

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

<style scoped></style>
