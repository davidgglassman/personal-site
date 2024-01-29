<template>
  <div class="section">
    <SectionLabel label="Experience" />

    <Card>
      <ExperienceCard :data="data" />
    </Card>

    <Button label="See Full Resume" />
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import SectionLabel from "../atomic/SectionLabel.vue";
import Card from "../atomic/Card.vue";
import Button from "../atomic/Button.vue";
import ExperienceCard from "../complex/ExperienceCard.vue";

// -------- Vue

// -------- Store

// -------- External

import data from "../../data/experience/experience.yml";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
