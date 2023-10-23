import React from "react";
import { render } from "@testing-library/react";

import { EditAvatarDialog } from "./edit-avatar-dialog";

describe("EditAvatarDialog", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<EditAvatarDialog />);
    expect(baseElement).toBeTruthy();
  });
});
