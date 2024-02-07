<template>
  <div>
    <SectionHeader label="Projects" />

    <!-- Project Cards -->

    <div class="mb-32">
      <div v-for="i in 4" :key="i" class="card mb-2 p-4">
        <div class="flex size-full justify-between">
          <div class="flex flex-col justify-between align-top">
            <div class="aspect-video h-32 border border-grey-500 bg-grey-300"></div>
            <div class="mt-4 flex items-center justify-between">
              <div v-for="i in 5" :key="i" class="h-8 w-8 rounded-full bg-grey-500"></div>
            </div>
          </div>
          <div class="ml-4 flex flex-col items-start justify-between">
            <div class="mb-1 text-2xl font-bold">Project Name</div>
            <p class="leading-normal">Lorem ipsum, dolor sit amet. Exercitationem ea, odio omnis quasi aspernatur distinctio! Itaque repudiandae doloremque repellendus omnis.</p>
            <div class="mt-4 flex w-full items-center justify-end gap-3">
              <button class="h-12 w-auto min-w-32 rounded-xl border border-grey-400 text-center text-base font-semibold">Link</button>
              <button class="h-12 w-auto min-w-32 rounded-xl border border-grey-400 text-center text-base font-semibold">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

import projects from "~/data/projects.yml";

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Composables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
.content {
  overscroll-behavior: none !important;
}
</style>
