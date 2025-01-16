<template>
  <div class="flex h-screen w-full items-center justify-center bg-slate-900 p-6">
    <div class="grid h-[800px] w-[1200px] grid-cols-10 grid-rows-4 gap-4">
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
</template>

<script setup lang="ts"></script>

<style scoped></style>
