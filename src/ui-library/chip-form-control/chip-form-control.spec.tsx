import React from "react";
import { render } from "@testing-library/react";

import ChipFormControl from "./chip-form-control";

describe("ChipFormControl", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ChipFormControl />);
    expect(baseElement).toBeTruthy();
  });
});
