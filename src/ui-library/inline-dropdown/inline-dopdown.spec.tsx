import React from "react";
import { render } from "@testing-library/react";
import InlineDropdown from "./inline-dropdown";
describe("InlineDropdown", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<InlineDropdown />);
    expect(baseElement).toBeTruthy();
  });
});