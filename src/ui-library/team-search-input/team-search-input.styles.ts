import { SxProps } from "@mui/material";
import theme from "../theme";

export const chipsContainer: SxProps = {
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  maxWidth: "350px",
  color: "red",
  "&::-webkit-scrollbar": {
    height: "2px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "3px",
  },
};

export const inputPropsStyle = {
  borderRadius: 4,
  color: theme.palette.secondary.main,
  fontSize: 16,
  borderStyle: "solid",
  borderColor: theme.customColors.dark.outlined,
};
