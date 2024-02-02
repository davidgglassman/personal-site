<template>
  <div class="mt-4 min-w-[360px]">
    <div class="flex flex-row">
      <span class="mr-2 text-lg text-grey-300">I'm a</span>
      <div id="functions" ref="functions" class="relative h-8 w-48 overflow-hidden border-b-2 border-dashed border-b-accent-1 text-lg font-semibold" />
      <span class="ml-2 text-lg text-grey-300">who</span>
    </div>

    <div class="mt-2 flex flex-row">
      <div id="actions" ref="actions" class="relative h-8 w-80 overflow-hidden border-b-2 border-dashed border-b-accent-1 text-lg font-semibold" />
    </div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Components

// -------- Vue

import { onMounted, ref } from "vue";

// -------- Store

// -------- External

// ------------------------ Props

// ------------------------ Variables

let currentIndex = ref(0);

const functions = ref(null);
const actions = ref(null);

const wordGroups = [
  {
    function: "software developer 1",
    action: "something something something 1",
  },
  {
    function: "software developer 2",
    action: "something something something 2",
  },
];

// ------------------------ Computed

// ------------------------ Functions

const slideOutCurrentWord = (currentWord) => {
  if (currentWord) {
    currentWord.style.transform = "translateY(100%)";
    currentWord.style.opacity = "0";
  }
};

const createNewWord = (word) => {
  const el = document.createElement("div");

  el.classList.add("word");
  el.style.transform = "translateY(-100%)";
  el.style.opacity = "0";
  el.innerText = word;

  return el;
};

const changeWord = (el, key) => {
  if (el?.value) {
    const currentWord = el.value.querySelector(".word");

    const newWordElement = createNewWord(wordGroups[currentIndex.value][key]);
    el.value.appendChild(newWordElement);

    setTimeout(() => {
      newWordElement.style.transform = "translateY(0)";
      newWordElement.style.opacity = "1";
      slideOutCurrentWord(currentWord);
    }, 20);

    setTimeout(() => {
      if (currentWord && el?.value) {
        el.value.removeChild(currentWord);
      }
    }, 2000);
  }
};

const changeWords = () => {
  changeWord(functions, "function");
  changeWord(actions, "action");

  currentIndex.value = (currentIndex.value + 1) % wordGroups.length;
};

// ------------------------ Events

// -------- Lifecycle Hooks

onMounted(() => {
  changeWords();
  setInterval(changeWords, 4000);
});

// -------- Watch
</script>

<style>
.word {
  position: absolute;
  width: 100%;
  transition:
    transform 2s ease,
    opacity 2s ease;
}
</style>
