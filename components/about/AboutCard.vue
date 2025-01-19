<template>
  <CardTemplate
    :fixed="true"
    :span="'span 5'">
    <div class="mb-3 flex flex-row items-center justify-center gap-4">
      <NuxtImg
        src="/profile.jpg"
        class="size-14 rounded-full" />

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
  </CardTemplate>
</template>

<script setup></script>

<style scoped></style>
