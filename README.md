# Suhail Solahuddin — Portfolio

A static-first personal portfolio built with Astro. It includes project pages, a frontend/CSS showcase, and Markdown-powered blog posts.

## Requirements

- Node.js 22.12 or newer
- npm

## Development

```sh
npm install
npm run dev
```

Astro prints the local development URL when the server starts.

## Build

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`.

## Pages and content

- `/` — introduction, featured work, and contact links
- `/projects/` — project gallery; edit project details in `src/data/projects.ts`
- `/showcase/` — CSS and frontend experiments
- `/blog/` — published Markdown posts from `src/content/blog/`

Add blog posts as Markdown files in `src/content/blog/` with `title`, `description`, and `pubDate` frontmatter. Add `tags` as a list; set `draft: true` to keep a post out of the generated site.

Static images and the resume are kept in `public/assets/` and `files/`.
