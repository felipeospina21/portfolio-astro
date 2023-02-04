import type { projectImageSchema, projectLinkSchema, projectSchema } from './collections.schema';
import type { z } from 'astro:content';

export type ProjectFrontmatter = z.infer<typeof projectSchema>;

export type ProjectLink = z.infer<typeof projectLinkSchema>;

export type ProjectImage = z.infer<typeof projectImageSchema>;
