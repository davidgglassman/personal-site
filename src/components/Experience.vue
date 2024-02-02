<template>
  <Section name="Experience">
    <Card>
      <ExperienceCard :data="data" />
    </Card>

    <Button class="mt-8 h-16 w-64">
      <div class="flex-row-standard">
        <p class="text-lg font-bold tracking-wider text-primary-2">SEE FULL RESUME</p>
      </div>
    </Button>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Section from "./Section.vue";
import Card from "./Card.vue";
import Button from "./Button.vue";
import ExperienceCard from "./ExperienceCard.vue";

// -------- Vue

// -------- Store

// -------- External

import data from "../data/experience.yml";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
