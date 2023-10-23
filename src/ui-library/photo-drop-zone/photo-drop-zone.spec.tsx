import React from "react";
import { render } from "@testing-library/react";

import { PhotoDropZone } from "./photo-drop-zone";

describe("PhotoDropZone", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PhotoDropZone />);
    expect(baseElement).toBeTruthy();
  });
});
