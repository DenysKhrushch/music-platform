import { SxProps } from "@mui/material";
import  theme from "../theme";

export const inputPropsStyle = {
  borderRadius: 4,
  color: theme.palette.secondary.main,
  fontSize: 16,
  borderStyle: "solid",
  borderColor: theme.palette.secondary.main,
};

export const inputHelperTextContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "4px",
};

export const inputHelperText: SxProps = {
  fontSize: "12px",
  lineHeight: 1.66,
  letterSpacing: "0.03333em",
};

export const inputHelperLink: SxProps = {
  fontWeight: 500,
  color: theme.palette.primary.main,
  textDecoration: "none",
  cursor: "pointer",
};
