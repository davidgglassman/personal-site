<template>
  <div class="size-full">
    <div class="flex h-auto w-full flex-row items-center justify-between px-5">
      <p class="text-base font-semibold tracking-wide text-grey-500 dark:text-grey-100">{{ data.question }}</p>

      <Button class="h-9 w-9 border-none" @click="showHide">
        <div class="flex-row-standard text-grey-400">
          <Icon v-show="expanded" name="chevron_up" class="h-6 w-6" />
          <Icon v-show="!expanded" name="chevron_down" class="h-6 w-6" />
        </div>
      </Button>
    </div>

    <div v-show="expanded">
      <hr class="my-5 h-px border-0 bg-grey-500" />
      <p class="mt-5 px-5 text-grey-400 dark:text-grey-300">{{ data.answer }}</p>
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
