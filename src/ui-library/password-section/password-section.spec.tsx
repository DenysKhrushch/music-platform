import React from "react";
import { render } from "@testing-library/react";

import PasswordSection from "./password-section";

describe("PasswordSection", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <PasswordSection
        passwordReqs={{
          length: false,
          uppercase: false,
          lowercase: false,
          number: false,
          specChar: false,
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
