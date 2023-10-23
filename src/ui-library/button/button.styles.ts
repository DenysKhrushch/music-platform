import { SxProps } from "@mui/material";
import theme from "../theme";

export const button: SxProps = {
  padding: "10px",
  borderRadius: "100px",
  textTransform: "none",
  transition: "200ms",
  paddingLeft: "24px",
  paddingRight: "24px",
  "&.MuiButton-contained": {
    background: theme.palette.primary.main,
    ":hover": {
      background: theme.palette.primary.main,
      boxShadow:
        "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
    },
  },
  "&.MuiButton-outlined": {
    background: "none",
    border: `1px solid ${theme.customColors.dark.outlined}`,
    boxSizing: "border-box",
    color: theme.palette.primary.main,
    ":hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    "&.Mui-disabled": {
      border: `1px solid ${theme.customColors.dark.outlined}`,
      background: "none",
      color: theme.palette.primary.main,
      opacity: 0.12,
    },
  },
  "&.Mui-disabled": {
    background: "rgba(230, 224, 233, 0.12)",
  },
};
