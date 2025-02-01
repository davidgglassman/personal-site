<template>
  <CardTemplate>
    <template #header>
      <h2 class="text-lg font-semibold text-gray-500 dark:text-gray-300">Experience</h2>
    </template>

    <template #content>
      <div>
        <ClientOnly>
          <template #default>
            <div v-if="!error">
              <div class="mt-3 flex h-full w-full flex-wrap items-start justify-start gap-6">
                <ul>
                  <li
                    v-for="(job, i) in experience"
                    :key="i">
                    <div class="mb-8 lg:mb-12">
                      <div class="mb-3 font-bold">{{ job.years }}</div>

                      <div
                        class="items-left mb-2 flex flex-col justify-between text-primary-2 sm:mb-0 sm:flex-row sm:items-center">
                        <div class="font-bold tracking-wide lg:text-lg">
                          {{ job.roles.main.title }}
                        </div>
                        <div
                          class="text-[.65rem] font-medium leading-4 opacity-65 sm:text-xs lg:text-sm">
                          {{ job.roles.main.years }}
                        </div>
                      </div>

                      <div
                        v-for="(role, j) in job.roles.other"
                        :key="j"
                        class="items-left mb-2 flex flex-col justify-between text-grey-800 dark:text-primary-1 sm:mb-0 sm:flex-row sm:items-center"
                        :style="{ opacity: `${100 - (i + 1) * 30}%` }">
                        <div class="font-semibold tracking-wide lg:text-lg">{{ role.title }}</div>
                        <div
                          class="text-[.65rem] font-medium leading-4 opacity-65 sm:text-xs lg:text-sm">
                          {{ role.years }}
                        </div>
                      </div>

                      <a
                        :href="job.url"
                        target="_blank"
                        class="link mt-4 inline-block font-bold lg:text-lg"
                        >{{ job.company }}</a
                      >

                      <ul class="ml-4 mt-5 list-outside list-disc">
                        <li
                          v-for="(item, k) in job.items"
                          :key="k"
                          class="mt-4">
                          <div class="mb-2 sm:mb-1">{{ item.content }}</div>
                          <a
                            v-if="item.link"
                            :href="item.link.url"
                            target="_blank"
                            ><span class="link font-semibold">{{ item.link.title }}</span></a
                          >
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <p
              v-else
              class="text-sm text-gray-500 dark:text-gray-300">
              Unable to retrieve experience data. Please try again later.
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
const { data: experience, error } = await getExperience();
</script>
