import {
  ProfileResetPasswordFormErrors,
  ProfileResetPasswordFormValues,
} from "./profile-password-reset-form.types";

export const initialValues: ProfileResetPasswordFormValues = {
  oldPassword: "",
  newPassword: "",
  repeatNewPassword: "",
};

export const validate = (values: ProfileResetPasswordFormValues) => {
  const errors: ProfileResetPasswordFormErrors = {};

  if (!values.oldPassword) {
    errors.oldPassword = "Required field";
  }

  if (!values.newPassword) {
    errors.newPassword = "Required field";
  }

  if (
    values.newPassword === values.oldPassword &&
    values.newPassword.length &&
    values.oldPassword.length
  ) {
    errors.oldPassword = "Passwords are the same";
    errors.newPassword = "Passwords are the same";
  }

  if (values.newPassword !== values.repeatNewPassword) {
    errors.repeatNewPassword = "Passwords do not match";
  }

  if (
    values.newPassword.length < 8 ||
    !/\d/.test(values.newPassword) ||
    !/[a-z]/.test(values.newPassword) ||
    !/[A-Z]/.test(values.newPassword) ||
    !/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(values.newPassword)
  ) {
    errors.newPassword = "Please enter a correct password";
  }

  return errors;
};
