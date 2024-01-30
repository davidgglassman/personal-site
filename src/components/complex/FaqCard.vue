<template>
  <div class="size-full">
    <div class="flex h-auto w-full flex-row items-center justify-between px-5">
      <p>{{ data.question }}</p>

      <Button class="h-9 w-9" @click="OnShowHideClick()">
        <div class="flex-row-standard">
          <p class="text-2xl font-semibold text-primary-2">{{ expanded ? "-" : "+" }}</p>
        </div>
      </Button>
    </div>

    <div v-show="expanded">
      <hr class="my-4 h-px border-0 bg-grey-500" />
      <p class="mt-4 px-5 text-justify text-lg leading-snug tracking-tight text-grey-300">{{ data.answer }}</p>
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import Button from "../atomic/Button.vue";

// -------- Vue

import { ref } from "vue";

// -------- Store

// -------- External

// ------------------------ Props

const props = defineProps({
  data: Object,
});

// ------------------------ Variables

let expanded = ref(false);

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
