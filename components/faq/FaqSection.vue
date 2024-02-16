<template>
  <Section label="FAQ">
    <FaqCard question="How did you make this website?">
      <p class="mb-4 text-grey-700 dark:text-grey-600">I started this as a regular Vue app since it's my favorite Javascript framework to work with (once you get the taste for a good framework, it's hard to go back to vanilla). Then, I decided partway through that I needed more flexibility since I wanted to add a blog section and more advanced functionality down the road. So, I upgraded to Nuxt. First time using the framework and I'm really enjoying it.</p>
      <p class="text-grey-700 dark:text-grey-600">Can't forget Tailwind for styling (I'll never go back to vanilla CSS without kicking and screaming) and Netlify for deployment (since it's so simple to link to a Github repo and redeploy whenever new code is pushed).</p>
    </FaqCard>

    <FaqCard question="How did you learn to code?">
      <p class="text-grey-700 dark:text-grey-600">I didn't go to school for computer science or anything like that. In fact, I went to art school, where I majored in fine arts (drawing, painting, etc.). Any programming skills I have were hard won through on-the-job training and mentorship and countless nights and weekends spent studying and practicing. Little by little, improvements came. Now, I'm in a place where I'm confident about my abilities but also well aware that what I know is just a drop in the vast ocean of knowledge out there regarding this profession. But I keep plugging away at it. Learn a little more each day. That's all any of us can do, really.</p>
    </FaqCard>

    <FaqCard question="What are you working on now?">
      <div class="text-grey-700 dark:text-grey-600">
        <p>Other than whatever day-to-day projects I'm working on for my actual job (probably too many to get into here), some things I'm actively into or ramping up to tackle this year:</p>
        <ul class="ml-4 mt-4 list-outside list-disc">
          <li class="mb-3">Looking to start contributing to open-source projects this year (once I decide which one(s) I most want to get involved with). I think I've been too long in my own insulated bubble, and it's time to branch out and start collaborating with others on some cool projects.</li>
          <li class="mb-3">I created this website, which I don't plan on keeping static for long. This is very much "version 1," and I'm sure there will be changes and updates over time as I think of them. Plus, I plan to start a blog section on the site, which will be up as soon as I think of some things to write about.</li>
          <li>Hobby-wise, I'm looking for ways to rekindle the practice of regular art-making. I'm experimenting with AI image generation (mostly Stable Diffusion) and looking into methods for incorporating that workflow into a more traditional drawing/painting regimen.</li>
        </ul>
      </div>
    </FaqCard>

    <FaqCard question="Tabs or spaces?">
      <p class="text-grey-700 dark:text-grey-600">Tabs, for sure. Spaces make my carpal tunnel flare up &#128514;</p>
    </FaqCard>

    <FaqCard question="Have you always lived in Brooklyn?">
      <p class="text-grey-700 dark:text-grey-600">No, originally from Long Island. But I've moved around a bunch in my life. I've lived in 17 houses/apartments in 13 towns/cities in 4 states. Been in NYC (cycling back and forth between Manhattan, Queens and Brooklyn) for about 20 years total though. Think I'm pretty close to hanging it up soon and moving out to somewhere with a little less hustle and bustle.</p>
    </FaqCard>

    <FaqCard question="Got any Top 5 lists?">
      <div v-for="(category, i) in topFive" :key="i" class="mb-4 last:mb-0">
        <div class="text-primary-2">{{ category.title }}</div>
        <ul v-for="(item, j) in category.items" :key="j" class="list-inside list-disc">
          <li class="text-grey-700 dark:text-grey-600">{{ item }}</li>
        </ul>
      </div>
    </FaqCard>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const topFive = [
  {
    title: "Artists",
    items: ["Eric Fischl", "Francis Bacon", "Cy Twombly", "John Singer Sargent", "Paco Pomet"],
  },
  {
    title: "Books",
    items: ["Remembrance of Earth's Past Trilogy by Liu Cixin", "Freedom by Jonathan Franzen", "Knockemstiff by Donald Ray Pollock", "Tenth of December by George Saunders", "On Writing by Stephen King"],
  },
  {
    title: "Albums",
    items: ["Mezzanine by Massive Attack", "Lateralus by Tool", "Kid A by Radiohead", "Kind of Blue by Miles Davis", "Roseland NYC Live by Portishead"],
  },
  {
    title: "Movies",
    items: ["The Lord of The Rings Trilogy", "Pulp Fiction", "Boogie Nights", "The Departed", "Fight Club"],
  },
  {
    title: "TV",
    items: ["The Wire", "It's Always Sunny in Philadelphia", "Halt and Catch Fire", "Scrubs", "Silicon Valley"],
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
