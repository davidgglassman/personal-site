<template>
  <Section label="Latest Posts" buttonLabel="All Posts" :clickAction="showAllPosts">
    <PostSummary v-for="(item, i) in data" :key="i" :data="item" />
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const { data } = await useAsyncData("latest-posts", () => queryContent("/blog").sort({ date: -1 }).limit(5).find());

const router = useRouter();

// ------------------------ Computed

// ------------------------ Functions

const showAllPosts = () => {
  router.push("/blog");
};

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
