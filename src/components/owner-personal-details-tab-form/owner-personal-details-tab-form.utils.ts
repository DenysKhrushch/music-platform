import {
  OwnerPersonalDetailsFormErrors,
  OwnerPersonalDetailsFormValues,
} from "./owner-personal-details-tab-form.types";

export const validate = (values: OwnerPersonalDetailsFormValues) => {
  const errors: OwnerPersonalDetailsFormErrors = {};
  if (!values.email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a correct email address";
  }
  return errors;
};
export const initialValues: OwnerPersonalDetailsFormValues = {
  password: "",
  contactName: "",
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
};
