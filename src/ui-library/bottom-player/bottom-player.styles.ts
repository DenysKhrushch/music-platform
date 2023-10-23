import { SxProps } from "@mui/material";
import theme from "../theme";

export const playerContainer: SxProps = {
  padding: "24px",
  position: "fixed",
  bottom: 0,
  width: "100%",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: theme.customColors.dark.surface,
  backgroundColor: theme.customColors.dark.surfaceContainer,
};
