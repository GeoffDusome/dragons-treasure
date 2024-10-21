import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("should render correctly", () => {
    render(<Button text="Button Test" style="filled" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render the text correctly", () => {
    render(<Button text="Button Test" style="filled" />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Button Test");
  });

  it("should render the icon correctly", () => {
    render(
      <Button
        text="Button Test"
        style="filled"
        icon="https://placehold.co/24"
        iconPosition="left"
      />,
    );
    const icon = screen.getByRole("presentation", { hidden: true });
    expect(icon).toBeInTheDocument();
  });
});
