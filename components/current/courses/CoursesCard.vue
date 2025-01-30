<template>
  <CardTemplate>
    <template #content>
      <div>
        <h2 class="mb-4 text-lg font-semibold text-gray-500 dark:text-gray-300">Courses (2025)</h2>

        <ClientOnly>
          <template #default>
            <div v-if="!error">
              <!-- Taking Now -->

              <template v-if="courses?.active.length">
                <CourseSection
                  title="Taking Now"
                  :courses="courses.active" />
                <UDivider
                  v-if="courses?.upcoming.length"
                  class="my-4" />
              </template>

              <!-- Upcoming -->

              <template v-if="courses?.upcoming.length">
                <CourseSection
                  title="Upcoming"
                  :courses="courses.upcoming" />
                <UDivider
                  v-if="courses?.completed.length"
                  class="my-4" />
              </template>

              <!-- Completed -->

              <CourseSection
                v-if="courses?.completed.length"
                title="Completed"
                :courses="courses.completed" />
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
    </template>
  </CardTemplate>
</template>

<script setup lang="ts">
const { data: courses, error } = await getCourses();
</script>
