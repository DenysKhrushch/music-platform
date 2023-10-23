import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const setColor = (condition: boolean) =>
  condition
    ? { color: theme.customColors.neutral.neutral20 }
    : { color: theme.customColors.neutral.neutral80, opacity: 0.38 };

export const StyledTypographyChangeLogin: SxProps = {
  color: theme.palette.primary.light,
  marginBottom: "24px",
  marginTop: "16px",
  fontWeight: 400,
  textAlign: "center",
  width: "100%",
};

export const StyledLinkChangeLogin: SxProps = {
  fontWeight: 500,
  color: theme.palette.primary.main,
  textDecoration: "none",
  cursor: "pointer",
};
