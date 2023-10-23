import { SxProps } from "@mui/material";
import theme from "../theme";

export const snackbar = (size: string, variant?: string): SxProps => {
  const renderBackground = () => {
    if (variant === "primary") {
      return theme.customColors.primary;
    }
    if (variant === "danger") {
      return theme.customColors.danger;
    }
    return theme.customColors.default;
  };

  const renderHeight = () => {
    if (size === "small") {
      return 48;
    }
    if (size === "medium") {
      return "auto";
    }
    return 112;
  };

  return {
    maxWidth: 344,
    width: 344,
    height: renderHeight(),
    "& .MuiPaper-root": {
      width: "100%",
      height: renderHeight(),
      backgroundColor: renderBackground(),
      color: theme.customColors.light.main,
      "& .MuiSnackbarContent-action": {
        padding: 0,
      },
    },
  };
};

export const title = (variant?: string): SxProps => {
  const renderColor = () => {
    if (variant === "primary") {
      return "#F0F0F3";
    }
    if (variant === "danger") {
      return "#1A1C1E";
    }
    return theme.customColors.default;
  };
  return {
    color: renderColor(),
  };
};

export const iconStyles = (variant?: string,marginRight?:number): SxProps => {
  const renderBackground = () => {
    if (variant === "primary") {
      return "#F0F0F3";
    }
    if (variant === "danger") {
      return "#1A1C1E";
    }
    return theme.customColors.default;
  };

  return {
    color: renderBackground(),
    mr: marginRight,
  };
};

export const container: SxProps = { display: "flex", alignItems: "center" };

export const crossIcon: SxProps = {
  p: 0,
  color: theme.customColors.light.main,
};

export const message = (size: string, variant?: string): SxProps => {
  const renderColor = () => {
    if (variant === "primary") {
      return "#F0F0F3";
    }
    if (variant === "danger") {
      return "#1A1C1E";
    }
    return theme.customColors.default;
  };
  return {
    color: renderColor(),
  };
};
