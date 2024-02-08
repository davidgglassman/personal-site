<template>
  <Section label="Tech Stack">
    <div class="flex-col-standard card">
      <div class="mb-12">
        <TechStackGroup label="Programming Languages" :contentItems="languages.contentItems" :legendItems="languages.legendItems" />
      </div>

      <div>
        <TechStackGroup label="Tools I Use" :contentItems="tools.contentItems" :legendItems="tools.legendItems" />
      </div>
    </div>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const languages = {
  contentItems: [
    {
      label: "Javascript",
      icon: "javascript",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
    },
    {
      label: "Python",
      icon: "python",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
    },
    {
      label: "Lua",
      icon: "lua",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
    },
  ],
  legendItems: [
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?",
    },
  ],
};

const tools = {
  contentItems: [
    {
      label: "Firefox",
      icon: "firefox",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
    },
    {
      label: "VS Code",
      icon: "vscode",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
    },
    {
      label: "Git",
      icon: "git",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
    },
  ],
  legendItems: [
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto?",
    },
  ],
};

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
