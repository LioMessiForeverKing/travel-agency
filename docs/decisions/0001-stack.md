# 0001 — Next.js, Supabase, Drizzle

**Status:** accepted · **Date:** 2026-09-08

## Context

The project needs a stack before it needs a product, because the repository has to exist for the
research to land in. Choosing later would mean choosing under deadline pressure.

## Decision

Next.js with the App Router, TypeScript in strict mode, Tailwind v4 for styling, Supabase for
Postgres and auth, and Drizzle as the query layer.

These are the house defaults. They are chosen for being boring: the novelty budget belongs to the
product, not the infrastructure. Supabase gives auth, Postgres and row-level security without
running anything. Drizzle keeps the types generated from the schema rather than hand-copied.

Supabase and Drizzle are **decided but not installed.** Wiring a database before there is a
schema to hold would be building the wrong thing early. They go in with the first table.

## Consequences

- Row-level security is mandatory on every table, and policies are tested before deploy. That is
  a real ongoing cost and it is accepted.
- Hosting is assumed to be Vercel. Nothing so far depends on it, so this stays reversible.
- Choosing a server-rendered framework means the AI work, when it arrives, runs server-side by
  default. Keys stay off the client for free.

## Rejected

- **Convex.** An experiment, not a default. Revisit only with a reason.
- **A separate backend service.** Nothing yet justifies a second deployable.
- **Deciding the ORM later.** Raw SQL scattered through route handlers is harder to remove than
  a query builder is to adopt.
