<template>
  <CardTemplate>
    <template #content>
      <div class="flex h-auto w-full items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-500 dark:text-gray-300">Resume</h2>

        <div class="flex items-center justify-end gap-3">
          <ResumeButton
            icon-name="mdi:eye-outline"
            href="resume.pdf"
            target="_blank" />

          <ResumeButton
            icon-name="material-symbols:download-rounded"
            href="resume.pdf"
            download="david-glassman-resume-2025.pdf" />
        </div>
      </div>
    </template>
  </CardTemplate>
</template>

<script setup></script>

<style scoped></style>
