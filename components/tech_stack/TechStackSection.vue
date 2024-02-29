<template>
  <ExpandableSection id="tech" label="Tech Stack">
    <div class="flex-col-standard">
      <div class="mb-12 w-full">
        <TechStackGroup id="tech" label="Languages & Frameworks" :items="languages" />
      </div>

      <div class="w-full">
        <TechStackGroup id="tech" label="Tools I Use" :items="tools" />
      </div>
    </div>
  </ExpandableSection>
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
    content: "Hands down, my favorite language to code in. My job only requires a little Python programming, so I try to steal whatever little opportunities I can to write with it. It has such a good blend of simplicity and power. There really is little it can't do. And that standard library? Chef's kiss. If given a choice (and I don't need much or any user interface), I choose Python.",
  },
  {
    label: "C#",
    icon: "csharp",
    content: "This is probably the language I code most with in my day-to-day professional life. I'm generally more partial to dynamically typed languages, but this is my favorite of the statically typed languages I've worked with. What can I say about C#? It's not flashy, but it gets the job done. A real blue-collar language.",
  },
  {
    label: "Javascript",
    icon: "javascript",
    content: "In this day and age, you just have to know some Javascript. It's everywhere. Javascript is fun and a breeze to write with, but I always feel like I must be doing something wrong, even when I'm not. It gets better with every version, but it still feels a little too relaxed to me. Probably time to learn some Typescript.",
  },
  {
    label: "Lua",
    icon: "lua",
    content: "Lua is Python on the Atkins diet. If you're a fan of tables, this is the language for you. Everything is tables. The tables? Made up of other tables. Those tables? Also tables. Tables all the way down. But seriously, I don't mind Lua at all. I can get things done quickly, and it stays out of my way.",
  },
  {
    label: "Java",
    icon: "java",
    content: "I can't adequately render a verdict on Java since I was limited to working with an absolutely ancient version of the language and a version of Eclipse from around the Y2K era. I heard they've made some good strides in recent years, and Java has come into its own. Good for Java. I don't know. At least it made learning C# easier.",
  },
  {
    label: "Vue",
    icon: "vue",
    content: "I love Vue. I just love it. I've played around with a couple of other Javascript frameworks, and they each have something or other to offer. But never enough to ultimately sell me on them. I keep coming back to Vue, though. It just makes sense to me. Unless I actively have to switch up for work, I don't see myself souring on Vue any time soon.",
  },
  {
    label: "Nuxt",
    icon: "nuxt",
    content: "Just started using this Vue framework (on this very website!) and I've been enjoying it so far. I'm loving the automatic imports, file-based routing, and the ability to choose rendering strategies. I've barely scratched the surface of this, but it seems like it will be able to handle anything I can think to throw at it for the foreseeable future.",
  },
  {
    label: "Tailwind",
    icon: "tailwind",
    content: "I tried going back to vanilla CSS when I was putting this website together. That lasted all of 1 commit before I reverted back to Tailwind. It speeds up my CSS development time to such an extent that it's painful to think of a time before it existed. Yes, yes, I know it makes the markup cluttered. I get that; I truly do. But some VS Code extensions can clean this up if needed. The speed gains I get from using it more than make up for a little messy HTML in my opinion.",
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
