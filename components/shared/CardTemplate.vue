<template>
  <div
    :class="
      cn(
        'card delay-250 flex flex-col items-start justify-start rounded-lg border-2 border-gray-400/10 bg-gray-300/10 p-6 backdrop-blur-2xl transition ease-in-out hover:scale-[1.025] hover:border-gray-400/15 hover:bg-gray-300/20 dark:border-white/10 dark:bg-gray-500/10 dark:hover:border-white/15 dark:hover:bg-gray-500/15',
        className,
      )
    "
    :style="{
      order: priority !== undefined ? priority : 999,
      gridColumn: fixed ? span : 'span 3',
      height: 'fit-content',
    }">
    <div class="w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string;
  priority?: number;
  fixed?: boolean;
  span?: string;
}

withDefaults(defineProps<Props>(), {
  className: "",
  priority: 999,
  fixed: false,
  span: "auto",
});
</script>

<style scoped></style>
