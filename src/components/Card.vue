<template>
  <section
    class="flex h-52 w-72 flex-col items-start justify-start gap-2 rounded-lg border border-[#12CAEB] p-6 pt-4 text-[#12CAEB]"
  >
    <h2 class="text-lg font-medium">{{ props.title }}</h2>

    <div class="size-full border border-dashed border-[#12CAEB] p-2 text-sm">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
// ------------------------ Imports

// -------- Components

// -------- Vue

// -------- Internal

// -------- External

// -------- Event Bus

// -------- Store

// ------------------------ Props

interface Props {
  title: string;
}

const props = defineProps<Props>();

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style scoped></style>
