<template>
  <div class="section">
    <SectionLabel label="FAQ" />

    <Card v-for="(item, i) in data.items" :key="i" class="px-0">
      <FaqCard :data="item" />
    </Card>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import SectionLabel from "../atomic/SectionLabel.vue";
import Card from "../atomic/Card.vue";
import FaqCard from "../complex/FaqCard.vue";

// -------- Vue

// -------- Store

// -------- External

import data from "../../data/faq.yml";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
