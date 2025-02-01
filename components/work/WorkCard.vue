<template>
  <CardTemplate>
    <template #header>
      <h2 class="text-lg font-semibold text-gray-500 dark:text-gray-300">Work Stuff</h2>
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
          <h2 class="mb-4 text-base font-semibold text-gray-500 dark:text-gray-300">Experience</h2>
          <ClientOnly>
            <template #default>
              <div v-if="!error">
                <ul class="mt-3 flex h-full w-full flex-col items-start justify-start gap-6">
                  <li
                    v-for="(job, i) in experience"
                    :key="i">
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
                      <div class="font-semibold tracking-wide lg:text-lg">
                        {{ role.title }}
                      </div>
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
                  </li>
                </ul>
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

        <div class="flex h-auto w-full items-center justify-between">
          <h2 class="mb-4 text-base font-semibold text-gray-500 dark:text-gray-300">Resume</h2>

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

        <div>
          <h2 class="mb-4 text-base font-semibold text-gray-500 dark:text-gray-300">Tech Stack</h2>

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
              href="https://www.mongodb.com/" />
          </div>
        </div>
      </div>
    </template>
  </CardTemplate>
</template>

<script setup lang="ts">
const { data: experience, error } = await getExperience();
</script>
