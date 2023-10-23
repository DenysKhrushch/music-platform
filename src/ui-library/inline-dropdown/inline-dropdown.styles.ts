import { SxProps } from "@mui/material";
import theme from "../theme";
export const dropdown: SxProps = {
  border: "none",
  "&:focus": {
    background: "transparent",
    borderRadius: 0,
    boxShadow: "none",
  },
  "&:hover": {
    background: "transparent",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    color: theme.palette.primary.light,
  },
  "& .MuiSelect-icon": {
    color: theme.palette.primary.light,
  },
  "& .MuiSelect-iconOpen": {
    color: theme.palette.primary.light,
  },
};
export const menu: SxProps = {
  "& .MuiMenu-list": {
    backgroundColor: theme.customColors.dark.surfaceContainer,
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    borderColor: theme.customColors.dark.surface,
  },
};