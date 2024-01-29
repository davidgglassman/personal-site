<template>
  <div class="section">
    <SectionLabel label="Projects" />

    <Card v-for="i in 2" key="i"></Card>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import SectionLabel from "../atomic/SectionLabel.vue";
import Card from "../atomic/Card.vue";

// -------- Store

// -------- External

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
