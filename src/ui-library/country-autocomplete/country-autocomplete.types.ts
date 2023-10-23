import { FormikErrors } from "formik";
import { FocusEventHandler } from "react";

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface CountryAutocompleteProps {
  value: CountryType;
  disabled?: boolean;
  handleChange?: (
    e: object,
    value: CountryType | null
  ) =>
    | Promise<
        FormikErrors<{
          country: CountryType;
          name: string;
          email: string;
          password: string;
        }>
      >
    | Promise<void>;
  id: string;
  name: string;
  handleBlur?: FocusEventHandler<HTMLDivElement> | undefined;
  error?: boolean;
  helperText?: string | false | undefined;
  defaultValue?: CountryType;
  readOnly?: boolean;
}
