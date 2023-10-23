import { SxProps } from "@mui/material";
import theme from "../theme";

export const headerSx: SxProps = {
  backgroundColor: theme.customColors.neutral.neutral10,
  padding: " 20px 24px",
  borderBottom: `1px solid ${theme.customColors.dark.surface}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  width: "100%"
};

export const iconButtonSx: SxProps = {
  color: theme.customColors.neutral.neutral80,
  width: "32px",
  height: "32px",
  padding: 0,
};

export const iconSx: SxProps = { width: "24px", height: "24px" };

export const navWrapperSx: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  height: 32,
};

export const navIconsContainerSx: SxProps = {
  width: 128,
  display: "flex",
  justifyContent: "space-between",
};

export const dividerSx: SxProps = {
  border: `.5px solid ${theme.customColors.dark.surface}`,
  margin: "0 24px",
};

export const notificationBadgeSx: SxProps = {
  ".MuiBadge-dot": {
    backgroundColor: theme.palette.error.main,
    border: `2px solid ${theme.palette.primary.dark}`,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
};
