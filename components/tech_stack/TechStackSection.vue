<template>
  <Section label="Tech Stack">
    <div class="flex-col-standard card">
      <div class="mb-12">
        <TechStackGroup label="Languages & Frameworks" :contentItems="languages.contentItems" :legendItems="languages.legendItems" />
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
