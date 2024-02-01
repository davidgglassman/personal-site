<template>
  <div id="app" class="h-screen w-full flex-col overflow-hidden bg-grey-900 text-left font-inter text-sm leading-relaxed tracking-wide text-grey-100 selection:bg-accent-1 selection:text-grey-900 xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl">
    <template v-if="isMobile">
      <div class="content h-screen w-full overflow-scroll p-4 py-20 xs:p-10 xs:py-20 sm:p-14 sm:py-20 md:p-20 md:py-20">
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
      <div class="h-screen w-full">
        <div class="fixed flex h-full w-1/2 flex-col items-end justify-start overflow-hidden py-20" ref="leftColumn">
          <div class="w-[28rem] xl:w-[38rem] xl2:w-[46rem]">
            <Header />
            <Navigation />
          </div>
        </div>
        <div class="absolute left-1/2 flex h-full w-1/2 flex-col items-start justify-start overflow-y-scroll py-20" ref="rightColumn">
          <div class="w-[28rem] xl:w-[38rem] xl2:w-[46rem]">
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

import { ref, onMounted } from "vue";

// -------- Store

// -------- External

import { useMatchMedia } from "../composables/useMatchMedia";

// ------------------------ Props

// ------------------------ Variables

const isMobile = useMatchMedia("(max-width: 1024px)");

const leftColumn = ref(null);
const rightColumn = ref(null);

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

onMounted(() => {
  leftColumn.value.addEventListener("wheel", (event) => {
    rightColumn.value.scrollBy(0, event.deltaY);
  });
});

// -------- Watch
</script>

<style scoped>
.content {
  overscroll-behavior: none !important;
}
</style>
