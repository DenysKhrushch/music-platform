import theme from "@/ui-library/theme";
import { SxProps } from "@mui/material";

export const wrapper: SxProps = {
  display: "flex",
  paddingTop: "32px",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
};

export const StyledTypographyVerification: SxProps = {
  color: "#E2E2E5",
  mt: 2,
  alignItems: "center",
  letterSpacing: "0.5px",
};

export const StyledButtonVerification: SxProps = {
  padding: "10px",
  borderRadius: "100px",
  textTransform: "none",
  transition: "200ms",
  border: `1px solid ${theme.customColors.dark.outlined}`,
  "&.Mui-disabled": {
    background: "rgba(230, 224, 233, 0.12)",
  },
  ":hover": {
    boxShadow:
      "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
  },
};

export const setColor = (condition: boolean) =>
  condition
    ? { color: theme.customColors.neutral.neutral80, opacity: 0.38 }
    : { color: theme.palette.primary.main };
