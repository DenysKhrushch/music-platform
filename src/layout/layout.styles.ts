import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const layoutWrapperSx: SxProps = {
  height: "100vh !important",
  background: theme.palette.primary.dark,
  display: "flex",
  paddingTop: "81px",
};

export const styledSignWrapperSx: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  height: "100vh !important",
  paddingTop: "81px",
  background: theme.palette.primary.dark,
};

export const styledSignFormWrapperSx: SxProps = {
  display: "flex",
  paddingTop: "32px",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
};
