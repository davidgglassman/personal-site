<template>
  <div>
    <!-- Hero Section -->

    <Section label="About Me">
      <p class="mb-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusd mque corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt error aliquam inventore, architecto adipisci distinctio. Enim quod qui similique? Esse praesentium at exercitationem. Fugiat, animi! Rem.</p>
      <p class="mb-6 text-justify">Nesciunt error aliquam inventore, architecto adipisci distinctio. Enim quod qui similique? Esse praesentium at exercitationem. Fugiat, animi! Rem.</p>
      <p class="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum fugit veniam expedita aliquam alias ab quasi ea et perspiciatis eius.</p>
    </Section>

    <!-- Experience Section -->

    <Section label="Experience">
      <div class="flex-col-standard">
        <div class="card mb-12">
          <div class="mb-3 text-sm font-semibold">{{ experience.years }}</div>
          <div class="text-2xl font-bold tracking-wide">{{ experience.title }}</div>
          <div class="text-lg font-semibold">{{ experience.company }}</div>

          <ul class="my-5 ml-4 list-outside list-disc">
            <li v-for="(item, i) in experience.items" :key="i" class="mb-4">{{ item }}</li>
          </ul>

          <div class="flex w-full flex-wrap">
            <div v-for="(item, i) in experience.skills" :key="i" class="flex-row-standard mb-2 mr-2 inline-block rounded-full bg-grey-300 px-4 py-1 text-justify text-xs font-semibold last:mr-0">{{ item }}</div>
          </div>
        </div>

        <button class="h-16 w-auto min-w-56 rounded-xl border border-grey-400 p-4 text-center text-lg font-semibold">See Full Resume</button>
      </div>
    </Section>

    <!-- Tech Stack Section -->

    <Section label="Tech Stack">
      <div class="flex-col-standard card">
        <div class="mb-12">
          <div class="mb-4 text-2xl font-bold">Programming Languages</div>
          <div class="flex-col-standard">
            <LanguageSummary v-for="(item, i) in 3" :key="i" :label="'XYZ Name'" :icon="'placeholder'" :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?'" />

            <div class="card p-4">
              <div v-for="(item, i) in 4" :key="i" class="mb-1 flex w-full items-center justify-start gap-3">
                <div class="h-3 w-3 rounded-full bg-grey-500"></div>
                <p class="text-sm leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="mb-4 text-2xl font-bold tracking-wide">Tools I Use</div>
          <div class="flex-col-standard">
            <LanguageSummary v-for="(item, i) in 3" :key="i" :label="'XYZ Name'" :icon="'placeholder'" :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?'" />

            <div class="card p-4">
              <div v-for="(item, i) in 4" :key="i" class="mb-1 flex w-full items-center justify-start gap-3">
                <div class="h-3 w-3 rounded-full bg-grey-500"></div>
                <p class="text-sm leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- FAQ Section -->

    <Section label="FAQ">
      <FaqCard v-for="(item, i) in faq.items" :key="i" :data="item" />
    </Section>

    <!-- Trivia Section -->

    <Section label="Trivia">
      <div class="flex-col-standard">
        <div v-for="(item, i) in trivia.items" :key="i" class="card mb-1">{{ item }}</div>
      </div>
    </Section>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

import experience from "~/data/experience.yml";
import faq from "~/data/faq.yml";
import trivia from "~/data/trivia.yml";

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

// ------------------------ Composables

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
.content {
  overscroll-behavior: none !important;
}
</style>
