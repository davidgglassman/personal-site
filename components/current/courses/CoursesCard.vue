<template>
  <CardTemplate
    :fixed="true"
    :span="'span 6'">
    <div>
      <h2 class="mb-4 text-lg font-semibold text-gray-500 dark:text-gray-300">Courses (2025)</h2>
      <ClientOnly>
        <template #default>
          <div v-if="!error">
            <!-- Taking Now -->

            <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">Taking Now</h3>

            <ul v-if="courses?.active.length">
              <li
                v-for="course in courses?.active"
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

            <p
              v-else
              class="text-sm text-gray-500 dark:text-gray-300">
              Nothing here yet. Check back later.
            </p>

            <UDivider class="my-4" />

            <!-- Upcoming -->

            <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">Upcoming</h3>

            <ul v-if="courses?.upcoming.length">
              <li
                v-for="course in courses?.upcoming"
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

            <p
              v-else
              class="text-sm text-gray-500 dark:text-gray-300">
              Nothing here yet. Check back later.
            </p>

            <UDivider class="my-4" />

            <!-- Completed -->

            <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">Completed</h3>

            <ul v-if="courses?.completed.length">
              <li
                v-for="course in courses?.completed"
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

            <p
              v-else
              class="text-sm text-gray-500 dark:text-gray-300">
              Nothing here yet. Check back later.
            </p>
          </div>

          <p
            v-else
            class="text-sm text-gray-500 dark:text-gray-300">
            Unable to retrieve books. Please try again later.
          </p>
        </template>

        <template #fallback>
          <p class="text-sm text-gray-500 dark:text-gray-300">Loading...</p>
        </template>
      </ClientOnly>
    </div>
  </CardTemplate>
</template>

<script setup lang="ts">
const { data: courses, error } = await getCourses();
</script>
