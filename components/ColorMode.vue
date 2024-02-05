<template>
  <button class="flex-row-standard bg-grey-200 absolute right-0 top-0 z-10 mb-10 h-8 w-8 rounded-full border border-grey-400 text-grey-300 xl:m-4 xl:mx-6 dark:border-grey-400 dark:bg-grey-700">
    <Icon v-if="colorMode.value === 'light'" :name="'dark-mode'" class="h-6 w-6 text-grey-500" @click="colorMode.preference = 'dark'" />
    <Icon v-if="colorMode.value === 'dark'" :name="'light-mode'" class="h-6 w-6 text-grey-100" @click="colorMode.preference = 'light'" />
  </button>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
