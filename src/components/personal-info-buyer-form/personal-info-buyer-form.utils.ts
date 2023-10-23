export const validatePersonalInfo = (values: any) => {
  const errors: any = {};

  if (!values.fullname) {
    errors.fullname = "Required field";
  }

  if (!values.email) {
    errors.email = "Required field";
  }

  if (!values.businessType) {
    errors.businessType = "Required field";
  }

  if (!values.primaryRole) {
    errors.primaryRole = "Required field";
  }

  return errors;
};
