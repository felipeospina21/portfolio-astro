# portfolio-astro

My personal developer portfolio, built with [Astro](https://astro.build/) and React. It's a single-page, slide-style site (intro, projects, skills) with a separate page for each project.

This is the second iteration of my portfolio. It replaces [`portfolio-test`](https://github.com/felipeospina21/portfolio-test), the original plain HTML prototype.

## Features

- **Slides**: Intro, Projects and Skills sections with scroll and visibility animations (Framer Motion)
- **Project pages**: each project is a markdown file with typed frontmatter (title, client, date, role, tags, image, links)
- **Typed content**: the `projects` content collection is validated with a Zod schema
- **Skills grid**: technology icons for my main stack

## Tech stack

- Astro 2 with the React and Tailwind integrations
- React 18 and TypeScript
- Tailwind CSS
- Framer Motion and React Icons
- ESLint, Prettier, Husky and lint-staged

## Getting started

```bash
pnpm install
pnpm dev        # Dev server at http://localhost:8080
pnpm build      # Production build to ./dist
pnpm preview    # Preview the production build
```

## Adding a project

Create a markdown file in `src/content/projects/`. The frontmatter must match the schema in `src/collections.schema.ts`:

```md
---
layout: ../../layouts/Project.astro
client: 'Client name'
title: 'Project title'
date: 2023-01-01
description: 'One-line description'
role: 'Developer'
image:
  url: '/image.jpg'
  alt: 'Image description'
tags: ['React', 'TypeScript']
links:
  - url: 'https://github.com/...'
    title: 'GitHub'
---

Project description in markdown.
```

Put the image in `public/`.

## Project structure

```
src/
├── content/projects/   # Project entries (markdown)
├── slides/             # Intro, Projects, Skills
├── components/         # NavBar, Slide, ProjectCard, animations, typography
├── layouts/            # Base layout and project layout
├── pages/              # index and project routes
└── collections.schema.ts
```

> Experimental and outdated (Astro 2, early 2023). Not actively maintained.
