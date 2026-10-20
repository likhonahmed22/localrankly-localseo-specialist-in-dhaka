# Implementation Plan

## Goal

Turn the existing React + Vite website into a maintainable LocalRankly system with:

- a premium public website for sales and trust-building,
- a secure agency owner dashboard,
- a future-ready client portal,
- a structured backend/data layer via Supabase,
- and a clear path to SEO tools, CRM, audit workflows, and reporting without overbuilding before the foundation is ready.

## Guiding principles

1. Keep the public website usable without requiring all optional integrations.
2. Separate public pages from private agency dashboards and client portals.
3. Delay expensive integrations until the data model and authorization are in place.
4. Favor small, testable implementation stages over large rewrites.
5. Make the project maintainable for a solo founder and not just visually impressive.

## Phase 1: Audit and foundation

Status: in progress.

Complete:
- repository audit
- tech risk review
- repo structure assessment
- documentation of current gaps

Planned next tasks:
- split app into public and private route groups
- create route-level boundaries and skeleton screens
- establish a safer project tree
- add architecture and environment documentation
- add placeholder route guards and clear future implementation map

## Phase 2: Public site upgrade

Focus on the marketing site and conversion flows:

- define a stable public landing-page structure
- replace fake/tricky claims with verifiable language
- add proper legal pages
- add route-based public pages for services, pricing, blog, contact, etc.
- improve semantics and metadata support
- make forms ready for backend submission later
- add privacy-aware form validation and consent language

## Phase 3: Database and auth foundation

After the app shell is stable:

- configure Supabase project setup docs
- define SQL schema and migration structure
- create `profiles`, `organizations`, `clients`, `projects`, etc.
- add RLS guidance and access policy models
- create owner-first authentication flow docs
- define client vs owner permissions in a clear rule set

## Phase 4: CRM and agency operations

Implement the workflow that supports the business itself:

- leads table and activity tracking
- conversion pipeline states
- client records and project assignment
- tasks and milestones
- proposal and invoice models
- basic financial summaries

## Phase 5: SEO audit and reporting

Introduce the technical tools once data/auth is in place:

- website audit runs and findings
- keyword tracking workspace
- report generation and export
- data source labeling and honest reporting

## Phase 6: Client portal and AI content

Then add the revenue-supporting tools:

- secure client portal
- approved deliverables and reports
- AI-assisted drafting workflow
- content approvals and publishing controls

## Phase 7: Automation and production polish

Final layer:

- reminder workflows
- invoice follow-up workflows
- onboarding automation
- n8n-ready triggers
- deployment docs and security review

## Dependencies and external setup

Planned required external services:

- Supabase project
- optional AI provider
- optional email provider
- optional GA4/Search Console access
- optional Google Business Profile API access
- optional payment integration only after merchant setup is confirmed

## Safe implementation order

1. Route structure and app boundaries
2. Public page skeletons and legal pages
3. Shared styling tokens and layout primitives
4. Environment and config documentation
5. Supabase-ready models and migration plan
6. Auth guard scaffolding
7. CRM features
8. Client portal and reports
9. SEO tool engine
10. Integrations and automation

## Acceptance criteria

The foundation is considered in good shape when:

- the app clearly separates public and private areas,
- the route structure is coherent,
- the project tree is easier to navigate,
- the codebase has clear domain boundaries,
- the business logic is not mixed into a single `App.jsx`,
- and the next features can be added without major refactors.
