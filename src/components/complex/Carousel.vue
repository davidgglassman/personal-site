<template>
  <div>
    <slot :currentSlide="currentSlide" />

    <div v-if="navigation === undefined ? true : navigation" class="size-full absolute flex items-center justify-center px-4 py-0 text-black">
      <div class="flex flex-1">
        <Icon name="chevron_left" class="text-grey-400 h-5 w-5 cursor-pointer" @click="prevSlide" />
      </div>
      <div class="flex flex-1 justify-end">
        <Icon name="chevron_right" class="text-grey-400 h-5 w-5 cursor-pointer" @click="nextSlide" />
      </div>
    </div>

    <div v-if="pagination === undefined ? true : pagination" class="absolute bottom-3 flex w-full items-center justify-center gap-3">
      <span v-for="(_, i) in count" :key="i" :class="{ active: i + 1 === currentSlide }" class="bg-grey-400 h-1 w-5 cursor-pointer rounded-full shadow-md" @click="goToSlide(i)" />
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Icon from "../../components/atomic/Icon.vue";

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
