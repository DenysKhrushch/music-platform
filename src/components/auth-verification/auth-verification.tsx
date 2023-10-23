import React, { FC, useContext, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { AppContext } from "../../context";
import {
  setColor,
  StyledButtonVerification,
  StyledTypographyVerification,
  wrapper,
} from "./auth-verification.styles";
import { useAuth } from "@/hooks/useAuth";
import theme from "@/ui-library/theme";

export const AuthVerification: FC = () => {
  const { context } = useContext(AppContext);

  const username = context.user?.getUsername();

  const { resendConfirmationLink } = useAuth();

  const [isResent, setIsResent] = useState(true);

  // Optional functionality to hide the resend button after 30 seconds
  useEffect(() => {
    const delay = 30000;

    const timeoutId = setTimeout(() => {
      setIsResent(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isResent]);

  const toggleSendNewEmail = () => {
    resendConfirmationLink(() => setIsResent(true));
  };
  return (
    <Box sx={wrapper}>
      <Box sx={{ maxWidth: "448px" }}>
        <Typography variant="h1" sx={{ color: theme.palette.primary.light }}>
          Verify your account
        </Typography>
        <Typography variant="body1" sx={StyledTypographyVerification}>
          We sent a verification link to:
          {context.user
            ? username.replace(/(?<=.{5}).(?=[^@]*@)/g, "*")
            : "example*****@gmail.com"}
        </Typography>
        <Typography variant="body1" sx={StyledTypographyVerification}>
          To verify your account, just click the link in the email.
          <br /> The link will be valid for 24 hours.
        </Typography>
        <Typography variant="body1" sx={StyledTypographyVerification}>
          If you didn&apos;t receive an email from us, please check your spam or
          junk folder or request a new email.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            fullWidth
            disabled={isResent}
            variant="outlined"
            sx={StyledButtonVerification}
            onClick={toggleSendNewEmail}
            startIcon={<MailOutlineIcon sx={{ ...setColor(isResent) }} />}
          >
            <Typography variant="h6" sx={{ ...setColor(isResent) }}>
              Send new email
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthVerification;
