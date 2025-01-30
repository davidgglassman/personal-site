<template>
  <div class="h-screen w-full bg-gray-100 dark:bg-black">
    <div
      class="grid-background absolute inset-0 z-0 flex h-screen w-full items-center justify-center">
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
      <div class="z-20 h-screen max-w-[600px] overflow-y-auto p-4 py-8">
        <div class="flex h-auto w-full flex-col gap-2">
          <ThemeCard />
          <AboutCard />
          <SocialCard />
          <ExperienceCard expandable />
          <ResumeCard />
          <TechStackCard expandable />
          <ThisYearCard expandable />
          <FaqCard expandable />
          <BlogCard expandable />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<style scoped>
.grid-background {
  background: linear-gradient(to right, #a3a3a315 1px, transparent 1px),
    linear-gradient(to bottom, #80808015 1px, transparent 1px);
  background-size: 24px 24px;
}

.grid-background-bright {
  background: linear-gradient(to right, #48c5ffd0 2px, transparent 1px),
    linear-gradient(to bottom, #48c5ffd0 2px, transparent 1px);
  background-size: 24px 24px;
}

.grid-mask {
  -webkit-mask-size: cover;
  mask-size: cover;
}
</style>
