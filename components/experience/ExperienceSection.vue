<template>
  <Section label="Experience">
    <div class="flex-col-standard">
      <ExperienceCard v-for="(item, i) in data" :key="i" :data="item" />

      <button
        class="h-12 w-auto min-w-36 rounded-xl border border-grey-400 p-3 text-center text-sm font-medium dark:border-grey-700 sm:h-14 sm:min-w-48 sm:text-base lg:h-16 lg:min-w-56 lg:p-4 lg:text-lg lg:font-semibold"
      >
        See Full Resume
      </button>
    </div>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const data = [
  {
    years: "2013 - 2023",
    title: "Principle Software Developer",
    company: "Control Concepts, Inc.",
    items: [
      "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.",
      "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.",
      "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.",
      "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.",
    ],
    skills: ["Vue", "Javascript", "Java", "HTML/CSS", "Python"],
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
