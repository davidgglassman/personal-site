<template>
  <a
    :href="href"
    target="_blank">
    <button>
      <NuxtImg
        :src="src"
        class="size-6" />
    </button>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  href: string;
}>();
</script>
