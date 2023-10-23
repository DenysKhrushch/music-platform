import { FormikErrors } from "formik";
import { IState, ICity } from "country-state-city";

export interface InputAutocompleteProps {
  value: IState | ICity | null;
  disabled?: boolean;
  options: IState[] | ICity[];
  handleChange: (
    e: object,
    value: IState | ICity | null
  ) =>
    | Promise<
        FormikErrors<{
          country: IState | ICity;
          name: string;
          email: string;
          password: string;
        }>
      >
    | Promise<void>;
  id: string;
  name: string;
  handleBlur: React.FocusEventHandler<HTMLDivElement> | undefined;
  error: boolean;
  helperText: string | false | undefined;
  defaultValue?: IState | ICity;
  label: string;
  readOnly?: boolean;
}
