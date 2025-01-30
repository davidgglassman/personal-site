<template>
  <CardTemplate>
    <template #header>
      <h3>Social</h3>
    </template>

    <template #content
      ><div class="flex h-full w-full items-center justify-center gap-3">
        <SocialButton
          icon-name="mdi:email-outline"
          href="mailto:davidglassman@fastmail.com" />

        <SocialButton
          icon-name="mdi:linkedin"
          href="https://linkedin.com/in/davidglassman29/" />

        <SocialButton
          icon-name="mdi:instagram"
          href="https://instagram.com/davidgglassman/" />

        <SocialButton
          icon-name="mdi:github"
          href="https://github.com/davidgglassman" /></div
    ></template>
  </CardTemplate>
</template>

<script setup lang="ts"></script>

<style scoped></style>
