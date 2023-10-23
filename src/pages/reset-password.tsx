import React, { FC, useState } from "react";

import { Box, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";

import { PasswordResetSuccess } from "@/components/password-reset-success";
import ResetPasswordRightPanel from "@/ui-library/reset-password-right-panel/reset-password-right-panel";
import { useAuth } from "@/hooks/useAuth";
import {
  pageContainer,
  resetPasswordCurrentStep,
  resetPasswordFormWrapper,
  resetPasswordPage,
  resetPasswordWrapper,
} from "@/styles/styles";
import { PasswordResetFirstStep } from "@/components/password-reset-first-step/password-reset-first-step";
import { PasswordResetSecondStep } from "@/components/password-reset-second-step/password-reset-second-step";
import Header from "@/ui-library/header/header";

enum ResetPasswordStep {
  PasswordResetFirstStep,
  PasswordResetSecondStep,
  PasswordResetSuccess,
}
const ResetPasswordPage: FC = () => {
  const [step, setStep] = useState(ResetPasswordStep.PasswordResetFirstStep);
  const [email, setEmail] = useState("");
  const { forgotPasswordGetSecretCode, forgotPasswordChange } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (email: string) => {
    setIsLoading(true);
    await forgotPasswordGetSecretCode(email)
      .then((response) => {
        setStep(ResetPasswordStep.PasswordResetSecondStep);
        setEmail(email);
        setIsLoading(false);
      })
      .catch((error) => {
        const variant = "error";
        enqueueSnackbar(`${error}`, { variant });
      });
    setIsLoading(false);
  };

  const handleCodeSubmit = async (secretCode: string, password: string) => {
    setIsLoading(true);

    await forgotPasswordChange(email, secretCode, password)
      .then((response) => setStep(ResetPasswordStep.PasswordResetSuccess))
      .catch((error) => {
        const variant = "error";
        enqueueSnackbar(`${error}`, { variant });
      });

    setIsLoading(false);
  };

  const currentStep = (step: any) => {
    let res = "";
    if (step === 0) {
      res = "Step 1/2";
    } else if (step === 1) {
      res = "Step 2/2";
    } else {
      res = "";
    }
    return res;
  };

  return (
    <>
      <Box sx={pageContainer}>
        <Header />
        <Box id="reset-password-page" sx={resetPasswordPage}>
          <Box className="app" sx={resetPasswordWrapper}>
            <Box sx={resetPasswordFormWrapper}>
              <div>
                <Typography variant="h6" sx={resetPasswordCurrentStep}>
                  {currentStep(step)}
                </Typography>
                {step === ResetPasswordStep.PasswordResetFirstStep && (
                  <PasswordResetFirstStep onSubmit={handleEmailSubmit} />
                )}
                {step === ResetPasswordStep.PasswordResetSecondStep && (
                  <PasswordResetSecondStep
                    onSubmit={handleCodeSubmit}
                    email={email}
                    handleSendNewSecretCode={() => handleEmailSubmit(email)}
                  />
                )}
                {step === ResetPasswordStep.PasswordResetSuccess && (
                  <PasswordResetSuccess />
                )}
              </div>
            </Box>
            <ResetPasswordRightPanel />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ResetPasswordPage;
