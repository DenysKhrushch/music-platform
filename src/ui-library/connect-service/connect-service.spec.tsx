import React from "react";
import { render } from "@testing-library/react";

import ConnectService from "./connect-service";

describe("ConnectService", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ConnectService />);
    expect(baseElement).toBeTruthy();
  });
});
