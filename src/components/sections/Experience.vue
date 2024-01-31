<template>
  <div class="section">
    <SectionLabel label="Experience" />

    <Card>
      <ExperienceCard :data="data" />
    </Card>

    <Button class="mt-8 h-16 w-full">
      <div class="flex-row-standard">
        <p class="text-base font-semibold text-primary-2">SEE FULL RESUME</p>
      </div>
    </Button>
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

import data from "../../data/experience.yml";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
