import { SxProps } from "@mui/material";
import  theme from "../theme";

export const checkboxSx: SxProps = {
  color: theme.palette.secondary.main,
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  marginRight: "8px",
};

export const formLabelSx: SxProps = {
  padding: "8px",
  borderRadius: "16px",
  margin: 0,
};
