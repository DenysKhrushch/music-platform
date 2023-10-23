import { SxProps } from "@mui/material";
import theme from "../theme";
export const switchSx: SxProps = {
  width: 52,
  height: 32,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: theme.customColors.neutral.neutral20,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },

    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 24,
    height: 24,
    transform: "translateX(-10px) translateY(-50%)",
    backgroundColor: theme.customColors.dark.outlined,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.customColors.dark.surfaceDarkContainer,
    border: "2px solid #8B9198",
    opacity: 1,
    transition: "background-color 500ms",
  },
};
