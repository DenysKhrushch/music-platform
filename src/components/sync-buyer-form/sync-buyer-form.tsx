import { Formik } from "formik";

import React, { FC, useState } from "react";
import { initialValues, validate } from "./sync-buyer-form.utils";
import { useRouter } from "next/router";
import AdditionalQuestionsForm from "../additional-questions-form/additional-questions-form";
import OnboardingFormStep from "../onboarding-form-step/onboarding-form-step";
import PersonalInfoBuyerForm from "../personal-info-buyer-form/personal-info-buyer-form";

export const SyncBuyerForm: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const router = useRouter();
  const buyerSteps = [
    {
      step: 1,
      maxSteps: 2,
      progressValue: 50,
      title: "Personal & Business information",
      subtitle:
        "Personalize your experience. Help us tailor your account by selecting the experience that best fits you.",
      component: <PersonalInfoBuyerForm />,
      onPreviousStep: () => {
        router.push({ pathname: "/welcome" }, "/welcome");
      },
      onNextStep: () => {
        setActiveStep((prev) => prev + 1);
      },
      onSkip: () => setActiveStep((prev) => prev + 1),
      nextStepButtonText: "Continue",
      validationBlock: "personalInfo",
    },
    {
      step: 2,
      maxSteps: 2,
      progressValue: 100,
      title: "Additional questions",
      subtitle:
        "Tell us how did you hear about us and subscribe to our newsletter with the latest updates.",
      component: <AdditionalQuestionsForm />,
      onPreviousStep: () => {
        setActiveStep((prev) => prev - 1);
      },
      onNextStep: () => {
        router.push(
          {
            pathname: "/onboarding-completed",
            query: { role: "sync-buyer" },
          },
          "/onboarding-completed"
        );
      },
      onSkip: () => {
        router.push(
          {
            pathname: "/onboarding-completed",
            query: { role: "sync-buyer" },
          },
          "/onboarding-completed"
        );
      },
      nextStepButtonText: "Complete",
      validationBlock: "additionalQuestions",
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={validate}
    >
      <>
        {buyerSteps.map((step, index) => {
          if (index === activeStep) {
            return <OnboardingFormStep key={index} stepProps={step} />;
          }
          return null;
        })}
      </>
    </Formik>
  );
};

export default SyncBuyerForm;
