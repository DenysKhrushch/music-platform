import React from "react";
import { render } from "@testing-library/react";

import Button from "./badges";

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button  badges={[]}/>);
    expect(baseElement).toBeTruthy();
  });
});
