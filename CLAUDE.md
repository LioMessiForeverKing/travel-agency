# CLAUDE.md

**Read `AGENTS.md` first.** It is the contract for this repository and it applies to you in full.
This file only adds what is specific to Claude Code.

## Before you touch anything

The product is undecided. `docs/research/` is empty until the research ticket lands. If a request
would require you to invent product scope, stop and say so rather than guessing.

## Working here

- One Linear ticket, one branch, one pull request. `main` is protected; do not try to push to it.
- Run `npm run audit:comments` before opening a PR. It enforces the comment budget in `AGENTS.md`
  and will fail the build otherwise.
- When you write code, write it comment-free by default. Add a comment only for a *why* the code
  cannot carry on its own.
- Prefer editing an existing file to adding a new one. A simple change that touches many files is
  a design smell, not a chore.

## Verification

Say exactly what you verified. "It builds" and "I used it" are different claims, and the PR
description keeps them in separate rows. Never report a test as passing unless you ran it.
