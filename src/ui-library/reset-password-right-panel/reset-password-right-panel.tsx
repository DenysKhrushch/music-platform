import React, { FC } from "react";
import { useTheme, Box, Typography } from "@mui/material";
import { MisicNoteIcon } from "@/ui-icons";
import { Badges } from "../badges";
import {
  background,
  artistContainer,
  artistContainerBackgroundBlur,
} from "./reset-password-right-panel.styles";

export const ResetPasswordRightPanel: FC = () => {
  const theme = useTheme();
  const badges = ["Jazz", "Funk", "Soul"];

  return (
    <Box
      id="reset-password-right-panel"
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={background}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={artistContainerBackgroundBlur}></Box>
          <Box sx={artistContainer}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.light,
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MisicNoteIcon style={{ marginRight: "7px" }} />
              New Independed Artist
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: theme.palette.primary.light, marginBottom: "8px" }}
            >
              Jamie James
            </Typography>
            <Badges badges={badges} />
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.light,
                marginTop: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Meet Jamie James - a dynamic and innovative music collective that
              effortlessly blends genres and pushes the boundaries of sonic
              exploration. Led by their enigmatic frontman, they have crafted a
              distinct sound that defies categorization, drawing influences from
              jazz, funk...
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordRightPanel;
