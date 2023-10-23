import { SxProps } from "@mui/material";
import theme from "../theme";

export const selectedChipSx: SxProps = {
  margin: "4px",
  padding: "10px 24px",
  height: "40px",
  boxSizing: "border-box",
  transition: "200ms",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "100px",
  "&:hover": {
    border: `1px solid ${theme.customColors.dark.outlined}`,
    background: " rgba(208, 188, 255, 0.08)",
    boxSizing: "border-box",
  },
};
export const unselectedChipSx: SxProps = {
  margin: "4px",
  padding: "10px 24px",
  height: "40px",
  boxSizing: "border-box",
  transition: "200ms",
  backgroundColor: "transparent",
  border: `1px solid ${theme.customColors.dark.outlined}`,
  borderRadius: "100px",
  "&:hover": {
    border: `1px solid ${theme.customColors.dark.outlined}`,
    background: " rgba(208, 188, 255, 0.08)",
    boxSizing: "border-box",
  },
};

export const chipLabelSx = (selected: boolean): SxProps => {
  return {
    color: selected
      ? theme.customColors.neutral.neutral20
      : theme.palette.primary.main,
  };
};
