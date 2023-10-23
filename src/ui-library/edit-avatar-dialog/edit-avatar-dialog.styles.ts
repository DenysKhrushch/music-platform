import { SxProps } from "@mui/material";
import theme from "../theme";

export const dialog: SxProps = {
  minWidth: 500,
  backgroundColor: theme.customColors.dark.surfaceContainerLow,
  padding: "30px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

export const sliderContainer: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "21px",
  justifyContent: "space-between",
};

export const rotateContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "24px",
};

export const buttonsContainer: SxProps = {
  alignSelf: "flex-end",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  marginTop: "10px",
};
