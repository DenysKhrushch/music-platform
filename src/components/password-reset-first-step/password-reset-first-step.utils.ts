import { PasswordResetFirstStepFormErrors, PasswordResetFirstStepFormValues } from "./password-reset-first-step.types";

export const validate = (values: PasswordResetFirstStepFormValues) => {
  const errors: PasswordResetFirstStepFormErrors = {};

  if (!values.email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a correct email address";
  }
  return errors;
};

export const initialValues: PasswordResetFirstStepFormValues = {
  email: "",
};
