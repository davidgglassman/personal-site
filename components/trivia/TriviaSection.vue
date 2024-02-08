<template>
  <Section label="Trivia">
    <TriviaCard v-for="(item, i) in trivia.items" :key="i" :data="item" />
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

import trivia from "~/data/trivia.yml";

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
