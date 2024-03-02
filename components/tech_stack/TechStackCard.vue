<template>
  <div class="card mb-2 size-full cursor-pointer p-0" @click="showHide">
    <div class="flex size-full items-center justify-between p-1">
      <div class="ml-2 flex w-full items-center justify-start gap-2">
        <div class="flex flex-col justify-start align-top">
          <Icon :name="icon" class="mx-3 h-5 w-5" />
        </div>

        <div class="font-semibold lg:text-lg">{{ label }}</div>
      </div>

      <button class="flex-row-standard mr-5 h-9 w-9 border-none">
        <Icon v-show="expanded" name="chevron_up" class="h-5 w-5" />
        <Icon v-show="!expanded" name="chevron_down" class="h-5 w-5" />
      </button>
    </div>

    <div v-show="expanded">
      <div class="w-full rounded-b-xl bg-grey-100 px-6 py-4 text-grey-700 dark:bg-grey-800">
        <p class="text-gray-900">{{ content }}</p>
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
  id: String,
  icon: String,
  label: String,
  content: String,
});

// ------------------------ Variables

const dataStore = useDataStore();

const expanded = ref(false);

// ------------------------ Computed

// ------------------------ Functions

const showHide = () => {
  expanded.value = !expanded.value;
};

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch

watch(
  () => dataStore.expanded[props.id],
  (data) => {
    expanded.value = data;
  },
);
</script>

<style scoped></style>
