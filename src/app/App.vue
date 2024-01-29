<template>
  <div id="app" class="h-screen w-full flex-col overflow-hidden bg-grey-900 font-inter text-grey-100 selection:bg-accent-1 selection:text-grey-900">
    <div class="content h-screen w-full overflow-scroll p-4 py-20">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Faq />
      <Trivia />
      <Footer />
    </div>
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

// -------- Store

// -------- External

// ------------------------ Props

// ------------------------ Variables

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
