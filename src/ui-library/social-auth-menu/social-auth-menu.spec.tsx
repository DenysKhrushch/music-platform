import React from "react";
import { render } from "@testing-library/react";

import SocialAuthMenu from "./social-auth-menu";

describe("SocialAuthMenu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SocialAuthMenu />);
    expect(baseElement).toBeTruthy();
  });
});
