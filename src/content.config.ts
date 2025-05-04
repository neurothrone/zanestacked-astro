import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    createdDate: z.date(),
    imageUrl: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
}
