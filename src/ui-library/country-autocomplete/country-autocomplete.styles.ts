import { SxProps } from "@mui/material";
import theme  from "../theme";

export const listbox: SxProps = {
  "::-webkit-scrollbar": {
    width: "4px",
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    height: "100px",
    webkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    backgroundColor: `${theme.customColors.dark.outlined}`,
  },
};

export const paper: React.CSSProperties | undefined = {
  background: theme.customColors.dark.surfaceContainer,
  color: theme.palette.secondary.main,
  boxShadow:
    "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
};
