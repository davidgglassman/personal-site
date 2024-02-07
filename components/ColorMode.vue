<template>
  <ClientOnly>
    <button class="flex-row-standard border-grey-600 dark:bg-grey-800 h-8 w-8 rounded-full border bg-grey-200 dark:border-grey-300">
      <Icon :name="'dark-mode'" class="h-6 w-6 text-grey-700" :class="{ hidden: colorMode.value === 'dark' }" @click="colorMode.preference = 'dark'" />
      <Icon :name="'light-mode'" class="h-6 w-6 text-grey-100" :class="{ hidden: colorMode.value === 'light' }" @click="colorMode.preference = 'light'" />
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
