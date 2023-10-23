import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const tabsWrapperSx: SxProps = {
  borderBottom: 1,
  paddingLeft: "12px",
  borderColor: "#49454F",
};

export const tabSx: SxProps = {
  textTransform: "capitalize",
  color: theme.palette.secondary.main,
  padding: "8px 0",
  margin: "0 12px",
  "&.Mui-selected": { color: "#FFF" },
};
