import styled from "@emotion/styled";
import { Button, SxProps } from "@mui/material";

export const AuthIconButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;

  width: 149.33px;
  height: 72px;

  border-radius: 14px;

  &:hover {
    background: rgba(208, 188, 255, 0.08);
  }
`;

export const dividerSx: SxProps = {
  marginBottom: "24px",
  height: "20px",
  "&::before, &::after": { background: "rgba(46, 49, 51, 1)" },
};

export const authContainerSx: SxProps = {
  display: "flex",
  height: "72px",
  width: "448px",
  justifyContent: "space-between",
  alignItems: "center",
};
