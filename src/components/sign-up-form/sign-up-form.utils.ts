import { SignUpFormErrors, SignUpFormValues } from "./sign-up-form.types";

export const validate = (values: SignUpFormValues) => {
  const errors: SignUpFormErrors = {};

  if (!values.country) {
    errors.country = "Required field";
  }

  if (!values.email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a correct email address";
  }
  if (!values.name) {
    errors.name = "Required field";
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

export const initialValues: SignUpFormValues = {
  country: {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  name: "",
  email: "",
  password: "",
};
