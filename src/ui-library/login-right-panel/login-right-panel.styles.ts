import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const StyledLoginRightPanel = styled(Box)`
  height: 100%;
  width: 100%;
`;

export const Background = styled(StyledLoginRightPanel)`
  background-image: url('../images/login-right-panel.png');
  background-size: cover;
  animation: appear 0.5s ease-out forwards;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled(Typography)`
  margin-bottom: 8px;
`;

export const Content = styled(StyledLoginRightPanel)`
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @keyframes gradient {
    0% {
      backdrop-filter: blur(0);
      opacity: 0;
      background: linear-gradient(
        153.34deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      );
    }

    100% {
      backdrop-filter: blur(9.5px);
      opacity: 1;
      background: linear-gradient(
        143.76deg,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.8)
      );
    }
  }
`;

export const Description = styled(Typography)`
  letter-spacing: 0.25px;
`;

export const Icon = styled(Box)`
  width: 100px;
  height: 100px;
  margin-right: 24px;
  margin-bottom: 64px;

  padding: 25px;

  background: rgba(255, 255, 255, 0.02);

  border: 1px solid #72787e;
  border-radius: 6px;
`;
