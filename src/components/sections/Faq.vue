<template>
  <div class="section">
    <SectionLabel label="FAQ" />

    <Card v-for="i in 4" key="i"></Card>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import SectionLabel from "../atomic/SectionLabel.vue";
import Card from "../atomic/Card.vue";

// -------- Vue

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
