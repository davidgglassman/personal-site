<template>
  <div class="mb-6 flex justify-between align-middle">
    <h1 class="text-2xl font-bold sm:text-3xl lg:text-5xl">{{ label }}</h1>

    <div class="flex-row-standard h-auto gap-8">
      <button @click="expandSection(false)">
        <Icon name="chevron_up" class="h-7 w-7" />
      </button>

      <button @click="expandSection(true)">
        <Icon name="chevron_down" class="h-7 w-7" />
      </button>
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
  id: String,
  label: String,
});

// ------------------------ Variables

const dataStore = useDataStore();

// ------------------------ Composables

// ------------------------ Computed

// ------------------------ Functions

const expandSection = (state) => {
  dataStore.setExpanded(props.id, state);
};
// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
