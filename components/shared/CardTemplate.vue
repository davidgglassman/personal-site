<template>
  <div
    :class="
      cn(
        'card delay-250 flex flex-col items-start justify-start rounded-lg border-2 border-white/10 bg-gray-500/10 p-6 text-gray-300 backdrop-blur-2xl transition ease-in-out hover:scale-[1.025] hover:border-white/15 hover:bg-gray-500/15',
        [props.placement],
      )
    "
  >
    <h2 class="mb-6 text-xl font-semibold text-gray-300">{{ props.title }}</h2>

    <div class="h-full w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps<{
  title: string;
  placement: string;
}>();
</script>

<style scoped></style>
