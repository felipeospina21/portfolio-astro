import { z } from 'astro:content';

export const projectImageSchema = z.object({
  url: z.string(),
  alt: z.string(),
});

export const projectLinkSchema = z.object({
  url: z.string(),
  title: z.string(),
  icon: z.string().optional(),
});

export const projectSchema = z.object({
  title: z.string(),
  client: z.string(),
  date: z.date(),
  description: z.string(),
  role: z.string(),
  tags: z.array(z.string()),
  image: projectImageSchema,
  links: z.array(projectLinkSchema),
});
