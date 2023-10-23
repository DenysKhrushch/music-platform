import { SxProps } from "@mui/material";
import theme from "../theme";

export const darkSliderSx: SxProps = {
  "& .MuiSlider-mark": {
    color: theme.palette.secondary.main,
  },
  color: theme.palette.primary.main,
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: theme.palette.primary.main,
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: theme.palette.primary.main,
    color: theme.customColors.neutral.neutral20,
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
};
export const lightSliderSx: SxProps = {
  "& .MuiSlider-mark": {
    width: "2px",
    height: "2px",
    color: theme.customColors.dark.surface,
    opacity: 0.38,
  },
  color: theme.palette.secondary.light,

  height: 8,
  "& .MuiSlider-rail": {
    backgroundColor: theme.palette.secondary.light,
    border: "none",
    opacity: 1,
  },
  "& .MuiSlider-track": {
    backgroundColor: theme.customColors.blue.main,
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: theme.customColors.blue.main,
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: theme.palette.secondary.light,
    color: theme.customColors.neutral.neutral20,
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
};
