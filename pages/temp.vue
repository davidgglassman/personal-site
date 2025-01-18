<template>
  <div class="h-screen w-full bg-gray-100 dark:bg-black">
    <div
      class="grid-background absolute inset-0 z-0 flex h-full w-full items-center justify-center p-6">
      <!-- Grid "flashlight" mask container -->
      <div
        class="grid-mask absolute inset-0 z-10"
        :style="{
          mask: `radial-gradient(300px at ${x}px ${y}px, white, transparent)`,
        }">
        <!-- Brighter grid that shows through mask -->
        <div class="grid-background-bright h-full w-full blur-sm"></div>
      </div>
      <!-- Grid Content -->
      <div class="z-20 max-h-[800px] w-[1200px] overflow-y-auto">
        <div
          class="grid auto-rows-min grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-6 p-6"
          style="grid-auto-rows: min-content">
          <AboutCard />
          <ExperienceCard />
          <TechStackCard />
          <ResumeCard />
          <SocialCard />
          <FaqCard />
          <BlogCard />
          <BooksCard />
          <ThemeCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from "@vueuse/core";
import BooksCard from "~/components/current/books/BooksCard.vue";

const { x, y } = useMouse();
</script>

<style scoped>
.grid-background {
  background: linear-gradient(to right, #a3a3a315 1px, transparent 1px),
    linear-gradient(to bottom, #80808015 1px, transparent 1px);
  background-size: 24px 24px;
}

.grid-background-bright {
  background: linear-gradient(to right, #ffffff 1px, transparent 1px),
    linear-gradient(to bottom, #ffffff 1px, transparent 1px);
  background-size: 48px 48px;
}

.grid-mask {
  -webkit-mask-size: cover;
  mask-size: cover;
}
</style>
