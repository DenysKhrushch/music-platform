import { SxProps } from "@mui/material";
import theme from "../theme";

export const badgeItem: SxProps = {
  padding: "8px 10px",
  color: theme.palette.primary.light,
  fontSize: "14px",
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "12px",
};
