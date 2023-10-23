import React, { FC, useCallback, useEffect, useState } from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";

import {
  Background,
  Content,
  Description,
  Icon,
  StyledLoginRightPanel,
  Title,
} from "./login-right-panel.styles";
import DelayedElement from "../delayed-element/delayed-element";
import { Feature } from "../types/feature";

interface LoginRightPanelProps {
  features: Feature[];
  role:
    | "general"
    | "sync-buyer"
    | "individual-music-producer"
    | "catalog-owner";
}

export const LoginRightPanel: FC<LoginRightPanelProps> = ({
  features,
  role,
}) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const theme = useTheme();
  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));

  const [animation, setAnimation] = useState(true); // put false to disable animation as default

  useEffect(() => {
    const timer = setTimeout(() => {
      // animation && setShowFeatures(true);
      setShowFeatures(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [animation]);

  const toggleAnimation = useCallback(() => {
    setAnimation(!animation);
    setShowFeatures(!showFeatures);
  }, [animation, showFeatures]);

  return (
    <StyledLoginRightPanel id="login-right-panel">
      <Background>
        {showFeatures && (
          <Content
            sx={{
              animation: animation ? "gradient 0.6s ease-out forwards" : "none",
            }}
          >
            {features
              .filter((feature: Feature) => feature.role === role)
              .map((feature: Feature, index: number) => {
                return (
                  <DelayedElement
                    key={feature.title}
                    delay={animation ? 1000 + index * 280 : 0}
                    animation={animation}
                  >
                    <Icon
                      sx={
                        index ===
                        features.filter(
                          (feature: Feature) => feature.role === role
                        ).length -
                          1
                          ? { marginBottom: "0 !important" }
                          : {}
                      }
                    >
                      {feature.icon}
                    </Icon>
                    <Box>
                      <Title variant={isMdOrUp ? "h3" : "h6"}>
                        {feature.title}
                      </Title>
                      <Description variant="body2">
                        {feature.description}
                      </Description>
                    </Box>
                  </DelayedElement>
                );
              })}
          </Content>
        )}
      </Background>
    </StyledLoginRightPanel>
  );
};

export default LoginRightPanel;
