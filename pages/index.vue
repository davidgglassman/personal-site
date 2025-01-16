<template>
  <div class="h-screen w-full bg-black">
    <div
      class="grid-background absolute inset-0 z-0 flex h-full w-full items-center justify-center p-6"
    >
      <!-- Grid mask container -->
      <div
        class="grid-mask absolute inset-0 z-10"
        :style="{
          mask: `radial-gradient(300px at ${x}px ${y}px, white, transparent)`,
        }"
      >
        <!-- Brighter grid that shows through mask -->
        <div class="grid-background-bright h-full w-full blur-sm"></div>
      </div>

      <!-- Original content -->
      <div
        v-show="true"
        class="z-20 grid h-[800px] w-[1200px] grid-cols-10 grid-rows-4 gap-6"
      >
        <Card
          title="Item 1"
          placement="col-span-4 row-span-3"
        />
        <Card
          title="Item 2"
          placement="col-span-3 row-span-1 lg:col-span-4"
        />
        <Card
          title="Item 3"
          placement="col-span-3 row-span-1 lg:col-span-2"
        />
        <Card
          title="Item 4"
          placement="col-span-3 row-span-2"
        />
        <Card
          title="Item 5"
          placement="col-span-3 row-span-2"
        />
        <Card
          title="Item 6"
          placement="col-span-4 row-span-1"
        />
        <Card
          title="Item 7"
          placement="col-span-6 row-span-1"
        />
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
  background: linear-gradient(to right, #ffffff 1px, transparent 1px),
    linear-gradient(to bottom, #ffffff 1px, transparent 1px);
  background-size: 48px 48px;
}

.grid-mask {
  -webkit-mask-size: cover;
  mask-size: cover;
}
</style>
