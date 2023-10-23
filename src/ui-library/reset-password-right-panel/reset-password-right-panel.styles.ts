import { SxProps } from "@mui/material";

export const background: SxProps = {
  height: "100%",
  display: "flex",
  width: "100%",
  backgroundImage: "url('../images/reset-password-right-panel.jpg')",
  backgroundSize: "cover",
  animation: "appear 0.5s ease-out forwards",

  "@keyframes appear": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
};

export const artistContainer: SxProps = {
  display: "flex",
  paddingLeft: "100px",
  paddingTop: "24px",
  paddingBottom: "24px",
  position: "relative",
  paddingRight: "100px",
  zIndex: 1,
  justifyContent: "flex-end",
  opacity: 1,
  flexDirection: "column",
};

export const artistContainerBackgroundBlur: SxProps = {
  zIndex: 0,
  position: "absolute",
  top: "50%",
  right: 0,
  height: "50%",
  width: "50%",
  content: "\"\"",
  backdropFilter: "blur(30px)",
  mask: "linear-gradient(transparent, black 60%)",
};
