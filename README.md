# Crwn Clothing

A React storefront for a fictional clothing brand. The app is being built as a
single-page shop with category browsing, and it currently renders the home page:
a responsive grid of five shopping categories, each with a background image and
a "Shop Now" label.

## Tech stack

- **React 17** with function components and hooks
- **Create React App** (`react-scripts` 5) for tooling and builds
- **Sass/SCSS** for component-level styles
- **Jest + React Testing Library** for tests

## Getting started

Requires Node.js 16 or newer and npm.

```bash
npm install
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000)
and reloads on save.

## Available scripts

| Command         | What it does                                       |
| --------------- | -------------------------------------------------- |
| `npm start`     | Start the dev server with hot reload               |
| `npm run build` | Create an optimized production build in `build/`   |
| `npm test`      | Run the test suite in watch mode                   |
| `npm run eject` | Copy CRA config into the project (irreversible)    |

## Project structure

```
public/                 Static HTML shell, icons and manifest
src/
  App.js                Category data and page composition
  index.js              React entry point
  index.css             Global resets and base styles
  components/
    directory/          Lays out the category grid
    category-item/      Single category card with hover zoom
```

Categories are defined in `src/App.js` and passed down to `Directory`, which maps
them into `CategoryItem` components. Styling lives next to each component in
`.styles.scss` files, using BEM-like class names.

## Roadmap

- Category pages with routed collections
- Product listings and detail views
- Shopping cart and checkout
- User accounts and authentication
