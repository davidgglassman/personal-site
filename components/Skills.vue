<template>
  <Section name="Skills">
    <div class="flex-col-standard">
      <img :src="chart" alt="Chart" class="size-full" />

      <div class="mt-10 flex h-8 w-fit items-center justify-around rounded-full border border-grey-500 bg-grey-700 p-4 py-6">
        <div class="flex-row-standard mx-3 gap-2">
          <div class="h-2 w-2 rounded-full bg-primary-2" />
          <p class="text-primary-2">Technical Skills</p>
        </div>
        <div class="flex-row-standard mx-3 gap-2">
          <div class="h-2 w-2 rounded-full bg-accent-1" />
          <p class="text-accent-1">Soft Skills</p>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

import chart from "../assets/img/Chart.svg?url";

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
