<template>
  <Section label="Trivia">
    <TriviaCard v-for="(item, i) in data" :key="i" :data="item" />
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
  "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.",
  "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.",
  "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.",
  "Lorem ipsum dolor sit amet consectetur. Orci sit pretium lacus in ultrices a. Tincidunt varius vestibulum semper neque. Euismod pretium dapibus donec dictumst ipsum purus morbi vitae cursus. Vitae nec.",
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
