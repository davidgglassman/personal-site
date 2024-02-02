<template>
  <Section name="FAQ">
    <Card v-for="(item, i) in data.items" :key="i" class="px-0">
      <FaqCard :data="item" />
    </Card>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Section from "./Section.vue";
import Card from "./Card.vue";
import FaqCard from "./FaqCard.vue";

// -------- Vue

// -------- Store

// -------- External

import data from "../data/faq.yml";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
