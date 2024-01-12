<template>
  <div id="app" class="app-wrapper">
    <ProjectTile :image="'https://placehold.co/600x300'" :name="'Project Name'" :info="'Additional Project Info'" :content="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas integer. Auctor urna nunc id cursus metus aliquam eleifend mi. Sed turpis tincidunt id aliquet risus feugiat. Dui nunc mattis enim ut tellus elementum. Aliquet eget sit amet tellus cras adipiscing enim. Ultricies mi quis hendrerit dolor magna eget est. Quis vel eros donec ac odio tempor. Erat nam at lectus urna. Sed faucibus turpis in eu mi bibendum neque. Vel eros donec ac odio tempor orci dapibus ultrices in. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. A diam maecenas sed enim ut sem viverra aliquet eget.'" />
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

import ProjectTile from "../components/ProjectTile.vue";

// -------- Vue

// -------- Event Bus

// -------- Store

// -------- Router

// -------- External

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Event Bus

// -------- Watch
</script>

<style>
@font-face {
  font-family: "Rubik";
  src: url("../assets/fonts/rubik.ttf") format("truetype");
}

@font-face {
  font-family: "Rubik Italic";
  src: url("../assets/fonts/rubik_italic.ttf") format("truetype");
}

html {
  --smoke: rgba(128, 128, 128, 0.5);
  margin: 0px;
  padding: 0px;
  background-color: rgb(245, 245, 245);
}

* {
  font-family: "Rubik";
  font-weight: 400;
  text-transform: none;
  scrollbar-width: thin;
  scrollbar-color: var(--smoke) transparent;
}

*::-webkit-scrollbar {
  width: 0.35rem;
  height: 0.35rem;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--smoke);
  border-radius: 3px;
}

.app-wrapper {
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: auto;
}
</style>
