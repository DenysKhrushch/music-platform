import React, { FC, useState } from "react";
import OnboardingWelcomeBlock from "../onboarding-welcome-block/onboarding-welcome-block";
import SelectRoleForm from "../select-role-form/select-role-form";
import WelcomeForm from "../welcome-form/welcome-form";

export const WelcomeContent: FC = () => {
  const initialSteps = [
    { component: SelectRoleForm },
    { component: OnboardingWelcomeBlock },
  ];

  const [formFlow, setFormFlow] = useState([...initialSteps]);

  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <WelcomeForm
      activeStep={activeStep}
      formFlow={formFlow}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
    />
  );
};

export default WelcomeContent;
