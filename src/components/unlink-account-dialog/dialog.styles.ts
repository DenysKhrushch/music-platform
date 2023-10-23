import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const dialog: SxProps = {
  "& .MuiDialog-paper": {
    backgroundColor: theme.customColors.dark.surfaceContainerLow,
    padding: "30px",
    borderRadius: "20px",
    maxWidth: "802px",
    height: "420px",
  },
};

export const buttonWrapper: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
  mb: 3,
};

export const button: SxProps = {
  width: 160,
  height: 40,
};
export const privacyNoteText: SxProps = {
  fontSize: "12px",
  lineHeight: "16px",
};
