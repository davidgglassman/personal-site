<template>
  <Section label="FAQ">
    <FaqCard v-for="(item, i) in data" :key="i" :data="item" />
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
    question: "Some Question 1",
    answer: "Lorem ipsum dolor sit amet sic mun consectetur. Orci sit pretium lacuser in ultrices. 1",
  },
  {
    question: "Some Question 2",
    answer: "Lorem ipsum dolor sit amet sic mun consectetur. Orci sit pretium lacuser in ultrices. 2",
  },
  {
    question: "Some Question 3",
    answer: "Lorem ipsum dolor sit amet sic mun consectetur. Orci sit pretium lacuser in ultrices. 3",
  },
  {
    question: "Some Question 4",
    answer: "Lorem ipsum dolor sit amet sic mun consectetur. Orci sit pretium lacuser in ultrices. 4",
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
