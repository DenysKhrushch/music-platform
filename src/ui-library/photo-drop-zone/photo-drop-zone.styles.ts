import { SxProps } from "@mui/material";
import theme from "../theme";

export const container: SxProps = {
  padding: "40px 20px",
  borderWidth: "1px",
  borderStyle: "dashed",
  borderColor: theme.customColors.neutral.neutral80,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "22px",
};
