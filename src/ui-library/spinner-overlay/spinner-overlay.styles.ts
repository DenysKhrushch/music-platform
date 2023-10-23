import { CSSProperties } from "react";
import { SxProps } from "@mui/material";
import theme from "@/ui-library/theme";

export const paper: SxProps = {
  width: "100%",
  height: "100%",
  backgroundColor: theme.customColors.neutral.neutral10,
  "& .MuiDialog-paper": {
    background: "none",
  },
};

export const container: SxProps = {
  position: "relative",
  height: "144px",
  width: "144px",
  padding: "22px",
};

export const spinnerIcon: CSSProperties | undefined = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
