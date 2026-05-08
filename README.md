# Baklib CMS — Blog theme

A lightweight **blog / news / announcements** theme for Baklib-powered sites. It ships with two home layouts (card grid and list), article pages with tags and optional feedback, search, and Tailwind CSS–based styling.

Default **seed data is in English** (`site.language: en`) so new sites start with an international-friendly baseline. Switch the language in `seeds/001_site.yml` if you prefer another default.

---

## Features

- **Home**: card grid (`templates/index.liquid`) or list (`templates/index.list.liquid`) with tag navigation and sorting (card layout).
- **Article** (`templates/page.liquid`): title, summary, cover, rich content, tags, version links, optional visit count and feedback.
- **Search** (`templates/search.liquid`), **tag listing** (`templates/tag.liquid`).
- Theme settings in `config/settings_schema.json`; storefront copy in `locales/*.json`; editor labels in `locales/*.schema.json`.

---

## Requirements

- **Node.js** 18+ recommended for building CSS/JS assets.

Optional:

- **Ruby + Bundler** if you use Guard for LiveReload (see below).

---

## Development

Install dependencies and run watchers for Tailwind v4 and esbuild:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

This compiles:

- `src/stylesheets/application.css` → `assets/stylesheets/application.css`
- `src/javascripts/application.js` → `assets/javascripts/application.js`

The layout loads these from `layout/theme.liquid` via `asset_url` (plus shared Baklib assets).

### LiveReload (optional)

```bash
bundle install
bundle exec guard
```

Use a browser LiveReload extension alongside Guard if you want automatic refresh.

---

## Repository layout

| Path | Purpose |
|------|---------|
| `templates/` | Page templates (`index`, `page`, `search`, `tag`, …) |
| `snippets/` | Partials (header, footer, cards, pagination, …) |
| `layout/` | `theme.liquid` site shell |
| `config/settings_schema.json` | Theme settings schema |
| `locales/` | UI strings (`*.json`) and schema translations (`*.schema.json`) |
| `seeds/` | Sample site and pages (default **English**) |
| `assets/` | Built CSS/JS (committed or produced by `npm run build`) |
| `src/` | Source for Tailwind and JS |

---

## Seeds and first-time content

- `seeds/001_site.yml` — site language (`en` by default), header/footer HTML snippets.
- `seeds/002_pages.yml` — home copy and three demo articles.

**Site tags** (`site.tags`) are not defined inside `settings_schema.json`. Create them with the Baklib API or admin, then attach tags to pages via each template’s tag picker. See [API docs](https://dev.baklib.cn/api) and [Liquid objects](https://dev.baklib.cn/guide/objects).

---

## Documentation

- Themes: [help.baklib.cn/themes](https://help.baklib.cn/themes)
- API: [dev.baklib.cn/api](https://dev.baklib.cn/api)

---

## Other languages

- Simplified Chinese maintainer notes: [README.zh-CN.md](./README.zh-CN.md).
