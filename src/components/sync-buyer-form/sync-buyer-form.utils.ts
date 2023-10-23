import { SyncBuyerFormValues } from "./sync-buyer-form.types";

export const initialValues: SyncBuyerFormValues = {
  role: "sync-buyer",
  personalInfo: {
    fullName: "",
    email: "email@gmail.com",
    businessType: "",
    describeBusinessType: null,
    primaryRole: "",
    describePrimaryRole: null,
  },
  additionalQuestions: {
    howHearAboutUs: "search engines",
    newsletters: true,
    announcements: true,
    opportunities: true,
  },
};

export const validate = (values: SyncBuyerFormValues) => {
  const errors: any = {};

  if (!values.role) {
    errors.role = "Required field";
  }

  if (!values.personalInfo || !values.personalInfo.email) {
    errors.personalInfo = {
      ...errors.personalInfo || {},
      email: "Required field",
    };
  }

  if (!values.personalInfo || !values.personalInfo.fullName) {
    errors.personalInfo = {
      ...errors.personalInfo || {},
      fullName: "Required field",
    };
  }

  if (!values.personalInfo || !values.personalInfo.businessType) {
    errors.personalInfo = {
      ...errors.personalInfo || {},
      businessType: "Required field",
    };
  }
  if (
    !values.personalInfo ||
    values.personalInfo.businessType === "other" &&
      !values.personalInfo.describeBusinessType
  ) {
    errors.personalInfo = {
      ...errors.personalInfo || {},
      describeBusinessType: "Required field",
    };
  }
  if (
    !values.personalInfo ||
    values.personalInfo.primaryRole === "other" &&
      !values.personalInfo.describePrimaryRole
  ) {
    errors.personalInfo = {
      ...errors.personalInfo || {},
      describePrimaryRole: "Required field",
    };
  }

  if (!values.personalInfo || !values.personalInfo.primaryRole) {
    errors.personalInfo = {
      ...errors.personalInfo || {},
      primaryRole: "Required field",
    };
  }

  if (
    !values.additionalQuestions ||
    !values.additionalQuestions.howHearAboutUs
  ) {
    errors.additionalQuestions = {
      ...errors.additionalQuestions || {},
      howHearAboutUs: "Required field",
    };
  }

  return errors;
};
