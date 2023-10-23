import React from "react";
import { render } from "@testing-library/react";

import LoginRightPanel from "./login-right-panel";
import {
  IaMultifunctionalSearchIcon,
  MusicDiscoveryIcon,
} from "@/ui-icons";

const features = [
  {
    icon: <MusicDiscoveryIcon />,
    title: "Music Discovery",
    description:
      "We use algorithms to suggest new songs, artists, and playlists based on your preferences and listening history.",
    role: "general",
  },
  {
    icon: <IaMultifunctionalSearchIcon />,
    title: "IA Multifunctional Search",
    description:
      "Easy search for various music-related content, such as songs, albums, and playlists, with fast and precise results.",
    role: "general",
  },
];

describe("LoginRightPanel", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LoginRightPanel features={features} />);
    expect(baseElement).toBeTruthy();
  });
});
