import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Tabs from "../Tabs";
import "@testing-library/jest-dom";

describe("Tabs component", () => {
  it("should render correctly", () => {
    render(<Tabs tabs={[{ title: "Tab", content: "Content" }]} />);
    const tab = screen.getByRole("tabpanel");
    expect(tab).toBeInTheDocument();
  });
});
