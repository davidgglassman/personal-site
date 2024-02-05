<template>
  <div id="app" class="h-screen w-full cursor-default flex-col overflow-hidden bg-grey-100 text-left font-inter text-base leading-relaxed tracking-normal text-grey-700 selection:bg-accent-1 selection:text-grey-900 dark:bg-grey-900 dark:text-grey-100">
    <template v-if="isMobile">
      <div class="content h-screen w-full overflow-scroll p-6 pb-20 sm:p-12 md:p-12 lg:p-20">
        <div class="relative">
          <Header />
          <ColorMode />
        </div>

        <About />
        <Experience />
        <Skills />
        <Projects />
        <Faq />
        <Trivia />
        <Footer />
      </div>
    </template>

    <template v-else>
      <ColorMode />

      <div class="h-screen w-full">
        <div class="fixed flex h-full w-1/2 flex-col items-end justify-start overflow-hidden py-20" ref="leftColumn">
          <div class="w-[28rem] xl2:w-[32rem]">
            <Header />
            <Navigation />
          </div>
        </div>
        <div class="absolute left-1/2 flex h-full w-1/2 scroll-pt-24 flex-col items-start justify-start overflow-y-scroll py-20" ref="rightColumn">
          <div class="w-[28rem] xl2:w-[32rem]">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Faq />
            <Trivia />
            <Footer />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const isMobile = useMatchMedia("(max-width: 1024px)");

const leftColumn = ref(null);
const rightColumn = ref(null);

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

onMounted(() => {
  if (leftColumn.value && rightColumn.value) {
    leftColumn.value.addEventListener("wheel", (event) => {
      rightColumn.value.scrollBy(0, event.deltaY);
    });
  }
});

// -------- Watch
</script>

<style scoped>
.content {
  overscroll-behavior: none !important;
}
</style>
