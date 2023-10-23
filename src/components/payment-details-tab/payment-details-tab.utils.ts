import {
  SignInFormErrors,
  SignInFormValues,
} from "./payment-details-tab.types";
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

export const subscriptionPlanData = [
  {
    title: "Premium Individual",
    description:
      "Ad-free music listening, offline listening,  and unlimited skips.",
    paymentInfo: { money: "$4.99", date: "6/14/23" },
    actionButtonText: "Change plan",
  },
  {
    title: "Super Premium Catalogue",
    description:
      "Ad-free music listening, offline listening,  and unlimited skips.",
    paymentInfo: { money: "$4.99", date: "6/14/23" },
    actionButtonText: "View details",
  },
  {
    title: "Individual Catalogue",
    description:
      "Ad-free music listening, offline listening,  and unlimited skips.",
    paymentInfo: { money: "$4.99", date: "6/14/23" },
  },
];
