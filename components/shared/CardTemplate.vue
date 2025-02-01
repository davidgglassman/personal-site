<template>
  <div
    class="'w-full delay-250 dark:hover:bg-gray-500/15' flex cursor-pointer flex-col items-start justify-start rounded-lg border-2 border-gray-400/10 bg-gray-300/10 p-2 p-4 backdrop-blur-2xl transition ease-in-out hover:border-gray-400/15 hover:bg-gray-300/20 dark:border-white/10 dark:bg-gray-500/10 dark:hover:border-white/15"
    @click="toggleExpanded">
    <div class="w-full">
      <div
        v-if="props.expandable"
        class="flex w-full items-center justify-between">
        <slot name="header"></slot>
        <client-only>
          <Icon
            name="heroicons:chevron-down"
            class="h-4 w-4 transition-transform"
            :class="{ 'rotate-180': isExpanded }" />
        </client-only>
      </div>
      <div
        class="content-section overflow-hidden transition-all"
        :class="{ 'content-expanded': isExpanded }">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  expandable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  expandable: false,
});

const isExpanded = ref(false);

if (!props.expandable) isExpanded.value = true;

const toggleExpanded = () => {
  if (props.expandable) isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.content-section {
  max-height: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.content-expanded {
  max-height: 3000px;
  opacity: 1;
}
</style>
