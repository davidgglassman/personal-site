<template>
  <div id="app" class="h-screen w-full flex-col overflow-hidden bg-grey-900 text-left font-inter text-sm leading-normal tracking-widest text-grey-100 selection:bg-accent-1 selection:text-grey-900">
    <template v-if="isMobile">
      <div class="content h-screen w-full overflow-scroll p-4 py-20 sm:p-10 sm:py-20 md:p-16 md:py-20">
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

    <template v-else>
      <div class="flex-col-standard h-screen w-full">
        <div class="flex-row-standard h-full gap-24">
          <div class="h-full w-[26rem] p-4 pt-28">
            <Header />
            <Navigation />
          </div>
          <div class="h-full w-[36rem] overflow-auto p-4 pt-28">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Faq />
            <Trivia />
            <Footer />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Header from "../components/sections/Header.vue";
import Navigation from "../components/sections/Navigation.vue";
import About from "../components/sections/About.vue";
import Experience from "../components/sections/Experience.vue";
import Skills from "../components/sections/Skills.vue";
import Projects from "../components/sections/Projects.vue";
import Faq from "../components/sections/Faq.vue";
import Trivia from "../components/sections/Trivia.vue";
import Footer from "../components/sections/Footer.vue";

// -------- Vue

// -------- Store

// -------- External

import { useMatchMedia } from "../composables/useMatchMedia";

// ------------------------ Props

// ------------------------ Variables

const isMobile = useMatchMedia("(max-width: 1024px)");

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
