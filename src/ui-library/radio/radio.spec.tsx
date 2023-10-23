import React from "react";
import { render } from "@testing-library/react";

import Radio from "./radio";

describe("Radio", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Radio label="label" value={"true"} />);
    expect(baseElement).toBeTruthy();
  });
});
