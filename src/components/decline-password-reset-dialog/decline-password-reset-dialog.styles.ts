import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const dialog: SxProps = {
  minWidth: 500,
  backgroundColor: theme.customColors.dark.surfaceContainer, //TODO: Change to the color from the Avatar editor Branch once it will be merged
  padding: "30px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export const buttonsContainer: SxProps = {
  alignSelf: "flex-end",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  marginTop: "16px",
};
