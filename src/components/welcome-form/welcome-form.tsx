import React, { FC } from "react";

import { Box } from "@mui/material";

export interface WelcomeFormProps {
  formFlow: Array<any>;
  activeStep: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export const WelcomeForm: FC<WelcomeFormProps> = ({
  formFlow,
  activeStep,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <Box sx={{ marginLeft: "142px", marginRight: "142px" }}>
      {formFlow.map((step, index) => {
        if (index === activeStep) {
          const StepComponent = step.component;
          return (
            <StepComponent
              key={index}
              onNextStep={handleNextStep}
              onPrevStep={handlePreviousStep}
            />
          );
        }
        return null;
      })}
    </Box>
  );
};

export default WelcomeForm;
