# Harsh Realitees Photography

Site live at https://harshrealitees.netlify.app

## Architecture

Built with **Astro** (static site generator) and deployed on **Netlify**. Astro generates static HTML at build time, which Netlify serves as a static site.

**E-commerce** is powered by **Snipcart**, a headless shopping cart solution that works with static sites. Snipcart handles cart management, checkout, and payment processing without requiring a backend. The cart opens as a side panel overlay without navigating away from the page.

## Setup
```
git clone git@github.com:hsd-dev/harshrealitees.photo.git
cd <path/to/harshrealitees.photo>
npm install   # Install all dependencies
```

## Usage

### Development
```
npm run dev  # Start development server
```
The website wiil be available at [http://localhost:4321/](http://localhost:4321/)


### Deploying to Netlify
```
npm run build  # Build for production (outputs to `dist/`)
netlify deploy --dir=dist  # Deploy preview to Netlify
netlify deploy --dir=dist --prod  # Deploy to production
```

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

## Store Products

Store products are defined in `src/data/store.js`. Each product has:
- `id` - Unique identifier (URL-safe slug)
- `name` - Product display name
- `description` - Product description
- `price` - Price in USD (number)
- `image` - Product image URL
- `category` - Product category (e.g., 'Prints')
- `sizes` - Array of available sizes (e.g., `['8x10', '11x14', '16x20']`)

To add a new product, add a new object to the `storeProducts` array in `src/data/store.js`:

```javascript
{
  id: 'print-unique-name',
  name: 'Product Name',
  description: 'Product description',
  price: 49.99,
  image: 'https://example.com/image.jpg',
  category: 'Prints',
  sizes: ['8x10', '11x14', '16x20']
}
```

### Snipcart Setup

1. Sign up at [snipcart.com](https://snipcart.com)
2. Get your API key from the dashboard (Settings → API Keys)
3. Create a `.env` file in the project root:
   ```
   PUBLIC_SNIPCART_API_KEY=your_api_key_here
   ```
4. For production, add the environment variable in your Netlify dashboard (Site settings → Environment variables)

The store page is available at `/store` and products are displayed in a grid layout. When customers click "Add to Cart", Snipcart opens a side panel where they can select size and complete checkout.
