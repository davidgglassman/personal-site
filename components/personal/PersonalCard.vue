<template>
  <CardTemplate>
    <template #header>
      <h2 class="text-lg font-semibold text-gray-500 dark:text-gray-300">Personal Stuff</h2>
    </template>

    <template #content>
      <div class="flex w-full flex-col items-start justify-start gap-4">
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

        <div>
          <h2 class="mb-4 text-base font-semibold text-gray-500 dark:text-gray-300">Books</h2>
          <ClientOnly>
            <template #default>
              <div v-if="!booksError">
                <!-- Reading Now -->

                <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">
                  Reading Now
                </h3>

                <ul>
                  <li
                    v-for="book in books?.reading"
                    :key="book.title">
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      · {{ book.title }}
                      <span class="text-xs text-gray-400">[{{ book.author }}]</span>
                    </p>
                  </li>
                </ul>

                <UDivider class="my-4" />

                <!-- Completed -->

                <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">
                  Completed
                </h3>
                <ul>
                  <li
                    v-for="book in books?.completed"
                    :key="book.title">
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      · {{ book.title }}
                      <span class="text-xs text-gray-400">[{{ book.author }}]</span>
                      <span class="ml-2 text-xs font-semibold text-sky-500 dark:text-sky-300">{{
                        book.rating
                      }}</span>
                    </p>
                  </li>
                </ul>

                <UDivider class="my-4" />

                <!-- Did Not Finish -->

                <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">
                  Did Not Finish
                </h3>
                <ul>
                  <li
                    v-for="book in books?.dnf"
                    :key="book.title">
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      · {{ book.title }}
                      <span class="text-xs text-gray-400">[{{ book.author }}]</span>
                      <span class="ml-2 text-xs font-semibold text-sky-500 dark:text-sky-300"
                        >{{ book.percent }}%</span
                      >
                    </p>
                  </li>
                </ul>
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

        <div>
          <h2 class="mb-4 text-base font-semibold text-gray-500 dark:text-gray-300">Courses</h2>

          <ClientOnly>
            <template #default>
              <div v-if="!coursesError">
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
      </div></template
    >
  </CardTemplate>
</template>

<script setup lang="ts">
const { data: books, error: booksError } = await getBooks();
const { data: courses, error: coursesError } = await getCourses();
</script>
