import { Formik } from "formik";

import React, { FC, useState } from "react";

import { useRouter } from "next/router";
import OnboardingFormStep from "../onboarding-form-step/onboarding-form-step";
import {
  initialValues,
  validate,
} from "./individual-music-producer-form.utils";

import { ContactInfoMusicProducerForm } from "../contact-info-music-producer-form";

import { GoalsMusicProducerForm } from "../goals-music-producer-form";
import CatalogInfoMusicProducerForm from "../catalog-info-music-producer-form/catalog-info-music-producer-form";
import DistributionMetadataMusicProducerForm from "../distribution-metadata-music-producer-form/distribution-metadata-music-producer-form";
import LicensingMusicProducerForm from "../licensing-music-producer-form/licensing-music-producer-form";
import PersonalInfoMusicProducerForm from "../personal-info-music-producer-form/personal-info-music-producer-form";

export const IndividualMusicProducerForm: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const router = useRouter();
  const buyerSteps = [
    {
      step: 1,
      maxSteps: 6,
      progressValue: 16.66,
      title: "Personal information",
      subtitle: "Please, share your personal information with us.",
      component: <PersonalInfoMusicProducerForm />,
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
      maxSteps: 6,
      progressValue: 33.32,
      title: "Contact information",
      subtitle: "Please, share your contact information with us.",
      component: <ContactInfoMusicProducerForm />,
      onPreviousStep: () => {
        setActiveStep((prev) => prev - 1);
      },
      onNextStep: () => {
        setActiveStep((prev) => prev + 1);
      },
      onSkip: () => setActiveStep((prev) => prev + 1),
      nextStepButtonText: "Continue",
      validationBlock: "contactInfo",
    },
    {
      step: 3,
      maxSteps: 6,
      progressValue: 49.98,
      title: "Catalog information",
      subtitle: "Please, share your catalog information with us.",
      component: <CatalogInfoMusicProducerForm />,
      onPreviousStep: () => {
        setActiveStep((prev) => prev - 1);
      },
      onNextStep: () => {
        setActiveStep((prev) => prev + 1);
      },
      onSkip: () => setActiveStep((prev) => prev + 1),
      nextStepButtonText: "Continue",
      validationBlock: "catalogInfo",
    },
    {
      step: 4,
      maxSteps: 6,
      progressValue: 66.64,
      title: "Licensing and Clearing",
      subtitle:
        "Please, share information about your Licensing and Clearing rights.",
      component: <LicensingMusicProducerForm />,
      onPreviousStep: () => {
        setActiveStep((prev) => prev - 1);
      },
      onNextStep: () => {
        setActiveStep((prev) => prev + 1);
      },
      onSkip: () => setActiveStep((prev) => prev + 1),
      nextStepButtonText: "Continue",
      validationBlock: "licensingClearingRights",
    },
    {
      step: 5,
      maxSteps: 6,
      progressValue: 83.3,
      title: "Distribution and Metadata",
      subtitle:
        "Please, share information about your Distribution and Metadata.",
      component: <DistributionMetadataMusicProducerForm />,
      onPreviousStep: () => {
        setActiveStep((prev) => prev - 1);
      },
      onNextStep: () => {
        setActiveStep((prev) => prev + 1);
      },
      onSkip: () => setActiveStep((prev) => prev + 1),
      nextStepButtonText: "Continue",
      validationBlock: "distributionMetadata",
    },
    {
      step: 6,
      maxSteps: 6,
      progressValue: 100,
      title: "Your experience and goals",
      subtitle:
        "Please, share information about your previous experience and current goals.",
      component: <GoalsMusicProducerForm />,
      onPreviousStep: () => {
        setActiveStep((prev) => prev - 1);
      },
      onNextStep: () => {
        router.push(
          {
            pathname: "/onboarding-completed",
            query: { role: "individual-music-producer" },
          },
          "/onboarding-completed"
        );
      },
      onSkip: () => {
        router.push(
          {
            pathname: "/onboarding-completed",
            query: { role: "individual-music-producer" },
          },
          "/onboarding-completed"
        );
      },
      nextStepButtonText: "Complete",
      validationBlock: "expirienceGoals",
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

export default IndividualMusicProducerForm;
