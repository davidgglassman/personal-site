<template>
  <NuxtLink :to="data._path" class="flex h-10 w-full items-center justify-between text-lg lg:text-xl">
    <p class="link text-sm font-medium sm:text-base lg:font-semibold">{{ data.title }}</p>
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

<style scoped>
.link {
  @apply underline decoration-primary-2 underline-offset-[6px] hover:text-primary-2;
}
</style>
