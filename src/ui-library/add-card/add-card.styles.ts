import { SxProps } from "@mui/material";
import theme from "../theme";

export const formSx: SxProps = {
  marginLeft: 0,
  marginRight: 0,
  borderRadius: "16px",
  justifyContent: "space-between",
  padding: "8px 20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export const subTextSx: SxProps = {
  marginLeft: 0,
  marginTop: 0,
  paddingTop: 0,
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.secondary.main,
  lineHeight: "20px",
  letterSpacing: "0.25px",
  wordWrap: "break-word",
};
