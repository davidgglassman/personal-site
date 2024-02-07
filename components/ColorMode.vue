<template>
  <ClientOnly>
    <button class="flex-row-standard dark:bg-grey-950 h-10 w-10 rounded-full border border-grey-400 bg-grey-200 opacity-75 dark:border-grey-700 dark:text-grey-300">
      <Icon :name="'dark-mode'" class="h-8 w-8 text-grey-800" :class="{ hidden: colorMode.value === 'dark' }" @click="colorMode.preference = 'dark'" />
      <Icon :name="'light-mode'" class="h-8 w-8 text-grey-100" :class="{ hidden: colorMode.value === 'light' }" @click="colorMode.preference = 'light'" />
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
