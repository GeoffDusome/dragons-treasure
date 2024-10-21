import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Link from "../Link";
import "@testing-library/jest-dom";

describe("Link component", () => {
  it("should render correctly", () => {
    render(<Link text="Button Test" to="https://www.google.com" />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("should render the text correctly", () => {
    render(<Link text="Button Test" to="https://www.google.com" />);
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Button Test");
  });
});
