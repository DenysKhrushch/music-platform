import { SelectChangeEvent, TextFieldProps } from "@mui/material";
import { CountryType } from "../country-autocomplete";

export type PhoneInputProps = TextFieldProps & {
  options: readonly CountryType[];
  countryCodeChange: (event: SelectChangeEvent) => void;
  countryCode: string;
  selectDisabled?: boolean;
  readOnly?: boolean;
};
