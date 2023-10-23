import { SxProps } from "@mui/material";
import theme  from "../theme";

export const radioSx: SxProps = {
  color: theme.palette.secondary.main,
  "&.Mui-checked": {
    color: `${theme.palette.primary.main} !important`,
  },
};

export const formControlOutlinedSx: SxProps = {
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: theme.customColors.dark.surface,
  marginBottom: "16px",
  padding: "2px 8px 8px 8px",
  marginLeft: 0,
  marginRight: 0,
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
};

export const formSx: SxProps = {
  marginLeft: 0,
  marginRight: 0,
  borderRadius: "16px",
  display: "flex",
  flexDirection: "row",
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
