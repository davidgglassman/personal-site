<template>
  <SectionHeader label="Posts" />
  <PostsGroup v-for="(item, i) in groupedData" :key="i" :year="item.year.toString()" :items="item.items" :hideYear="groupedData.length <= 1" />

  <SectionHeader label="Tags" class="mt-16 sm:mt-24 lg:mt-32" />
  <div class="mb-16 flex flex-wrap items-center justify-start gap-3">
    <button v-for="(item, i) in tags" :key="i" class="btn h-8">{{ item }}</button>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const { data } = await useAsyncData("posts", () => queryContent("/blog").find());

const groupedData = groupByYear(data.value);

const tags = getAllTags(data.value);

// ------------------------ Computed

// ------------------------ Functions

function groupByYear(array) {
  const groups = array.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);

    acc[year].sort((a, b) => new Date(b.date) - new Date(a.date));
    return acc;
  }, {});

  const result = Object.keys(groups).map((year) => ({
    year: parseInt(year),
    items: groups[year],
  }));

  result.sort((a, b) => b.year - a.year);

  return result;
}

function getAllTags(array) {
  const allTags = array.reduce((acc, item) => {
    return acc.concat(item.tags);
  }, []);

  const uniqueTags = [...new Set(allTags)].sort();

  return uniqueTags;
}

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
