import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    form: z.enum(["long", "short"]),
  }),
});

const art = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/art" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    mediums: z.array(z.string()),
  }),
});

export const collections = { writing, art };
