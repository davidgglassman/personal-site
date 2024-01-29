<template>
  <div id="app" class="size-full flex-col overscroll-none bg-grey-900 px-4 py-20 font-inter text-grey-100 selection:bg-accent-1 selection:text-grey-900">
    <Header />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Faq />
    <Trivia />
    <Footer />
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import Header from "../components/sections/Header.vue";
import About from "../components/sections/About.vue";
import Experience from "../components/sections/Experience.vue";
import Skills from "../components/sections/Skills.vue";
import Projects from "../components/sections/Projects.vue";
import Faq from "../components/sections/Faq.vue";
import Trivia from "../components/sections/Trivia.vue";
import Footer from "../components/sections/Footer.vue";

// -------- Event Bus

// -------- Store

// -------- Router

// -------- External

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style scoped></style>
