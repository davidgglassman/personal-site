<template>
  <div class="section">
    <SectionLabel label="Skills" />

    <div class="flex-col-standard">
      <img :src="chart" alt="Chart" class="size-full" />

      <div class="mt-10 flex h-8 w-fit items-center justify-around rounded-full border border-grey-500 bg-grey-700 p-6">
        <div class="flex-row-standard mx-4 gap-2">
          <div class="h-3 w-3 rounded-full bg-primary-2" />
          <p class="text-xs text-primary-2">Technical Skills</p>
        </div>
        <div class="flex-row-standard mx-4 gap-2">
          <div class="h-3 w-3 rounded-full bg-accent-1" />
          <p class="text-xs text-accent-1">Soft Skills</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import SectionLabel from "../atomic/SectionLabel.vue";

// -------- Vue

// -------- Store

// -------- External

import chart from "../../assets/img/Chart.svg?url";

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
