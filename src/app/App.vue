<template>
  <div id="app" class="xs:text-base h-screen w-full flex-col overflow-hidden bg-grey-900 text-left font-inter text-sm leading-relaxed tracking-wide text-grey-100 selection:bg-accent-1 selection:text-grey-900 sm:text-lg md:text-xl lg:text-lg xl:text-xl">
    <template v-if="isMobile">
      <div class="content xs:p-10 xs:py-20 h-screen w-full overflow-scroll p-4 py-20 sm:p-14 sm:py-20 md:p-20 md:py-20">
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
        <div class="flex-row-standard xl2:gap-48 h-full gap-14 xl:gap-28">
          <div class="h-full w-[25rem] p-4 pt-28 xl:w-[28rem]">
            <Header />
            <Navigation />
          </div>
          <div class="h-full w-[30rem] overflow-auto p-4 pt-28 xl:w-[42rem]">
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
