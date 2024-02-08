<template>
  <Section label="Experience">
    <div class="flex-col-standard">
      <ExperienceCard :data="experience" />

      <button class="h-12 w-auto min-w-36 rounded-xl border border-grey-400 p-3 text-center text-sm font-medium dark:border-grey-700 sm:h-14 sm:min-w-48 sm:text-base lg:h-16 lg:min-w-56 lg:p-4 lg:text-lg lg:font-semibold">See Full Resume</button>
    </div>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

import experience from "~/data/experience.yml";

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
