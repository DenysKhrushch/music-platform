import { SxProps } from "@mui/material";
import theme from "../theme";

export const paperSx: SxProps = {
  marginTop: "10px",
  background: theme.customColors.dark.surfaceContainer,
  color: theme.palette.secondary.main,
  boxShadow:
    "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
  maxHeight: "200px",
};

export const selectSx: SxProps = {
  color: theme.palette.secondary.main,

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.customColors.dark.outlined,
    borderWidth: 1,
  },

  "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    color: "#8B9198 !important",
    border: "1px solid rgba(230, 224, 233, 0.12);",
  },

  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: theme.customColors.neutral.neutral80,
    opacity: 0.38,
  },

  ".MuiOutlinedInput-notchedOutline": {
    borderColor: theme.customColors.dark.outlined,
  },
  "& .MuiOutlinedInput-notchedOutline-focused": {
    borderColor: theme.palette.primary.main,
  },
  "& .MuiSelect-icon": {
    color: theme.palette.secondary.main,
  },
  "&.Mui-disabled .MuiSelect-icon": {
    color: theme.customColors.neutral.neutral80,
    opacity: 0.38,
  },
  "& .MuiSelect-iconOpen": {
    color: theme.palette.primary.main,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
};

export const errorSelectSx: SxProps = {
  color: `${theme.palette.error.main}`,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.error.main} !important`,
  },
  "& .MuiOutlinedInput-notchedOutline-focused": {
    borderColor: theme.palette.primary.main,
  },
  "& .MuiSelect-iconOpen": {
    color: `${theme.palette.error.main}`,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.primary.main} !important`,
  },

  "& .MuiSelect-icon": {
    color: `${theme.palette.error.main}`,
  },
  "&.Mui-focused .MuiSelect-iconOpen": {
    color: `${theme.palette.primary.main}`,
  },
  "&.Mui-focused .MuiSelect-icon": {
    color: `${theme.palette.primary.main}`,
  },
};

export const getLabelSx = (
  disabled: boolean | undefined,
  error: boolean | undefined
): SxProps => {
  if (disabled) {
    return { color: "#C6C6C9 !important", opacity: 0.38 };
  }

  return error
    ? { color: theme.palette.error.main }
    : { color: theme.palette.secondary.main };
};
