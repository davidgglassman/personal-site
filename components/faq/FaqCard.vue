<template>
  <div class="card mb-2 size-full p-0">
    <div class="flex h-auto w-full flex-row items-center justify-between px-6 py-4">
      <p class="font-semibold tracking-wide">{{ data.question }}</p>

      <button class="flex-row-standard h-9 w-9 border-none" @click="showHide">
        <Icon v-show="expanded" name="chevron_up" class="h-6 w-6" />
        <Icon v-show="!expanded" name="chevron_down" class="h-6 w-6" />
      </button>
    </div>

    <div v-show="expanded">
      <p class="w-full rounded-b-xl bg-grey-100 px-6 py-4 text-grey-700 dark:bg-grey-800">{{ data.answer }}</p>
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
