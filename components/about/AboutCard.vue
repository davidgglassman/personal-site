<template>
  <CardTemplate>
    <template #header>
      <h3>About</h3>
    </template>
    <template #content>
      <div class="mb-3 flex flex-row items-center justify-start gap-5">
        <NuxtImg
          src="/profile.jpg"
          class="size-12 rounded-full" />

        <h2 class="text-3xl font-bold text-gray-600 dark:text-gray-300">David Glassman</h2>
      </div>

      <div class="flex flex-col items-center justify-center gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, perspiciatis fugiat
          corrupti magni.
        </p>

        <p>
          Natus culpa veritatis accusamus earum quae ea est at, ipsum esse ut nesciunt odit, totam
          rerum quia.
        </p>
      </div>
    </template>
  </CardTemplate>
</template>

<script setup></script>

<style scoped></style>
