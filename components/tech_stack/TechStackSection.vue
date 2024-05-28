<template>
  <Section id="tech" label="Tech Stack">
    <div class="flex-col-standard">
      <div class="mb-12 w-full">
        <TechStackGroup id="tech" label="Languages & Frameworks" :items="languages" />
      </div>

      <div class="w-full">
        <TechStackGroup id="tech" label="Tools I Use" :items="tools" />
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
    content: "Hands down, my favorite language to code in. My job only requires a little Python programming, so I try to steal whatever opportunities I can to write in it. It has such a nice blend of simplicity and power. There really isn't much it can't do. And that standard library? Chef's kiss. If given a choice (and if I don't need much or any user interface), I choose Python.",
  },
  {
    label: "C#",
    icon: "csharp",
    content: "This is one of the languages I code most with in my day-to-day professional life. I'm generally more partial to dynamically typed languages, but this is my favorite of the statically typed languages I've worked with. What can I say about C#? It's not flashy, but it gets the job done. A real blue-collar language.",
  },
  {
    label: "JavaScript",
    icon: "javascript",
    content: "Probably my other most frequently used language.In this day and age, you just have to know some JavaScript. It's everywhere. JavaScript is fun and a breeze to write with, but I always feel like I must be doing something wrong, even when I'm not. Probably because of how relaxed the language is overall. But that's what we have TypeScript for!",
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
    content: "Firefox is my go-to browser for daily use. It's not as flashy as Chrome, but the privacy benefits are worth it. I'll admit, Chrome's interface and usability are more my style, but I can't shake the feeling that Google's watching my every move. So, Firefox it is.",
  },
  {
    label: "Chrome",
    icon: "chrome",
    content: "I keep Chrome installed only as a development browser. I struggle with Firefox's Dev Tools (something about them just seems off to me) so when I'm working on a project, Chrome takes the lead. Of course, when it's time to do any actual browsing, back to Firefox I go.",
  },
  {
    label: "VS Code",
    icon: "vscode",
    content: "VS Code is a no-brainer for me when it comes to code editors. The vast array of extensions and customizability options keep me hooked.",
  },
  {
    label: "Git",
    icon: "git",
    content: "I mean, who doesn't use Git these days? It's pretty much the de facto version control system now. Is Subversion still a thing? Mercurial? I'm by no means a master, though. I do the same 10% of things 95% of the time and rarely touch the more advanced functionality. I rarely work on large software projects with multiple people simultaneously, so I haven't needed to get too deep with it. I know enough to be dangerous. ",
  },
  {
    label: "GitKraken",
    icon: "gitkraken",
    content: "I know a lot of people who use Git are command-line purists. I'm not one of them. I like a little GUI with my Git, and this is the most polished of all the apps I've tried.",
  },
  {
    label: "Figma",
    icon: "figma",
    content: "It's easy to see why Figma has become so popular. It's a game-changer for UI design. It's simple enought to learn (the basics) and intuitive, even for non-designers like myself. I always sketch out wireframes and prototypes in Figma before moving on to the final product. Plus, it's great for sharing ideas with colleagues and clients.",
  },
  {
    label: "Electron",
    icon: "electron",
    content: "Electron is a relatively new addition to my toolkit, but I'm liking what I see so far. I especially enjoyed being able to code the front end in Vue. I know the executable is enormous and can be a bit of a memory hog. Still, I can't bring myself to learn Flutter since I don't trust that Google won't kill it 5 minutes after I finish my first app, and until Microsoft can code all their own apps using it, I'm not going to put any effort into learning .NET MAUI. Maybe I'll give React Native a try soon. For now, Electron will do.",
  },
  {
    label: "Photoshop",
    icon: "photoshop",
    content: "The old workhorse. I know enough Photoshop to get the job done, and I stick to my lane. Can I lay out a website with it? Probably not without a fight. Can I turn all my coworkers into Avengers? Well, that's a different story.",
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
