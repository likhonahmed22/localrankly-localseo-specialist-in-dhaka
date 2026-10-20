# Architecture Overview

## Summary

The application is being evolved from a static Vite + React landing page into a maintainable, multi-part agency platform with a clear separation between:

- public marketing pages,
- private marketing-agency operations,
- and future client portal access.

The current repo is a frontend-only project with a single large component and no backend or auth boundary. We are introducing architecture boundaries first so the later CRM, reporting, and SEO workflows can be added safely.

## Layered architecture

### 1. Public marketing layer

Purpose: attract leads and sell services.

Responsibilities:
- landing page
- services pages
- pricing
- portfolio and case studies
- blog and article pages
- contact and audit capture forms
- privacy/legal pages

This layer should use simple, stateless components and form flow logic, with no private business data exposed.

### 2. App shell and routing layer

Purpose: separate the public experience from the private agency dashboard.

Responsibilities:
- route entry points
- route guards
- layout wrappers
- auth/session checks
- dashboard shell navigation
- 404 handling

This is where the project becomes safer and more maintainable.

### 3. Domain/service layer

Purpose: business logic separated from view code.

Responsibilities:
- leads and client workflows
- project creation and status updates
- task reminders
- audit processing
- invoice summaries
- report generation rules
- content drafting and approval flow

This layer should be built with plain utility functions or service modules rather than being buried in components.

### 4. Data access layer

Purpose: abstracts database access from the UI.

Responsibilities:
- Supabase client setup
- query helpers
- request validation
- authorization checks
- typed data access for leads, clients, audits, reports, etc.

This layer is essential for safe future client isolation and owner-only access.

### 5. Security and authorization layer

Purpose: enforce who can access what.

Responsibilities:
- owner/client route guards
- org membership checks
- RLS-aware database access
- safe URL validation
- server-side form validation
- rate limiting and abuse prevention

This must remain server-side and must not rely only on client components.

## Route structure strategy

The application should be organized into public and private route groups.

### Public routes

- `/`
- `/services`
- `/services/local-seo`
- `/services/google-business-profile`
- `/services/technical-seo`
- `/services/content-marketing`
- `/services/website-development`
- `/pricing`
- `/about`
- `/portfolio`
- `/blog`
- `/blog/:slug`
- `/free-seo-audit`
- `/contact`
- `/privacy-policy`
- `/terms`
- `/refund-policy`

### Auth routes

- `/login`
- `/forgot-password`
- `/reset-password`

### Private owner routes

- `/app`
- `/app/leads`
- `/app/clients`
- `/app/clients/:id`
- `/app/projects`
- `/app/tasks`
- `/app/audits`
- `/app/keywords`
- `/app/reports`
- `/app/content`
- `/app/proposals`
- `/app/invoices`
- `/app/expenses`
- `/app/automations`
- `/app/settings`

### Private client routes

- `/portal`
- `/portal/projects`
- `/portal/tasks`
- `/portal/reports`
- `/portal/documents`
- `/portal/invoices`
- `/portal/profile`

## Data model direction

The project should target a Supabase PostgreSQL schema with these major groups:

- `profiles`
- `organizations`
- `organization_members`
- `leads`
- `lead_activities`
- `clients`
- `projects`
- `project_members`
- `tasks`
- `task_comments`
- `audit_runs`
- `audit_findings`
- `keywords`
- `keyword_projects`
- `content_items`
- `content_versions`
- `proposals`
- `proposal_items`
- `invoices`
- `invoice_items`
- `payments`
- `expenses`
- `reports`
- `report_metrics`
- `integration_connections`
- `automations`
- `notifications`
- `documents`
- `activity_logs`

The schema should use explicit foreign keys, indexes, and authorization boundaries. No client should be able to read another organization's records.

## Frontend structure recommendation

```text
src/
  app/
    App.jsx
    routes/
      PublicRoutes.jsx
      PrivateOwnerRoutes.jsx
      ClientPortalRoutes.jsx
    guards/
      AuthGuard.jsx
      OwnerGuard.jsx
      ClientGuard.jsx
  components/
    marketing/
      Header.jsx
      Footer.jsx
      Hero.jsx
      CTASection.jsx
    dashboard/
      Sidebar.jsx
      TopBar.jsx
      StatCard.jsx
    ui/
      Button.jsx
      Card.jsx
      Modal.jsx
      EmptyState.jsx
      Toast.jsx
  features/
    leads/
    clients/
    projects/
    tasks/
    audits/
    reports/
    content/
    invoices/
  hooks/
    useAuth.jsx
    useOrganization.jsx
  lib/
    supabase.js
    validators.js
    formatters.js
    constants.js
  styles/
    tokens.css
    app.css
  utils/
    money.js
    dates.js
    urls.js
```

## Recommended implementation sequence

1. Create route shell and route boundary files.
2. Split large UI components into smaller modules.
3. Add public route pages as skeleton pages.
4. Add dashboard shell and owner access wrapper.
5. Add client portal route shell.
6. Add data layer abstraction and placeholder service files.
7. Add env config and app settings placeholders.
8. Add Supabase migration and RLS policy docs.
9. Implement leads and client records.
10. Implement tasks/projects.
11. Implement audits and reports.
12. Add AI content workspace.
13. Add automation and integrations.

## Design system direction

The existing design language is useful and should be retained:

- blue-first brand identity
- clean cards and form fields
- strong CTA styling
- responsive spacing
- dark footer and visual hierarchy

The main improvement is not changing the branding completely; it is making the system modular and production-aware.

## Security and trust notes

- No private route should rely on React-only checks.
- Database authorization must be enforced via Supabase RLS.
- All external integrations should be called server-side where possible.
- User input must be validated before writing to storage or database.
- Public forms should not be connected to privileged services without explicit setup.
- Business reports and client data must never be exposed publicly.

## Risks to actively manage

- mixing business logic into large components
- relying on fake data in production flows
- exposing private routes without guards
- using unverified legal or pricing claims
- shipping integrations before credentials and permissions are set up

## Conclusion

The future architecture is clear: public website + private application shell + secure data access + domain services. The next step is to implement the route shell and cleaner app boundaries without removing useful current marketing design patterns.
