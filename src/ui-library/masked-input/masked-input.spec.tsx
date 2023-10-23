import React from "react";
import { render } from "@testing-library/react";

import { MaskedInput } from "./masked-input";

describe("MaskedPhoneInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MaskedInput />);
    expect(baseElement).toBeTruthy();
  });
});
