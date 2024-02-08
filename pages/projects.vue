<template>
  <div>
    <SectionHeader label="Projects" />

    <!-- Project Cards -->

    <div class="mb-16 sm:mb-24 lg:mb-32">
      <div v-for="i in 4" :key="i" class="card mb-2 p-4">
        <div class="flex size-full justify-between">
          <div class="hidden flex-col justify-around align-top md:flex">
            <div class="aspect-video h-20 border border-grey-500 bg-grey-300 dark:border-grey-700 dark:bg-grey-900 md:h-32"></div>
            <div class="mt-4 flex items-center justify-between">
              <div v-for="i in 5" :key="i" class="h-4 w-4 rounded-full bg-grey-500 md:h-6 md:w-6 lg:h-8 lg:w-8"></div>
            </div>
          </div>
          <div class="flex flex-col items-start justify-between md:ml-4">
            <div class="mb-4 text-base font-bold md:mb-1 md:text-lg lg:text-2xl">Project Name</div>
            <p class="text-sm leading-normal md:text-base">Lorem ipsum, dolor sit amet. Exercitationem ea, odio omnis quasi aspernatur distinctio! Itaque repudiandae doloremque repellendus omnis.</p>
            <div class="mt-4 flex w-full flex-wrap items-center justify-end gap-2 md:gap-3">
              <button class="h-8 w-auto min-w-20 rounded-xl border border-grey-400 text-center text-[.65rem] font-medium dark:border-grey-700 md:h-10 md:min-w-28 md:text-sm lg:h-12 lg:min-w-32 lg:text-base lg:font-semibold">Link</button>
              <button class="h-8 w-auto min-w-20 rounded-xl border border-grey-400 text-center text-[.65rem] font-medium dark:border-grey-700 md:h-10 md:min-w-28 md:text-sm lg:h-12 lg:min-w-32 lg:text-base lg:font-semibold">Learn More</button>
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
