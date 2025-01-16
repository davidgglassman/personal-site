<template>
  <div
    :class="
      cn(
        'card flex items-center justify-center rounded-lg border-2 border-white/10 bg-white/15 text-gray-300 backdrop-blur-2xl',
        [props.placement],
      )
    "
  >
    {{ props.title }}
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
