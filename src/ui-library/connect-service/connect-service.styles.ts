import { SxProps } from "@mui/material";
import theme from "../theme";

export const containerSx: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: " 8px 16px",
  background: theme.customColors.dark.surfaceContainer,
  borderRadius: "16px",
};
