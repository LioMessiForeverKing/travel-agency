import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("home page", () => {
  it("says the product is undecided", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /nothing has been built yet/i }),
    ).toBeInTheDocument();
  });

  it("points at the three documents that decide what gets built", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: /AGENTS\.md/ })).toHaveAttribute(
      "href",
      expect.stringContaining("AGENTS.md"),
    );
    expect(screen.getByRole("link", { name: /docs\/research/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /architecture\.md/ })).toBeInTheDocument();
  });
});
