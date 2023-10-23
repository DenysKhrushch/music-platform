import {
  ResetPasswordFormErrors,
  ResetPasswordFormValues,
} from "./password-reset-second-step.types";

export const validate = (values: ResetPasswordFormValues) => {
  const errors: ResetPasswordFormErrors = {};

  if (!values.secretCode) {
    errors.secretCode = "Required field";
  }
  if (!values.password) {
    errors.password = "Required field";
  }
  if (
    values.password.length < 8 ||
    !/\d/.test(values.password) ||
    !/[a-z]/.test(values.password) ||
    !/[A-Z]/.test(values.password) ||
    !/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(values.password)
  ) {
    errors.password = "Please enter a correct password";
  }

  return errors;
};

export const initialValues: ResetPasswordFormValues = {
  secretCode: "",
  password: "",
};
