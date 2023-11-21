<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex-col-standard justify-between bg-custom-gray-light" ref="splash">
      <div class="h-32"></div>

      <div>
        <h1 class="h-14 text-3xl sm:h-20 sm:mb-2 sm:text-5xl md:text-6xl md:h-24 md:mb-6 lg:text-8xl lg:h-32 lg:mb-8 text-custom-red text-center font-normal font-blackout_two_am">david glassman</h1>

        <p class="text-xs sm:text-base md:text-xl lg:text-3xl lg:tracking-wider text-custom-gray-dark text-center">Lorem ipsum dolor sit am, consectetur adipiscing elit.</p>
        <p class="text-xs sm:text-base md:text-xl lg:text-3xl lg:tracking-wider text-custom-gray-dark text-center">Lorem ipsum dolor sit am, consectetur adipiscing elit.</p>
      </div>

      <button>
        <Icon :name="'arrow_down'" class="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44" @click="showPosition()" />
      </button>
    </div>

    <div class="w-full flex-col-standard bg-custom-gray-light">
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full my-6 text-custom-red font-normal font-blackout_midnight text-center">projects</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div class="w-56 h-56 sm:w-60 sm:h-60 lg:w-80 lg:h-80 m-3 border-2 border-custom-gray-dark"></div>
        <div class="w-56 h-56 sm:w-60 sm:h-60 lg:w-80 lg:h-80 m-3 border-2 border-custom-gray-dark"></div>
        <div class="w-56 h-56 sm:w-60 sm:h-60 lg:w-80 lg:h-80 m-3 border-2 border-custom-gray-dark"></div>
        <div class="w-56 h-56 sm:w-60 sm:h-60 lg:w-80 lg:h-80 m-3 border-2 border-custom-gray-dark"></div>
        <div class="w-56 h-56 sm:w-60 sm:h-60 lg:w-80 lg:h-80 m-3 border-2 border-custom-gray-dark"></div>
        <div class="w-56 h-56 sm:w-60 sm:h-60 lg:w-80 lg:h-80 m-3 border-2 border-custom-gray-dark"></div>
      </div>

      <h1 class="w-full h-96 mt-6 text-custom-red font-normal font-blackout_midnight text-6xl text-center">articles</h1>

      <h1 class="w-full h-96 mt-6 text-custom-red font-normal font-blackout_midnight text-6xl text-center">contact</h1>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Icon from "../../components/Icon.vue";

// -------- Vue

import { ref } from "vue";

// -------- Event Bus

// -------- Store

// -------- Router

// -------- External

// ------------------------ Props

// ------------------------ Variables

const splash = ref(null);

// ------------------------ Computed

// ------------------------ Functions

const showPosition = () => {
  const splashObj = splash.value.getBoundingClientRect();

  window.scrollTo({
    top: splashObj.height,
    left: 0,
    behavior: "smooth",
  });
};

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style scoped></style>
