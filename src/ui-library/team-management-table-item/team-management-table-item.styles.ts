import { SxProps } from "@mui/material";
import theme from "../theme";

export const acceptedBadgeSx: SxProps = {
  ".MuiBadge-dot": {
    top: 40,
    backgroundColor: theme.customColors.green.main,
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.customColors.neutral.neutral20,
  },
};

export const tableCell: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0",
  borderBottom: `1px solid ${theme.customColors.dark.surface}`,
};

export const pendingBadgeSx: SxProps = {
  ".MuiBadge-dot": {
    top: 40,
    backgroundColor: theme.customColors.orange.main,
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.customColors.neutral.neutral20,
  },
};
