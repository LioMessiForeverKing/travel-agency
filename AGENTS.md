# AGENTS.md

The contract for anyone — person or agent — writing code in this repository.
Read it before the first edit. It is short on purpose.

## What this project is

A travel product aimed at people who pay for someone else to do the deciding. That is the
hypothesis, not the spec. **Nothing about the product has been decided yet.** The first piece of
work is research, and it lands in `docs/research/` as a pull request before any feature is built.

Do not infer scope from this file, from the folder names, or from the placeholder page. If a
ticket does not say it, it is not in scope.

## Who does what

| | |
|---|---|
| Ayen | Product. Writes the Linear tickets, reviews every PR, merges. Does not write code here. |
| Implementation lead | Owns the codebase. Runs point on architecture, writes the code, opens the PRs. |

Ayen reviews on GitHub. That is why nothing reaches `main` except through a pull request — the
PR *is* how he sees the work.

## The loop

1. A Linear ticket exists and is assigned. No ticket, no branch.
2. Branch from `main`, one branch per ticket.
3. Commit as often as you like. Nobody counts commits.
4. Open the PR. Link the Linear ticket in the description.
5. Ayen reviews. Address feedback by changing the code, not by arguing in the thread.
6. Squash merge, delete the branch.

`main` is protected. Pushing to it directly will be rejected by GitHub, and that is deliberate.

## Pull requests

- **Under 2,000 lines changed**, additions plus deletions, excluding lockfiles. Over budget means
  find the seam and split, never ask for a bigger review.
- **One vertical slice** — the change and its tests together. Never "tests in a follow-up".
- **Refactor and behaviour change never share a PR.** The refactor goes first.
- **Title** is imperative, under 50 characters, no full stop. It completes
  *"If applied, this PR will ___"*.
- **Description** says *why*. The diff already says *how*. State the problem, the approach, and
  what the PR deliberately does not do.
- Anything the change made stale — this file, the README, `docs/` — is fixed in the same PR.
- Person-verified and CI-verified are separate claims. Say which is which.

## Code

**TypeScript**

- `strict: true`, always. No `any` — use `unknown` and narrow.
- Types come from the source of truth, generated from the schema, never hand-copied.

**React**

- Server state goes through TanStack Query. Never `useState` plus `useEffect`.
- Forms are client state. TanStack Form.
- `useEffect` is for animations. Any other use needs a reason in the PR description.
- Derive during render, handle events in handlers, `useMemo` to cache, `key` to reset.
- Error boundaries go where an error message makes sense, not around everything.

**Structure**

- Never hardcode design into a component. Every colour, size, radius and duration is a token in
  `src/app/globals.css`. If a value is not a token, add the token.
- API logic lives at the API layer, never scattered through components.

**Data**

- Supabase, with Drizzle over raw queries. See `docs/decisions/0001-stack.md`.
- RLS on every table the API can reach. No exceptions.
- Every policy checks `auth.uid() IS NOT NULL` first. One policy per operation, role named with `to`.
- The service-role key never leaves the server. The browser gets the publishable key only.
- Config lives in the environment. Secrets never in the repo — this repo is public.

**Comments**

- At most 5% of non-blank lines per file. No inline comments, ever. No block over 3 lines.
- Comments carry the *why*, never the *what*.
- `npm run audit:comments` must pass before the PR opens. Fix failures by **deleting** the
  comment, not rewording it.

**Tests**

- Test what a user does, against the DOM. Never component internals. Never CSS.
- Mostly integration, some end-to-end, fewer units than you think.
- Coverage is not the goal. Confidence is. A test that does not run is worse than no test.

**Speed**

- Measure, don't guess. Every new or changed fetch gets its Network-tab time in the PR description.
- Under 100 ms feels instant. Single-digit milliseconds come from cache, never the network.
- Prefetch on hover and on route intent. Never a spinner for data already seen.
- Animate only `transform` and `opacity`.

**Accessibility**

- Keyboard-reachable from the first commit. Not a final pass.

## Commands

```bash
npm install
npm run dev              # http://localhost:3000
npm run build
npm run typecheck
npm run lint
npm test
npm run audit:comments   # must exit 0 before a PR opens
```

## Ruled out

`any` · hardcoded design values in components · `useEffect` for data fetching · raw SQL where
Drizzle would do · secrets in the repo · inline comments · comment blocks over 3 lines · CSS
tests · tests in a follow-up PR · pushing to `main` · refactor and feature in one PR · a fetch
nobody has timed.
