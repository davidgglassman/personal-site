<template>
  <div class="card mb-2 size-full cursor-pointer p-0" @click="showHide">
    <div class="flex h-auto w-full flex-row items-center justify-between gap-2 px-6 py-1">
      <p class="tracking-wide">{{ question }}</p>

      <button class="flex-row-standard h-9 w-9 border-none">
        <Icon v-show="expanded" name="chevron_up" class="h-5 w-5" />
        <Icon v-show="!expanded" name="chevron_down" class="h-5 w-5" />
      </button>
    </div>

    <div v-show="expanded">
      <div class="w-full rounded-b-xl bg-grey-100 px-6 py-4 text-grey-700 dark:bg-grey-800">
        <slot />
      </div>
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
  question: String,
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
