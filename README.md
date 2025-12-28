# Harsh Realitees Photography

Site live at https://harshrealitees.netlify.app

## Architecture

Built with **Astro** (static site generator) and deployed on **Netlify**. Astro generates static HTML at build time, which Netlify serves as a static site.

## Usage

- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `dist/`)
- `netlify deploy --dir=dist` - Deploy preview to Netlify
- `netlify deploy --dir=dist --prod` - Deploy to production

## Gallery Images

Gallery collections are defined in `src/data/gallery.js`. Each collection has:
- `id` - URL slug
- `title` - Display name
- `description` - Collection description
- `images` - Array of image URLs

Add new collections or images by editing this file.

## Essays

Essays are markdown files in `src/content/essays/` with frontmatter containing:
- `title` - Essay title
- `hero` - Hero section (image, title, description, location, year)
- `slides` - Array of image/text pairs

To add a new essay, create a new `.md` file in `src/content/essays/` following the schema defined in `src/content.config.ts`.
