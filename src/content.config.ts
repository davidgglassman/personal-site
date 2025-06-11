import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

// -------------------- Writing

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/writing" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    form: z.enum(["long", "short"]),
  }),
});

// -------------------- Art

const art = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/art" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    mediums: z.array(z.string()),
  }),
});

// -------------------- Books

const loadBooks = async () => {
  const base = "./content/books";

  const [reading, completed, unfinished] = await Promise.all([
    fs.readFile(path.resolve(base, "reading.json"), "utf-8").then(JSON.parse),
    fs.readFile(path.resolve(base, "completed.json"), "utf-8").then(JSON.parse),
    fs.readFile(path.resolve(base, "unfinished.json"), "utf-8").then(JSON.parse),
  ]);

  return [
    ...reading.map((b: any) => ({ id: randomUUID(), ...b, status: "reading" })),
    ...completed.map((b: any) => ({ id: randomUUID(), ...b, status: "completed" })),
    ...unfinished.map((b: any) => ({ id: randomUUID(), ...b, status: "dnf" })),
  ];
};

const BookBase = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  status: z.enum(["reading", "completed", "dnf"]),
});

export const ReadingBook = BookBase.extend({
  status: z.literal("reading"),
  started: z.string(),
});

export const CompletedBook = BookBase.extend({
  status: z.literal("completed"),
  started: z.string(),
  completed: z.string(),
  rating: z.number(),
});

export const DnfBook = BookBase.extend({
  status: z.literal("dnf"),
  percent: z.number(),
});

const BookSchema = z.discriminatedUnion("status", [ReadingBook, CompletedBook, DnfBook]);

const books = defineCollection({
  loader: loadBooks,
  schema: BookSchema,
});

// -------------------- Work

const loadWork = async () => {
  const experience = await fs.readFile("./content/work/experience.json", "utf-8").then(JSON.parse);

  return [...experience.map((b: any) => ({ id: randomUUID(), ...b }))];
};

const WorkRole = z.object({
  title: z.string(),
  years: z.string(),
});

const work = defineCollection({
  loader: loadWork,
  schema: z.object({
    years: z.string(),
    roles: z.object({
      main: WorkRole,
      other: z.array(WorkRole),
    }),
    company: z.string(),
    url: z.string(),
    items: z.array(
      z.object({
        content: z.string(),
        link: z
          .object({
            title: z.string(),
            url: z.string().url(),
          })
          .nullable(),
      }),
    ),
  }),
});

// -------------------- Lists

const loadTop5 = async () => {
  const top5 = await fs.readFile("./content/lists/top5.json", "utf-8").then(JSON.parse);

  return [...top5.map((b: any) => ({ id: randomUUID(), ...b }))];
};

const top5 = defineCollection({
  loader: loadTop5,
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()).length(5),
  }),
});

export const collections = { writing, art, books, work, top5 };
