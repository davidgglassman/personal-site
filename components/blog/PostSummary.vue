<template>
  <NuxtLink :to="data._path" class="flex h-10 w-full items-center justify-between text-lg hover:border-2 hover:border-dashed hover:border-grey-400 hover:px-2 hover:dark:border-grey-700 lg:text-xl">
    <p class="text-sm font-medium decoration-grey-500 sm:text-base lg:font-semibold">{{ data.title }}</p>
    <p class="hidden text-xs font-medium text-grey-600 lg:inline lg:text-sm">{{ formattedDate }}</p>
  </NuxtLink>
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

// ------------------------ Composables

// ------------------------ Computed

const formattedDate = computed(() => {
  const { date } = useFormattedDateTime(props.data.date);

  return date.value;
});
// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
