<template>
  <Section label="FAQ">
    <FaqCard v-for="(item, i) in faq.items" :key="i" :data="item" />
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

import faq from "~/data/faq.yml";

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
