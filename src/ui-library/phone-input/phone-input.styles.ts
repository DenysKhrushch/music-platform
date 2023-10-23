import { CSSProperties } from "react";
import { SxProps } from "@mui/material";
import theme from "../theme";

export const selectStyle: CSSProperties | undefined = {
  height: "30px",
  marginLeft: -10,
};

export const selectSx: SxProps = {
  "& .MuiSelect-select": {
    minHeight: "auto !important",
  },
  "& .MuiOutlinedInput-notchedOutline": { border: "none !important" },
  "& .MuiOutlinedInput-notchedOutline-focused": { border: 0 },
  "& .MuiSelect-icon": {
    color: theme.palette.secondary.main,
  },
  "& .MuiSelect-iconOpen": {
    color: theme.palette.primary.main,
  },
  "&.Mui-disabled .MuiSelect-icon": {
    color: theme.customColors.neutral.neutral80,
    opacity: 0.6,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none ",
  },
};

export const paperSx: SxProps = {
  marginTop: "10px",
  background: theme.customColors.dark.surfaceContainer,
  color: theme.palette.secondary.main,
  boxShadow:
    "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
  maxHeight: "200px",
};

export const textSx: SxProps = {
  marginLeft: "4px",
  color: theme.palette.secondary.main,
};

export const setColor = (condition: boolean | undefined) =>
  condition
    ? { color: theme.customColors.neutral.neutral80, opacity: 0.38 }
    : {
        color: theme.palette.secondary.main,
      };
