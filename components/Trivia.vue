<template>
  <Section name="Trivia">
    <Card v-for="(item, i) in data.items" :key="i">
      <TriviaCard :data="item" />
    </Card>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

import data from "../data/trivia.yml";

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
