import { SxProps } from "@mui/material";
import theme from "../theme";

export const StyledLinkLearnAboutPlan: SxProps = {
  fontSize: "14px",
  fontWeight: 500,
  color: theme.palette.primary.light,
  cursor: "pointer",
};
export const StyledSubscriptionPlanWrapper: SxProps = {
  background: "#282A2D",
  borderRadius: "8px",
  padding: "16px",
  marginTop: "16px",
};
export const StyledSubscriptionFirstLine: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "22px",
  marginBottom: "22px",
};

export const StyledSubscriptionPlanTitle: SxProps = {
  color: theme.palette.primary.light,
  display: "flex",
  alignItems: "center",
  fontSize: "22px",
};

export const viewDetailsButton: SxProps = {
  padding: "10px 12px",
  textTransform: "capitalize",
  lineHeight: "20px",
};
