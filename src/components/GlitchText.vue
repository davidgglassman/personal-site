<template>
  <p class="glitch inline-block" @mouseover="isHovering = true" @mouseenter="isHovering = true" @mousedown="isHovering = true" @touchstart="isHovering = true" @mouseleave="isHovering = false" @mouseout="isHovering = false" @mouseup="isHovering = false" @touchend="isHovering = false" @touchcancel="isHovering = false">
    <span aria-hidden="true">{{ text }}</span
    >{{ text }}<span aria-hidden="true">{{ text }}</span>
  </p>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

// -------- Store

// -------- External

// ------------------------ Props

const props = defineProps({
  text: String,
});

// ------------------------ Variables

let isHovering = false;

// ------------------------ Computed

// ------------------------ Functions

function setValues(redOffsetX, redOffsetY, greenOffsetX, greenOffsetY, blueOffsetX, blueOffsetY, left, right, blur) {
  let r = document.querySelector(":root");

  if (r) {
    r.style.setProperty("--red-offset-x", `${redOffsetX}em`);
    r.style.setProperty("--red-offset-y", `${redOffsetY}em`);
    r.style.setProperty("--green-offset-x", `${greenOffsetX}em`);
    r.style.setProperty("--green-offset-y", `${greenOffsetY}em`);
    r.style.setProperty("--blue-offset-x", `${blueOffsetX}em`);
    r.style.setProperty("--blue-offset-y", `${blueOffsetY}em`);
    r.style.setProperty("--left", `${left}em`);
    r.style.setProperty("--right", `${right}em`);
    r.style.setProperty("--blur", `${blur}em`);
  }
}

function getRandom() {
  return (Math.random() * 0.1 - 0.05) * 1.75;
}

function changeValues() {
  var allowChange = Math.random() > 0.75 && isHovering;
  var redOffsetX = getRandom();
  var redOffsetY = getRandom();
  var greenOffsetX = getRandom();
  var greenOffsetY = getRandom();
  var blueOffsetX = getRandom();
  var blueOffsetY = getRandom();
  var left = getRandom();
  var right = getRandom();
  var blur = getRandom();

  if (allowChange) {
    setValues(redOffsetX, redOffsetY, greenOffsetX, greenOffsetY, blueOffsetX, blueOffsetY, left, right, blur);
  } else {
    setValues(0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}

setInterval(changeValues, 100);

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
:root {
  --red-offset-x: 0em;
  --red-offset-y: 0em;
  --green-offset-x: 0em;
  --green-offset-y: 0em;
  --blue-offset-x: 0em;
  --blue-offset-y: 0em;
  --blur: 0em;
  --left: 0em;
  --right: 0em;
}

.glitch {
  position: relative;

  text-shadow:
    var(--red-offset-x) var(--red-offset-y) var(--blur) rgba(255, 0, 0, 0.25),
    var(--green-offset-x) var(--green-offset-y) var(--blur) rgba(0, 255, 0, 0.25),
    var(--blue-offset-x) var(--blue-offset-y) var(--blur) rgba(0, 0, 255, 0.25);
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  transform: translateX(var(--left));
  opacity: 0.8;
}

.glitch span:last-child {
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  transform: translateX(var(--right));
  opacity: 0.8;
}
</style>
