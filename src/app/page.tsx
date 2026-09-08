const NEXT_STEPS = [
  {
    href: "https://github.com/LioMessiForeverKing/travel-agency/blob/main/AGENTS.md",
    label: "AGENTS.md",
    detail: "How we work, and what the code has to look like.",
  },
  {
    href: "https://github.com/LioMessiForeverKing/travel-agency/tree/main/docs/research",
    label: "docs/research",
    detail: "Empty until the research ticket lands. That decides the product.",
  },
  {
    href: "https://github.com/LioMessiForeverKing/travel-agency/blob/main/docs/architecture.md",
    label: "docs/architecture.md",
    detail: "What is decided, and what is still open.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-full max-w-2xl flex-col justify-center gap-gutter p-gutter">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-sm text-ink-muted">travel-agency</p>
        <h1 className="text-display font-semibold tracking-tight text-balance">
          Nothing has been built yet, and that is on purpose.
        </h1>
        <p className="text-ink-muted">
          The stack is decided. The product is not. Research comes first.
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {NEXT_STEPS.map((step) => (
          <li key={step.href}>
            <a
              href={step.href}
              className="block rounded-panel border border-line bg-raised p-4 transition-colors duration-quick ease-standard hover:border-accent focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="font-mono text-sm text-accent">{step.label}</span>
              <span className="mt-1 block text-sm text-ink-muted">{step.detail}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
