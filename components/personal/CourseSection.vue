<template>
  <div>
    <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">
      {{ title }}
    </h3>
    <ul>
      <li
        v-for="course in courses"
        :key="course.name">
        <p class="text-sm text-gray-500 dark:text-gray-300">
          · {{ course.name }}
          <span class="text-xs text-gray-400">[{{ course.where }}]</span>
          <span class="ml-2 text-xs font-semibold text-sky-500 dark:text-sky-300">
            <a
              :href="course.link"
              target="_blank"
              >Link</a
            >
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  courses: CourseActive[] | CourseUpcoming[] | CourseCompleted[];
}>();
</script>
