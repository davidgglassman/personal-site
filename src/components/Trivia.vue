<template>
  <Section name="Trivia">
    <Card v-for="(item, i) in data.items" :key="i">
      <TriviaCard :data="item" />
    </Card>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Section from "./Section.vue";
import Card from "./Card.vue";
import TriviaCard from "./TriviaCard.vue";

// -------- Vue

// -------- Store

// -------- External

import data from "../data/trivia.yml";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
