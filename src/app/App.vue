<template>
  <div id="app" class="w-full h-full bg-custom-blue-dark p-4 flex-col text-custom-white font-inter-bold selection:text-custom-gray-dark selection:bg-custom-green-light">
    <h1 class="mt-8 text-4xl font-bold tracking-tight">David Glassman</h1>

    <div class="mt-4 w-full h-20 border-custom-white border flex-col-standard">Summary Section</div>
    <div class="mt-8 w-full h-10 border-custom-white border flex-col-standard">Links/Socials Section</div>
    <div class="about mt-28 w-full h-96 border-custom-white border flex-col-standard">About Section</div>
    <div class="experience mt-16 w-full h-10 border-custom-white border flex-col-standard">Experience Section</div>
    <div class="projects mt-16 w-full h-10 border-custom-white border flex-col-standard">Projects Section</div>
    <div class="mt-16 w-full h-48 border-custom-white border flex-col-standard">Footer Section</div>
    <!-- <Header />
    <About />
    <Projects />
    <Resume />
    <Footer /> -->
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

/* import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Resume from "../components/Resume.vue";
import Footer from "../components/Footer.vue"; */

// -------- Vue

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

<style scoped>
.about {
  height: 35rem;
}

.experience {
  height: 84rem;
}

.projects {
  height: 84rem;
}
</style>
