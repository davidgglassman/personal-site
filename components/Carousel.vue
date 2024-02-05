<template>
  <div>
    <slot :currentSlide="currentSlide" />

    <div v-if="navigation === undefined ? true : navigation" class="absolute flex size-full items-center justify-center px-4 py-0 text-black">
      <div class="flex flex-1">
        <Icon name="chevron_left" class="h-5 w-5 cursor-pointer text-grey-400" @click="prevSlide" />
      </div>
      <div class="flex flex-1 justify-end">
        <Icon name="chevron_right" class="h-5 w-5 cursor-pointer text-grey-400" @click="nextSlide" />
      </div>
    </div>

    <div v-if="pagination === undefined ? true : pagination" class="absolute bottom-3 flex w-full items-center justify-center gap-3">
      <span v-for="(_, i) in count" :key="i" :class="{ active: i + 1 === currentSlide }" class="h-1 w-5 cursor-pointer rounded-full bg-grey-400 shadow-md" @click="goToSlide(i)" />
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

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

  timer.restart();
};

const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = props.count;
    return;
  }

  currentSlide.value -= 1;

  timer.restart();
};

const goToSlide = (index) => {
  currentSlide.value = index + 1;
  timer.restart();
};

const onTimerExpired = () => {
  nextSlide();
  timer.restart();
};

const timer = new DebounceTimer(onTimerExpired, props.timeout === undefined ? 5000 : props.timeout);

if (props.autoPlay === undefined || props.autoPlay) {
  timer.restart();
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
