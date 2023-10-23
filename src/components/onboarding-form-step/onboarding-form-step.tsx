import { Box, LinearProgress, Tooltip, Typography } from "@mui/material";

import React, { FC } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  actionsPanelSx,
  leftPanelSx,
  progressSx,
  rightPanelSx,
  scrollableContainerSx,
  setDisabledStyles,
} from "./onboarding-form-step.styles";
import { OnboardingFormStepProps } from "./onboarding-form-step.types";
import { useFormikContext } from "formik";
import { SyncBuyerFormValues } from "../sync-buyer-form/sync-buyer-form.types";
import theme from "@/ui-library/theme";
import { Button } from "@/ui-library/button";

export const OnboardingFormStep: FC<OnboardingFormStepProps> = ({
  stepProps,
}) => {
  const {
    component,
    step,
    maxSteps,
    progressValue,
    title,
    subtitle,
    onNextStep,
    onPreviousStep,
    onSkip,
    nextStepButtonText,
    validationBlock,
  } = stepProps;

  const formik = useFormikContext<SyncBuyerFormValues>();

  return (
    <>
      <Box sx={leftPanelSx}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "24px",
            color: theme.customColors.neutral.neutral80,
          }}
        >
          Step {step}/{maxSteps}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progressValue}
          sx={progressSx}
        />
        <Typography variant="h1" sx={{ marginBottom: "16px" }}>
          {title}
        </Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </Box>

      <Box sx={rightPanelSx}>
        <Box sx={scrollableContainerSx}>{component}</Box>
        <Box sx={actionsPanelSx}>
          <Button
            variant="text"
            onClick={onPreviousStep}
            startIcon={
              <ArrowBackIcon sx={{ color: theme.palette.primary.main }} />
            }
          >
            Previous step
          </Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ marginRight: "16px" }}>
              <Button variant="outlined" onClick={onSkip} fullWidth>
                <Typography variant="h6">Skip</Typography>
              </Button>
            </Box>
            <Tooltip
              title={
                formik.errors[validationBlock as keyof SyncBuyerFormValues]
                  ? "Fill in all required fields to continue"
                  : ""
              }
            >
              <span>
                <Button
                  variant="contained"
                  id="onboarding-next-button"
                  fullWidth
                  disabled={
                    !!formik.errors[
                      validationBlock as keyof SyncBuyerFormValues
                    ] || !formik.dirty
                  }
                  onClick={onNextStep}
                  startIcon={
                    <ArrowForwardIcon
                      sx={() =>
                        setDisabledStyles(
                          !!formik.errors[
                            validationBlock as keyof SyncBuyerFormValues
                          ] || !formik.dirty
                        )
                      }
                    />
                  }
                >
                  <Typography
                    variant="h6"
                    sx={() =>
                      setDisabledStyles(
                        !!formik.errors[
                          validationBlock as keyof SyncBuyerFormValues
                        ] || !formik.dirty
                      )
                    }
                  >
                    {nextStepButtonText}
                  </Typography>
                </Button>
              </span>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OnboardingFormStep;
