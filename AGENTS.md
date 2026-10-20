# AGENTS.md

## Project Overview
LocalRankly — a frontend-only Vite + React marketing site for a local SEO agency in Dhaka, Bangladesh. No backend, no database, no external API dependencies.

## Tech Stack
- Vite 5 + React 18 (single-page app, all content in `src/App.jsx`)
- `qrcode.react` for QR code generation
- Google Fonts loaded via CDN in `index.html`

## Running the App
```
docker compose -f docker-compose.base44.yml up -d
```
- Vite dev server runs on port 5173 inside the container, mapped to host port 3000.
- Dependencies install automatically on container startup via `npm install`.
- Live reload is active — edits to `src/` appear immediately in the preview.

## Verification
- Healthcheck: `curl http://localhost:3000/` returns the HTML page.
- The app is a single `App.jsx` (~70KB) with all pages rendered as sections toggled by state.
- `localrankly.html` is a standalone static HTML version of the same site (not used by the Vite app).

## No Secrets Required
This project has no external service credentials. All content is static/client-side.
