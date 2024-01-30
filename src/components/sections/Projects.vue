<template>
  <div class="section">
    <SectionLabel label="Projects" />

    <Card v-for="(item, i) in data.items" :key="i" class="px-0 pt-0">
      <ProjectCard :data="item" />
    </Card>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import SectionLabel from "../atomic/SectionLabel.vue";
import Card from "../atomic/Card.vue";
import ProjectCard from "../complex/ProjectCard.vue";

// -------- Vue

// -------- Store

// -------- External

import data from "../../data/projects.yml";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
