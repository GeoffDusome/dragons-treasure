import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Accordion from "../Accordion";
import "@testing-library/jest-dom";

describe("Accordion component", () => {
  it("should render correctly", () => {
    render(
      <Accordion
        items={[
          {
            title: "Title 1",
            content: "Content 1",
            open: true,
          },
          {
            title: "Title 2",
            content: "Content 2",
          },
          {
            title: "Title 3",
            content: "Content 3",
          },
        ]}
      />,
    );
    const accordion1 = screen.getByText("Title 1");
    expect(accordion1).toBeInTheDocument();

    const accordion2 = screen.getByText("Title 2");
    expect(accordion2).toBeInTheDocument();

    const accordion3 = screen.getByText("Title 3");
    expect(accordion3).toBeInTheDocument();
  });
});
