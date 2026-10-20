# Project Audit

## Repository scope

This repository is a Vite + React application currently positioned as a static marketing website for LocalRankly, a Dhaka-based local SEO business. The codebase is a single-page React app with a large `src/App.jsx` and a large `src/index.css`. There is no confirmed production backend, database, authentication layer, or business workflow implementation yet.

## Direct evidence from the codebase

### Top-level structure

The repository currently contains:

- `index.html`
- `src/`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- `vercel.json`
- `README.md`
- `.gitignore`

### Stack and runtime

From `package.json`:

- React 18
- Vite 5
- `@vitejs/plugin-react`
- `qrcode.react`

There is no backend framework, database client, auth library, router package, or test framework configured yet.

### Current architecture is a single front-end marketing app

`src/App.jsx` contains:

- marketing sections (`Home`, `Services`, `Portfolio`, `Tools`, `Blog`, `About`, `Contact`)
- UI state for forms and modals
- mock link-shortening functionality
- local-only UI interactions
- repeated static data objects and arrays
- no route-based navigation beyond internal section toggling
- no protected/private app routes
- no database-backed persistence
- no API layer
- no access control

`src/main.jsx` is a standard React entry file that renders `<App />` into `#root`.

`src/index.css` is a large styling file with all design system rules and responsive behavior mixed together.

`index.html` sets page metadata and includes the Vite app bundle.

## Existing functionality status

### Functional and usable

- Single-page marketing website with sections and CTA flows
- Mobile nav pattern
- Contact form UI logic
- Free audit popup UI
- Link shortener + QR generation UI
- Blog-style section and FAQ accordions
- Landing-page design concept

### Simulated or incomplete

The following patterns are frontend-only and must not be assumed production-ready:

- Contact forms do not submit to a backend or email provider.
- Link shortener is not connected to a real service and uses local UI state only.
- No real lead persistence or CRM workflow.
- No authentication or private agency dashboard.
- No client portal or project tracking.
- No database schema or migrations.
- No production env configuration.
- No real audit engine, Search Console integration, or reporting workflow.
- No legal/privacy pages beyond the project plan; no actual docs exist for those pages.

### Marketing and trust claims that need tightening

The code currently includes values such as:

- “100+ businesses”
- “4.9/5 rating”
- “#1 Local SEO Agency in Dhaka”
- numerous before/after results and rankings
- fake-looking portfolio stats

These are marketing claims and should be either removed or replaced with verifiable, real data. The prompt explicitly forbids inventing rankings, customer counts, testimonials, or revenue.

## Technical and security risks

1. No backend or DB means all workflows are not durable.
2. No route system means public and private pages are not separated structurally.
3. No auth or authorization model exists.
4. No server-side validation or security controls are present.
5. No environment variable handling or secrets management is configured.
6. No SSR/metadata strategy beyond static root-level document title changes in client JS.
7. No tests are configured.
8. No migration strategy exists for a real operational system.
9. README is a performance/SEO marketing brief from an earlier static site direction and does not match the current architecture or the intended agency platform.
10. `public` website and private agency dashboard require clear separation and authorization model before launch.

## Repository readiness by the new brief

This repo is not production-ready for the target platform described in the master prompt. It is, however, a decent starting ground for the public marketing website and front-end design system.

The immediate next step is not a full rewrite. It is to add a realistic foundation:

- route structure
- data/domain boundaries
- docs and architecture
- Supabase-ready schema planning
- auth and owner setup documentation
- public/private application split
- small, testable feature implementations

## Required external accounts or credentials

These are not yet present in the repo and will be required for later phases:

- Supabase project and API keys
- Supabase Auth configuration
- database migration/SQL workflow
- optional AI provider credentials
- optional email provider configuration
- optional Google Search Console / GA4 access
- optional Google Business Profile API access
- optional payment integration credentials, if enabled later

## Build/test status

The environment available to this session does not expose a terminal shell, so I could not execute `npm install` / `npm run build` directly here. Based on the repository contents, the available scripts are:

- `npm run dev`
- `npm run build`
- `npm run preview`

There are no test scripts configured in `package.json` today.

## Recommended final folder structure

```text
src/
  app/                  app shell, auth guards, route layout
  components/
    marketing/
    dashboard/
    ui/
  features/
    leads/
    clients/
    projects/
    tasks/
    audits/
    keywords/
    content/
    reports/
    proposals/
    invoices/
    settings/
  lib/
    api/
    utils/
    validators/
    formatters/
  routes/
  styles/
  types/
  data/
  hooks/

supabase/
  migrations/
  functions/
  policies/

scripts/
  seed/
  migrate/

docs/
  PROJECT_AUDIT.md
  IMPLEMENTATION_PLAN.md
  ARCHITECTURE.md
  DATABASE_SCHEMA.md
  SECURITY.md
  DEPLOYMENT.md

.env.example
README.md
```

## Conclusion

This repository is currently a polished static marketing page for a local SEO agency, not a private operations platform. It is a solid UI starting point, but it does not yet satisfy the business-operations and security requirements of the project brief.

The right path is to keep the strong design direction, create proper app boundaries, define the database/auth architecture, and then implement the next phases incrementally.
