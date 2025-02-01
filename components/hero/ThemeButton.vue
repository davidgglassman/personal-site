<template>
  <button
    :class="[buttonClasses]"
    @click="$emit('setTheme')">
    <Icon
      :name="iconName"
      :class="[iconSize, iconClasses]" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconName: string;
  iconSize?: string;
  isActive: boolean;
}>();

defineEmits<{
  setTheme: [];
}>();

const buttonClasses = computed(() =>
  props.isActive
    ? "flex size-12 items-center justify-center rounded-xl border p-2 transition-colors border-gray-300 bg-gray-200/50 dark:border-gray-600 dark:bg-gray-800/50"
    : "flex size-12 items-center justify-center rounded-xl border p-2 transition-colors border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700",
);

const iconClasses = computed(() =>
  props.isActive ? "text-gray-500/80 dark:text-gray-300" : "text-gray-400/70 dark:text-gray-400",
);
</script>
