import React from "react";
import { render } from "@testing-library/react";

import Chip from "./chip";

describe("Chip", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
        <Chip
            key={'genre.value'}
            selectedChips={[]}
            option={{label: 'genre.label', value: 'genre.value'}}
            value={'genre.value'}
        />);
    expect(baseElement).toBeTruthy();
  });
});
