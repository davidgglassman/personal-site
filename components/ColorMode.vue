<template>
  <ClientOnly>
    <button class="flex-row-standard h-10 w-10 rounded-full border border-grey-400 bg-grey-200 dark:border-grey-300 dark:bg-grey-800">
      <Icon :name="'dark-mode'" class="h-8 w-8 text-grey-900" :class="{ hidden: colorMode.value === 'dark' }" @click="colorMode.preference = 'dark'" />
      <Icon :name="'light-mode'" class="h-8 w-8 text-grey-100" :class="{ hidden: colorMode.value === 'light' }" @click="colorMode.preference = 'light'" />
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
