import React from "react";
import { Box, Divider, Typography } from "@mui/material";

import theme from "../theme";
import {
  authContainerSx,
  AuthIconButton,
  dividerSx,
} from "./social-auth-menu.styles";
import { FacebookBlueIcon, GoogleIcon, MicrosoftAzureIcon } from "@/ui-icons";

export const SocialAuthMenu = () => {
  return (
    <Box
      id="social-auth-menu"
      sx={{ background: theme.palette.primary.dark, width: "448px" }}
    >
      <Divider sx={dividerSx}>
        <Typography variant="h6" sx={{ textTransform: "none" }}>
          Or continue with
        </Typography>
      </Divider>

      <Box sx={authContainerSx}>
        <AuthIconButton>
          <GoogleIcon />
          <Typography variant="h6" sx={{ textTransform: "none" }}>
            Google
          </Typography>
        </AuthIconButton>

        <AuthIconButton>
          <MicrosoftAzureIcon />
          <Typography variant="h6" sx={{ textTransform: "none" }}>
            Microsoft Azure
          </Typography>
        </AuthIconButton>

        <AuthIconButton>
          <FacebookBlueIcon />
          <Typography variant="h6" sx={{ textTransform: "none" }}>
            Facebook
          </Typography>
        </AuthIconButton>
      </Box>
    </Box>
  );
};

export default SocialAuthMenu;
