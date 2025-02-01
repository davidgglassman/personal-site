<template>
  <div class="h-screen w-full overflow-y-auto bg-gray-100 dark:bg-black">
    <div class="grid-background relative min-h-screen w-full">
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
      <div
        class="relative z-20 mx-auto flex min-h-screen max-w-[600px] items-center justify-center p-4 py-8">
        <div
          class="flex h-auto w-full flex-col gap-2"
          :class="{ 'my-auto': !isScrollable }">
          <ThemeCard />
          <AboutCard />
          <SocialCard />
          <ExperienceCard expandable />
          <ResumeCard />
          <TechStackCard expandable />
          <ThisYearCard expandable />
          <FaqCard expandable />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMouse } from "@vueuse/core";
import { ref, onMounted, onUnmounted } from "vue";

const { x, y } = useMouse();
const isScrollable = ref(false);

const checkScrollable = () => {
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  isScrollable.value = docHeight > winHeight;
};

onMounted(() => {
  checkScrollable();
  window.addEventListener("resize", checkScrollable);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScrollable);
});
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
