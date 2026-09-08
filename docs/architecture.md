# Architecture

Thin on purpose. Most of this document cannot honestly be written until the research in
`docs/research/` says what the product is. What is here is decided; what is missing is open.

## Decided

```
Browser
  │
  ▼
Next.js App Router  ──  React Server Components by default
  │                      Client components only where interaction demands it
  ▼
API layer           ──  All data access lives here, never in a component
  │
  ▼
Drizzle
  │
  ▼
Supabase (Postgres) ──  RLS on every table the API can reach
```

- **Next.js, App Router, TypeScript strict.** Server components are the default; a component
  becomes a client component only when it needs interaction or browser state.
- **Tailwind v4 with a token layer.** Every colour, size, radius and duration is defined in
  `@theme` in `src/app/globals.css`. Components reference tokens, never raw values.
- **Supabase and Drizzle** for persistence, when there is something to persist. Not wired up yet
  — adding it before there is a schema to hold would be building the wrong thing early.
- **The API layer is the seam.** Nothing in `src/app/**/page.tsx` talks to a database directly.
  When the first table exists, that rule is what keeps the UI replaceable.

## Open

Everything below is a **TODO** that the research ticket should answer or explicitly defer.

- What the product does, and for whom.
- Whether there are accounts at all, and if so who they belong to — traveller, agent, or both.
- Whether money moves through the product, and if so through whom.
- Where the AI actually sits: planning, search, concierge during the trip, or none of the above.
- Which third-party inventory or data the product depends on, and what it costs.
- What the first thing a user sees is, and what it asks of them.

## Rules that survive whatever the research says

- Server state goes through TanStack Query. Never `useState` plus `useEffect`.
- The service-role key never reaches the browser.
- Every fetch has a measured time before it merges.
- Nothing above the fold waits on a request.
