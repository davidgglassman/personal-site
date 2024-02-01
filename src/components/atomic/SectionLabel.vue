<template>
  <div class="relative mb-11 inline-flex w-full items-center justify-center" ref="comp" v-intersection-observer="onIntersectionObserver">
    <hr class="h-px w-full border-0 bg-grey-100" />
    <span class="absolute left-1/2 -translate-x-1/2 bg-grey-900 px-3 text-sm font-bold tracking-widest text-grey-100">{{ label.toUpperCase() }}</span>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import { ref, watch } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

// -------- Store

import { useDataStore } from "../../store/DataStore";

// -------- External

// ------------------------ Props

const props = defineProps({
  label: String,
});

// ------------------------ Variables

const comp = ref(null);

const dataStore = useDataStore();

// ------------------------ Computed

// ------------------------ Functions

const onIntersectionObserver = ([{ isIntersecting }]) => {
  dataStore.setNavItemVisibility(props.label, isIntersecting);
};

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch

watch(
  () => dataStore.last_selected_nav_item,
  (data) => {
    if (props.label === data) {
      comp.value.scrollIntoView({ behavior: "smooth" });
    }
  },
);
</script>

<style scoped></style>
