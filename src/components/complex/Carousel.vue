<template>
  <div>
    <slot :currentSlide="currentSlide" />

    <div v-if="navigation === undefined ? true : navigation" class="size-full absolute flex items-center justify-center px-4 py-0 text-black">
      <div class="flex flex-1">
        <i class="fa-solid fa-chevron-left fa-xs cursor-pointer text-grey-500" @click="prevSlide"></i>
      </div>
      <div class="flex flex-1 justify-end">
        <i class="fa-solid fa-chevron-right fa-xs cursor-pointer text-grey-500" @click="nextSlide"></i>
      </div>
    </div>

    <div v-if="pagination === undefined ? true : pagination" class="absolute bottom-3 flex w-full items-center justify-center gap-2">
      <span v-for="(_, i) in count" :key="i" :class="{ active: i + 1 === currentSlide }" class="h-2 w-2 cursor-pointer rounded-full bg-grey-500 shadow-md" @click="goToSlide(i)" />
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import { ref } from "vue";

// -------- Store

// -------- External

// ------------------------ Props

const props = defineProps({
  name: String,
  count: Number,
  autoPlay: Boolean | undefined,
  timeout: Number | undefined,
  navigation: Boolean | undefined,
  pagination: Boolean | undefined,
});

// ------------------------ Variables

const currentSlide = ref(1);

// ------------------------ Computed

// ------------------------ Functions

const nextSlide = () => {
  if (currentSlide.value === props.count) {
    currentSlide.value = 1;
    return;
  }

  currentSlide.value += 1;
};

const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = props.count;
    return;
  }

  currentSlide.value -= 1;
};

const goToSlide = (index) => {
  currentSlide.value = index + 1;
};

const startAutoPlay = () => {
  setInterval(
    () => {
      nextSlide();
    },
    props.timeout === undefined ? 5000 : props.timeout,
  );
};

if (props.autoPlay === undefined || props.autoPlay) {
  startAutoPlay();
}

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
.active {
  @apply bg-accent-1;
}
</style>
