import { Formik } from "formik";

import React, { FC, useState } from "react";

import { useRouter } from "next/router";
import OnboardingFormStep from "../onboarding-form-step/onboarding-form-step";
import { initialValues, validate } from "./catalog-owner-form.utils";

import { OwnerBusinessInfoForm } from "../owner-business-info-form";
import { OwnerContactInfoForm } from "../owner-contact-info-form";
import { OwnerCatalogInfoForm } from "../owner-catalog-info-form";
import { OwnerDistributionMetadataForm } from "../owner-distribution-metadata-form";
import OwnerLicensingForm from "../owner-licensing-form/owner-licensing-form";

export const CatalogOwnerForm: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const router = useRouter();
  const buyerSteps = [
    {
      step: 1,
      maxSteps: 5,
      progressValue: 20,
      title: "Business information",
      subtitle: "Please, share your business information with us.",
      component: <OwnerBusinessInfoForm />,
      onPreviousStep: () => {
        router.push({ pathname: "/welcome" }, "/welcome");
      },
      onNextStep: () => {
        setActiveStep((prev) => prev + 1);
      },
      onSkip: () => setActiveStep((prev) => prev + 1),
      nextStepButtonText: "Continue",
      validationBlock: "businessInfo",
    },
    {
      step: 2,
      maxSteps: 5,
      progressValue: 40,
      title: "Contact information",
      subtitle: "Please, share your contact information with us.",
      component: <OwnerContactInfoForm />,
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
      maxSteps: 5,
      progressValue: 60,
      title: "Catalog information",
      subtitle: "Please, share your catalog information with us.",
      component: <OwnerCatalogInfoForm />,
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
      step: 3,
      maxSteps: 5,
      progressValue: 60,
      title: "Licensing and Clearing",
      subtitle:
        "Please, share information about your Licensing and Clearing rights.",
      component: <OwnerLicensingForm />,
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
      maxSteps: 5,
      progressValue: 100,
      title: "Distribution and Metadata",
      subtitle:
        "Please, share information about your Distribution and Metadata.",
      component: <OwnerDistributionMetadataForm />,
      onPreviousStep: () => {
        setActiveStep((prev) => prev - 1);
      },
      onNextStep: () => {
        router.push(
          {
            pathname: "/onboarding-completed?role=catalog-owner",
            query: { role: "catalog-owner" },
          },
          "/onboarding-completed"
        );
      },
      onSkip: () => {
        router.push(
          {
            pathname: "/onboarding-completed?role=catalog-owner",
            query: { role: "catalog-owner" },
          },
          "/onboarding-completed"
        );
      },
      nextStepButtonText: "Complete",
      validationBlock: "distributionMetadata",
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

export default CatalogOwnerForm;
