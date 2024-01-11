<template>
  <div class="w-auto h-auto">
    <div class="tile w-full h-auto border border-gray-400 rounded-xl">
      <img :src="image" alt="Some picture" class="image w-full border-b border-b-gray-400 object-cover m-0 p-0 rounded-t-xl" />

      <div class="content w-full p-4 pb-0 relative">
        <button class="w-10 h-10 rounded-full absolute top-0 right-0 m-4 flex-row-standard bg-green-400 text-white" :class="[{ 'opacity-0': show }, { 'opacity-100': !show }]" @click="show = !show">
          <Icon :name="'plus'" :class="'w-6 h-6'" />
        </button>

        <button class="w-10 h-10 rounded-full absolute top-0 right-0 m-4 flex-row-standard bg-red-400 text-white" :class="[{ 'opacity-0': !show }, { 'opacity-100': show }]" @click="show = !show">
          <Icon :name="'minus'" :class="'w-6 h-6'" />
        </button>

        <div class="header mb-4">
          <h3 class="text-xl font-bold tracking-tight">{{ name }}</h3>
          <h4 class="text-sm text-gray-600">{{ info }}</h4>
        </div>

        <div class="info-wrapper" :class="{ 'is-open pb-4': show }">
          <div class="info text-base md:text-lg leading-snug tracking-tight text-justify">{{ content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Icon from "./Icon.vue";
// -------- Vue

import { ref } from "vue";

// -------- Event Bus

// -------- Store

// -------- Router

// -------- External

// ------------------------ Props

const props = defineProps({
  image: String,
  name: String,
  info: String,
  content: String,
});

// ------------------------ Variables

let show = ref(false);

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style scoped>
.tile {
  min-width: 300px;
  max-width: 800px;
}

.image {
  height: 300px;
}

.info-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-out;
}

.info-wrapper.is-open {
  grid-template-rows: 1fr;
}

.info {
  overflow: hidden;
}

.rotate-0 {
  transform: rotate(0deg);
  transition: all 0.5s ease;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: all 0.5s ease;
}

.opacity-0 {
  opacity: 0;
  transition: all 0.5s ease;
}

.opacity-100 {
  opacity: 100;
  transition: all 0.5s ease;
}
</style>
