import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

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

const art = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/art" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    mediums: z.array(z.string()),
  }),
});

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

const ReadingBook = BookBase.extend({
  status: z.literal("reading"),
  started: z.string(),
  completed: z.nullable(z.string()).optional(),
  rating: z.nullable(z.number()).optional(),
  percent: z.nullable(z.number()).optional(),
});

const CompletedBook = BookBase.extend({
  status: z.literal("completed"),
  started: z.string(),
  completed: z.string(),
  rating: z.number(),
});

const DnfBook = BookBase.extend({
  status: z.literal("dnf"),
  percent: z.number(),
});

const BookSchema = z.discriminatedUnion("status", [ReadingBook, CompletedBook, DnfBook]);

const books = defineCollection({
  loader: loadBooks,
  schema: BookSchema,
});

export const collections = { writing, art, books };
