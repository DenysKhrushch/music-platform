import React, { FC } from "react";
import { useRouter } from "next/router";
import { Box, Button, Typography } from "@mui/material";
import {
  StyledButtonVerification,
  StyledTypographyVerification,
  wrapper,
} from "@/components/auth-verification/auth-verification.styles";
import theme from "@/ui-library/theme";
import { PlayIcon } from "@/ui-icons";
import { useAuth } from "@/hooks/useAuth";
import { enqueueSnackbar } from "notistack";

export const VerifiedPage: FC = () => {
  const router = useRouter();

  const { confirmSignUp } = useAuth();

  const query = router.query;
  const username = query.username as string;
  const code = query.confirmation_code as string;

  const handleConfirmSignUp = () => {
    if (username && code) {
      confirmSignUp(username, code).catch((error) => {
        const variant = "error";
        enqueueSnackbar(`${error}`, { variant });
      });
    }
  };
  return (
    <Box sx={wrapper}>
      <Box sx={{ maxWidth: "448px" }}>
        <Typography variant="h1" sx={{ color: theme.palette.primary.light }}>
          Account has been successfully verified
        </Typography>
        <Typography variant="body1" sx={StyledTypographyVerification}>
          We are delighted to inform you that your email address has been
          successfully verified. Let’s start your journey with Songistry!
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            fullWidth
            variant="contained"
            sx={StyledButtonVerification}
            onClick={() => {
              handleConfirmSignUp();
              router.push({
                pathname: "/sign-in",
              });
            }}
            startIcon={
              <PlayIcon color={theme.customColors.neutral.neutral20} />
            }
          >
            <Typography
              variant="h6"
              sx={{ color: theme.customColors.neutral.neutral20 }}
            >
              Start
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VerifiedPage;
