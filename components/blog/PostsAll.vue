<template>
  <SectionHeader label="Tags" />
  <div class="mb-16 flex flex-wrap items-center justify-start gap-3 sm:mb-24 lg:mb-32">
    <button v-for="(item, i) in tags" :key="i" class="btn h-8" :class="{ active: activeTags.tags.includes(item) }" @click="toggleActiveTag(item)">{{ item }}</button>
  </div>

  <div class="mb-16 sm:mb-24 lg:mb-32">
    <SectionHeader label="Posts" class="mb-4" />
    <PostsGroup v-for="(item, i) in groupedData" :key="i" :year="item.year.toString()" :items="item.items" :hideYear="groupedData.length <= 1 || item.items.length === 0" />
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

const activeTags = reactive({ tags: [] });

const tags = getAllTags(data.value);

// ------------------------ Computed

const groupedData = computed(() => {
  return groupByYear(data.value);
});

// ------------------------ Functions

function groupByYear(array) {
  const groups = array.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }

    const hasActiveTag = item.tags.some((tag) => activeTags.tags.includes(tag));
    if (activeTags.tags.length === 0 || hasActiveTag) {
      acc[year].push(item);
    }

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

function toggleActiveTag(tag) {
  if (activeTags.tags.includes(tag)) {
    activeTags.tags = activeTags.tags.filter((item) => item !== tag);
  } else {
    activeTags.tags.push(tag);
  }
}
// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped>
.active {
  @apply bg-grey-300 hover:bg-grey-200 dark:bg-grey-700 hover:dark:bg-grey-800;
}
</style>
