import { defineCollection } from 'astro:content';
import { projectSchema } from '../collections.schema';

const projectsCollection = defineCollection({
  schema: projectSchema,
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  project: projectsCollection,
};
