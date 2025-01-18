<template>
  <CardTemplate
    :fixed="true"
    :span="'span 6'">
    <div>
      <h2 class="mb-4 text-lg font-semibold text-gray-500 dark:text-gray-300">Books (2025)</h2>
      <ClientOnly>
        <template #default>
          <div v-if="!error">
            <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">Reading Now</h3>
            <ul>
              <li
                v-for="book in books?.reading"
                :key="book.title">
                <p class="text-sm text-gray-500 dark:text-gray-300">
                  · {{ book.title }} <span class="text-xs text-gray-400">[{{ book.author }}]</span>
                </p>
              </li>
            </ul>
            <UDivider class="my-4" />
            <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">Completed</h3>
            <ul>
              <li
                v-for="book in books?.completed"
                :key="book.title">
                <p class="text-sm text-gray-500 dark:text-gray-300">
                  · {{ book.title }} <span class="text-xs text-gray-400">[{{ book.author }}]</span>
                  <span class="ml-2 text-xs font-semibold text-sky-500 dark:text-sky-300">{{
                    book.rating
                  }}</span>
                </p>
              </li>
            </ul>
            <UDivider class="my-4" />
            <h3 class="mb-2 text-sm font-semibold text-gray-400 dark:text-gray-300">
              Did Not Finish
            </h3>
            <ul>
              <li
                v-for="book in books?.dnf"
                :key="book.title">
                <p class="text-sm text-gray-500 dark:text-gray-300">
                  · {{ book.title }} <span class="text-xs text-gray-400">[{{ book.author }}]</span>
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
  </CardTemplate>
</template>

<script setup lang="ts">
const { data: books, error } = await getBooks();
</script>
