<template>
  <a
    :href="href"
    target="_blank">
    <button
      class="flex size-12 items-center justify-center rounded-xl border border-gray-200 p-2 transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700">
      <Icon
        :name="iconName"
        class="size-7 text-gray-400/70 dark:text-gray-400" />
    </button>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  iconName: string;
  href: string;
}>();
</script>
