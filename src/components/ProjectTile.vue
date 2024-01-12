<template>
  <div class="tile-outer">
    <div class="tile">
      <div class="carousel">
        <Carousel ref="myCarousel" :items-to-show="1" :wrapAround="true" :autoplay="5000" :pauseAutoplayOnHover="true">
          <Slide v-for="slide in 10" :key="slide" @click="onClick(slide)">
            <img class="carousel-image" :src="image" alt="Some picture" />
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>

      <div class="content">
        <button class="show-hide-btn show-btn" :class="[{ 'opacity-0': showInfo }, { 'opacity-100': !showInfo }]" @click="showInfo = !showInfo">
          <Icon :name="'plus'" :class="'show-hide-btn-icon'" />
        </button>

        <button class="show-hide-btn hide-btn" :class="[{ 'opacity-0': !showInfo }, { 'opacity-100': showInfo }]" @click="showInfo = !showInfo">
          <Icon :name="'minus'" :class="'show-hide-btn-icon'" />
        </button>

        <div class="header">
          <h3 class="header-name">{{ name }}</h3>
          <h4 class="header-info">{{ info }}</h4>
        </div>

        <div class="info" :class="{ 'is-open': showInfo }">
          <div class="info-content">{{ content }}</div>
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

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

// ------------------------ Props

const props = defineProps({
  image: String,
  name: String,
  info: String,
  content: String,
});

// ------------------------ Variables

let showInfo = ref(false);
const myCarousel = ref(null);

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style scoped>
.tile-outer {
  margin-bottom: 2em;
}
.tile {
  min-width: 300px;
  max-width: 800px;
  border: 1px solid rgb(156, 163, 175);
}

.carousel {
  position: relative;
}

.carousel-image {
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgb(156, 163, 175);
  object-fit: cover;
  margin: 0px;
  padding: 0px;
}

.content {
  width: full;
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 0px;
  position: relative;
}

@media (min-width: 768px) {
  .content {
    padding-top: 0.5rem;
  }
}

.show-hide-btn {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 9999px;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
}

@media (min-width: 768px) {
  .show-hide-btn {
    margin-top: 1.5rem;
  }
}

.show-btn {
  border-color: rgb(74, 222, 128);
  background-color: rgb(74, 222, 128);
}

.hide-btn {
  border-color: rgb(248, 113, 113));
  background-color: rgb(248, 113, 113);
}

.show-hide-btn-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.header {
  margin-bottom: 2rem;
}

.header-name {
  font-size: 1.25rem;
  line-height: 0.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.header-info {
  font-size: 0.875rem;
  line-height: 0.5rem;
  color: rgb(75 85 99);
}

.info {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-out;
}

.info.is-open {
  grid-template-rows: 1fr;
  padding-bottom: 2rem;
}

.info-content {
  width: full;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: -0.025em;
  text-align: justify;
  overflow: hidden;
}

@media (min-width: 768px) {
  .info-content {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
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
