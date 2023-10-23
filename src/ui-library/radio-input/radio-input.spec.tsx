import React from "react";
import { render } from "@testing-library/react";

import { RadioInput } from "./radio-input";

describe("RadioInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<RadioInput />);
    expect(baseElement).toBeTruthy();
  });
});
