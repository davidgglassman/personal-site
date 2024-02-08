<template>
  <Section label="Experience">
    <div class="flex-col-standard">
      <ExperienceCard v-for="(item, i) in data" :key="i" :data="item" />

      <button class="btn-large">See Full Resume</button>
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
    items: ["Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.", "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.", "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.", "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec."],
    skills: [
      {
        icon: "vue",
        url: "https://vuejs.org/",
      },
      {
        icon: "javascript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: "python",
        url: "https://www.python.org/",
      },
    ],
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
