<template>
  <ClientOnly>
    <button class="flex-row-standard h-8 w-8 rounded-full border border-grey-400 bg-grey-100 opacity-75 dark:border-grey-700 dark:bg-grey-950 dark:text-grey-300 sm:mt-0 md:mx-0 lg:h-10 lg:w-10">
      <Icon :name="'moon'" class="h-6 w-6 text-grey-800" :class="{ hidden: colorMode.value === 'dark' }" @click="colorMode.preference = 'dark'" />
      <Icon :name="'sun'" class="h-6 w-6 text-grey-100" :class="{ hidden: colorMode.value === 'light' }" @click="colorMode.preference = 'light'" />
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
