import { Box, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { FC } from "react";
import { OnboardingWelcomeBlockProps } from "./onboarding-welcome-block.types";
import { useFormikContext } from "formik";
import { WelcomeFormValues } from "../welcome-form/welcome-form.types";
import { useRouter } from "next/router";
import theme from "@/ui-library/theme";
import { Button } from "@/ui-library/button";

export const OnboardingWelcomeBlock: FC<OnboardingWelcomeBlockProps> = ({
  onNextStep,
  onPrevStep,
}) => {
  const formik = useFormikContext<WelcomeFormValues>();
  const router = useRouter();

  const navigateToOnboarding = () => {
    router.push(`/onboarding?role=${formik.values.role}`);
  };

  return (
    <Box>
      <Typography variant="h2" sx={{ marginBottom: "16px" }}>
        Welcome to Songistry!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.customColors.neutral.neutral80,
          marginBottom: "32px",
        }}
      >
        Let’s get to know you a little better and personalize your experience.
      </Typography>
      <Box sx={{ marginBottom: "16px" }}>
        <Button
          variant="contained"
          fullWidth
          onClick={navigateToOnboarding}
          id="complete-now"
          startIcon={
            <ArrowForwardIcon
              sx={{ color: theme.customColors.neutral.neutral20 }}
            />
          }
        >
          <Typography
            variant="h6"
            sx={{ color: theme.customColors.neutral.neutral20 }}
          >
            Complete now
          </Typography>
        </Button>
      </Box>
      <Button
        variant="outlined"
        fullWidth
        onClick={() => router.push(`/profile?role=${formik.values.role}`)}
      >
        <Typography variant="h6">Later</Typography>
      </Button>
    </Box>
  );
};

export default OnboardingWelcomeBlock;
