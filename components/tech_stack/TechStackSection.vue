<template>
  <Section label="Tech Stack">
    <div class="flex-col-standard">
      <div class="mb-12 w-full">
        <TechStackGroup label="Languages & Frameworks" :items="languages" />
      </div>

      <div class="w-full">
        <TechStackGroup label="Tools I Use" :items="tools" />
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

const languages = [
  {
    label: "Python",
    icon: "python",
    content: "Lorem ipsum ",
  },
  {
    label: "C#",
    icon: "csharp",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Javascript",
    icon: "javascript",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Lua",
    icon: "lua",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Java",
    icon: "java",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Vue",
    icon: "vue",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Nuxt",
    icon: "nuxt",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Tailwind",
    icon: "tailwind",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
];

const tools = [
  {
    label: "Firefox",
    icon: "firefox",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Chrome",
    icon: "chrome",
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
  {
    label: "GitKraken",
    icon: "gitkraken",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Figma",
    icon: "figma",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Electron",
    icon: "electron",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
  {
    label: "Photoshop",
    icon: "photoshop",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse rerum accusamus dolorum quae libero illo quia nihil iusto repellat?",
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
