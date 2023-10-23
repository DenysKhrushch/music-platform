import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const leftPanelSx: SxProps = {
  background: "#1A1C1E",
  width: "40%",
  borderRight: `1px solid ${theme.customColors.dark.surface}`,
  padding: "32px 48px",
};

export const progressSx: SxProps = {
  marginBottom: "24px",
  backgroundColor: theme.customColors.dark.surface,
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: theme.palette.primary.main,
  },
};

export const rightPanelSx: SxProps = {
  width: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxHeight: "90vh",
};

export const actionsPanelSx: SxProps = {
  height: "88px",
  borderTop: `1px solid ${theme.customColors.dark.surface}`,
  padding: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const scrollableContainerSx: SxProps = {
  overflowY: "scroll",
  flex: 1,
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "none",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.customColors.dark.outlined,
    borderRadius: "100px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
};

export const setDisabledStyles = (condition: boolean) =>
  condition
    ? { color: theme.customColors.neutral.neutral80, opacity: 0.38 }
    : { color: theme.customColors.neutral.neutral20 };
