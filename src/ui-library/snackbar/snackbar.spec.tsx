import React from "react";
import { render } from "@testing-library/react";

import Snackbar from "./snackbar";

describe("Snackbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Snackbar
        size="small"
        withIcon
        show
        variant="primary"
        text={"Test text"}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
