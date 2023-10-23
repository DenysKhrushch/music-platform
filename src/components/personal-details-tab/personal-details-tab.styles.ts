import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const container: SxProps = {
  display: "flex",
  paddingLeft: "24px",
  flexDirection: "column",
  gap: "16px",
};

export const setColor = (condition: boolean) =>
  condition
    ? { color: theme.customColors.neutral.neutral20 }
    : { color: theme.customColors.neutral.neutral80, opacity: 0.38 };
