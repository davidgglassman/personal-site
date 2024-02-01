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

import Section from "../atomic/Section.vue";
import Card from "../atomic/Card.vue";
import TriviaCard from "../complex/TriviaCard.vue";

// -------- Vue

// -------- Store

// -------- External

import data from "../../data/trivia.yml";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
