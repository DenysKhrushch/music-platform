import {
  ProfileInfoFormErrors,
  ProfileInfoFormValues,
} from "@/components/profile-info-form/profile-info-form.types";

export const validate = (values: ProfileInfoFormValues) => {
  const errors: ProfileInfoFormErrors = {};

  if (!values.email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a correct email address";
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

  if (!/^\d{3}\s\d{7}$/.test(values.phone)) {
    errors.phone = "Please enter a correct phone number";
  }

  if (!/^\d{5}$/.test(values.zipCode)) {
    errors.zipCode = "Please enter a correct ZIP code";
  }

  return errors;
};
export const initialValues: ProfileInfoFormValues = {
  password: "",
  fullName: "",
  email: "",
  role: "",
  phone: "",
  country: {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  address: "",
  primaryRole: "",
  describePrimaryRole: "",
  city: null,
  state: null,
  zipCode: "",
};
