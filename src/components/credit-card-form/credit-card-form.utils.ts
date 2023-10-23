import {
  CreditCardFormErrors,
  CreditCardFormValues,
} from "./credit-card-form.types";

export const validate = (values: CreditCardFormValues) => {
  const errors: CreditCardFormErrors = {};

  if (!values.cardNumber) {
    errors.cardNumber = "Required field";
  }
  if (!values.securityCode) {
    errors.securityCode = "Required field";
  }
  if (!values.expiryDate) {
    errors.expiryDate = "Required field";
  }

  return errors;
};

export const initialValues: CreditCardFormValues = {
  cardNumber: "",
  securityCode: "",
  expiryDate: "",
  saveCard: false,
};
