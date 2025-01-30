<template>
  <CardTemplate>
    <template #header>
      <h2 class="text-lg font-semibold text-gray-500 dark:text-gray-300">Tech Stack</h2>
    </template>

    <template #content>
      <div class="mt-3 flex h-full w-full flex-wrap items-start justify-start gap-6">
        <TechStackButton
          src="/html.svg"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML" />

        <TechStackButton
          src="/css.svg"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS" />

        <TechStackButton
          src="/javascript.svg"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />

        <TechStackButton
          src="/typescript.svg"
          href="https://www.typescriptlang.org/" />

        <TechStackButton
          src="/react.svg"
          href="https://react.dev/" />

        <TechStackButton
          src="/vue.svg"
          href="https://vuejs.org/" />

        <TechStackButton
          src="/tailwind.svg"
          href="https://tailwindcss.com/" />

        <TechStackButton
          src="/figma.svg"
          href="https://www.figma.com/" />

        <TechStackButton
          src="/csharp.svg"
          href="https://dotnet.microsoft.com/en-us/languages/csharp" />

        <TechStackButton
          src="/python.svg"
          href="https://www.python.org/" />

        <TechStackButton
          src="/lua.svg"
          href="https://www.lua.org/" />

        <TechStackButton
          src="/java.svg"
          href="https://www.java.com/en/" />

        <TechStackButton
          src="/photoshop.svg"
          href="https://www.adobe.com/products/photoshop.html" />

        <TechStackButton
          src="/electron.svg"
          href="https://www.electronjs.org/" />

        <TechStackButton
          src="/nuxt.svg"
          href="https://nuxt.com/" />

        <TechStackButton
          src="/mongodb.svg"
          href="https://www.mongodb.com/" /></div
    ></template>
  </CardTemplate>
</template>

<script setup></script>

<style scoped></style>
