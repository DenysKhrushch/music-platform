import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { PasswordRequirements } from "./password-section.types";
import { FC } from "react";
import { setIconStyles } from "./password-section.styles";
import theme from "../theme";

/* eslint-disable-next-line */
export interface PasswordSectionProps {
  passwordReqs: PasswordRequirements;
}

export const PasswordSection: FC<PasswordSectionProps> = ({ passwordReqs }) => {
  const isScreenBelow1280px = useMediaQuery("(max-width: 1280px)");
  return (
    <Box>
      <Typography variant="h6" sx={{ color: "white", marginBottom: "8px" }}>
        Password requirements:
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Box sx={{ display: "flex" }}>
            <CheckCircleIcon sx={setIconStyles(passwordReqs.length)} />
            <Typography
              variant={isScreenBelow1280px ? "body1" : "body2"}
              sx={{ color: theme.palette.secondary.main }}
            >
              At least 8 characters
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex" }}>
            <CheckCircleIcon sx={setIconStyles(passwordReqs.uppercase)} />
            <Typography
              variant={isScreenBelow1280px ? "body1" : "body2"}
              sx={{ color: theme.palette.secondary.main }}
            >
              One uppercase letter (A-Z)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex" }}>
            <CheckCircleIcon sx={setIconStyles(passwordReqs.lowercase)} />
            <Typography
              variant={isScreenBelow1280px ? "body1" : "body2"}
              sx={{ color: theme.palette.secondary.main }}
            >
              One lowercase letter (a-z)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex" }}>
            <CheckCircleIcon sx={setIconStyles(passwordReqs.number)} />
            <Typography
              variant={isScreenBelow1280px ? "body1" : "body2"}
              sx={{ color: theme.palette.secondary.main }}
            >
              One number (0-9)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex" }}>
            <CheckCircleIcon sx={setIconStyles(passwordReqs.specChar)} />
            <Typography
              variant={isScreenBelow1280px ? "body1" : "body2"}
              sx={{ color: theme.palette.secondary.main }}
            >
              One special character ($%&)
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PasswordSection;
