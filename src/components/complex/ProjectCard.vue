<template>
  <div class="size-full">
    <Carousel class="relative aspect-video w-full" v-slot="{ currentSlide }" :count="data.images.length">
      <CarouselSlide v-for="(slide, i) in data.images" :key="i">
        <div v-show="currentSlide === i + 1" class="absolute left-0 top-0 h-full max-h-full w-full">
          <img class="h-full min-w-full rounded-xl rounded-b-none object-cover" :src="slide" alt="slide" />
        </div>
      </CarouselSlide>
    </Carousel>

    <hr class="mb-5 h-px border-0 bg-grey-500" />

    <div class="flex h-auto w-full flex-row items-center justify-between px-5">
      <div class="flex-col-standard">
        <p class="text-lg font-bold text-grey-100">{{ data.name }}</p>
        <p class="text-base font-semibold text-accent-1">{{ data.info }}</p>
      </div>

      <Button class="h-9 w-9" @click="OnShowHideClick()">
        <div class="flex-row-standard">
          <p class="text-2xl font-semibold text-primary-2">{{ expanded ? "-" : "+" }}</p>
        </div>
      </Button>
    </div>

    <div v-show="expanded">
      <hr class="my-5 h-px border-0 bg-grey-500" />
      <p class="mt-5 px-5 text-justify text-lg leading-snug tracking-tight text-grey-300">{{ data.content }}</p>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Button from "../atomic/Button.vue";
import Carousel from "../complex/Carousel.vue";
import CarouselSlide from "../complex/CarouselSlide.vue";

// -------- Vue

import { ref } from "vue";

// -------- Store

// -------- External

// ------------------------ Props

const props = defineProps({
  data: Object,
});

// ------------------------ Variables

const expanded = ref(false);

// ------------------------ Computed

// ------------------------ Functions

const OnShowHideClick = () => {
  expanded.value = !expanded.value;
};

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
