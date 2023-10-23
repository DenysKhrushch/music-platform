import React from "react";
import { BackToIcon } from "@/ui-icons";
import { Button } from "@/ui-library/button";
import theme from "@/ui-library/theme";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

/* eslint-disable-next-line */
export interface SignUpFormProps {}

export function PasswordResetSuccess(props: SignUpFormProps) {
  const router = useRouter();

  const handleRedirectToLogin = () => {
    router.push("/sign-in");
  };

  return (
    <>
      <Box
        style={{
          maxWidth: "448px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: theme.palette.primary.light, marginBottom: "8px" }}
        >
          Password has been changed
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.customColors.neutral.neutral80,
            marginBottom: "32px",
          }}
        >
          Access to your account has been successfully restored.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            onClick={handleRedirectToLogin}
            startIcon={<BackToIcon />}
          >
            <Typography
              variant="h6"
              sx={{ color: theme.customColors.neutral.neutral20 }}
            >
              Back to login
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PasswordResetSuccess;
