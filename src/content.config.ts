import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const collectionPieces = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/collections" }),
  schema: z.object({
    title: z.string(),
    sub: z.string().default(""),
    date: z.string().default(""),
    reading: z.string().default(""),
    collection: z.string(),
    parent: z.string().optional(),
    order: z.number(),
    appendix: z.boolean().optional(),
  }),
});

const novelChapters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/novels" }),
  schema: z.object({
    title: z.string(),
    novel: z.string(),
    order: z.number(),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    sub: z.string().default(""),
    date: z.string().default(""),
    reading: z.string().default(""),
    order: z.number(),
  }),
});

const bits = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/bits" }),
  schema: z.object({
    title: z.string(),
    sub: z.string().default(""),
    date: z.string().default(""),
    reading: z.string().default(""),
    order: z.number(),
  }),
});

export const collections = {
  collections: collectionPieces,
  novels: novelChapters,
  essays,
  bits,
};
