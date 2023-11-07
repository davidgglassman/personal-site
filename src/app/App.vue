<template>
  <div id="app" class="w-full h-screen bg-gray-50">
    <router-view></router-view>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import { onMounted } from "vue";

// -------- Event Bus

// -------- Store

// -------- Router

import { useRouter } from "vue-router";

// -------- External

// ------------------------ Props

// ------------------------ Variables

const router = useRouter();

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

onMounted(() => {
  router.push("/");
});

// -------- Event Bus

// -------- Watch
</script>

<style scoped></style>
