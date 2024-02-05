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
      <div class="flex flex-col">
        <p class="text-base font-semibold tracking-wide text-grey-100">{{ data.name }}</p>
        <p class="text-base font-medium text-accent-1">{{ data.info }}</p>
      </div>

      <Button class="h-9 w-9 border-none" @click="showHide">
        <div class="flex-row-standard text-grey-400">
          <Icon v-show="expanded" name="chevron_up" class="h-6 w-6" />
          <Icon v-show="!expanded" name="chevron_down" class="h-6 w-6" />
        </div>
      </Button>
    </div>

    <div v-show="expanded">
      <hr class="my-5 h-px border-0 bg-grey-500" />
      <p class="mt-5 px-5 text-grey-300">{{ data.content }}</p>
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
  data: Object,
});

// ------------------------ Variables

const expanded = ref(false);

// ------------------------ Computed

// ------------------------ Functions

const showHide = () => {
  expanded.value = !expanded.value;
};

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
