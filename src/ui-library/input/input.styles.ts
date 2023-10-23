import { SxProps } from "@mui/material";
import theme from "../theme";

export const input: SxProps = {
  borderRadius: 4,
  padding: 0,

  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: theme.customColors.neutral.neutral80,
    opacity: 0.38,
  },
  "& label.Mui-error": {
    color: `${theme.palette.error.main} !important`,
  },
  "& label.Mui-focused": {
    color: `${theme.palette.primary.main} !important`,
  },
  "& label.Mui-disabled": {
    color: theme.customColors.neutral.neutral80,
    opacity: "0.38",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.customColors.dark.outlined,
    },

    "&:hover fieldset": {
      borderColor: theme.customColors.dark.outlined,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-error fieldset": {
      borderWidth: "2px",
    },
    "&.Mui-disabled fieldset": {
      border: "1px solid rgba(230, 224, 233, 0.12)",
      "&:hover fieldset": {
        border: "1px solid rgba(230, 224, 233, 0.12)",
      },
      pointerEvents: "none",
      "&:hover": {
        opacity: 0.3,
      },
    },
    "& input": {
      "&[disabled]": {
        color: `${theme.customColors.dark.outlined} !important`,
      },
    },
  },
  "& .MuiFormHelperText-root": {
    color: `${theme.palette.error.main}`,
  },
  "& .Mui-error": {
    color: `${theme.palette.error.main}`,
  },
};

export const inputPropsStyle = {
  borderRadius: 4,
  color: theme.palette.secondary.main,
  fontSize: 16,
  borderStyle: "solid",
  borderColor: theme.customColors.dark.outlined,
};
