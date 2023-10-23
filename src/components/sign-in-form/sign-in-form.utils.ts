import { SignInFormErrors, SignInFormValues } from "./sign-in-form.types";

export const validate = (values: SignInFormValues) => {
  const errors: SignInFormErrors = {};

  if (!values.email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a correct email address";
  }
  if (!values.password) {
    errors.password = "Required field";
  }

  return errors;
};

export const initialValues: SignInFormValues = {
  email: "",
  password: "",
};
