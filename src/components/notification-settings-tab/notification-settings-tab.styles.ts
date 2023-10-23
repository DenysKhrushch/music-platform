import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const setDisabledStyles = (condition: boolean) =>
  condition
    ? { color: theme.customColors.neutral.neutral80, opacity: 0.38 }
    : { color: theme.customColors.neutral.neutral20 };

export const checkboxSx: SxProps = {
  color: theme.palette.secondary.main,
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  width: "54px",
};

export const icon: SxProps = {
  width: 54,
  height: 54,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

export const iconWrapper: SxProps = {
  width: 124,
  display: "flex",
  justifyContent: "space-between",
};

export const notification: SxProps = {
  padding: 0,
  paddingBottom: 2,
  borderBottom: "1px solid #49454F",
  marginBottom: "28px",
  display: "flex",
  justifyContent: "space-between",
};

export const info: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "28px",
};

export const buttonWrapper: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
};

export const button: SxProps = { width: 120, marginRight: 1.5 };
