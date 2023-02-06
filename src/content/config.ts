import { defineCollection } from 'astro:content';
import { projectSchema } from '../collections.schema';

const projectsCollection = defineCollection({
  schema: projectSchema,
});
export const collections = {
  projects: projectsCollection,
};
