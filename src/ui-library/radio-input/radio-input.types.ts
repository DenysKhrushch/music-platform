import { RadioGroupProps, TextFieldProps } from "@mui/material";

export interface RadioOption {
  label: string;
  value: string | boolean;
  subText?: string;
  isIndifferentSubText?: boolean;
}

export type RadioInputProps = RadioGroupProps & {
  label?: string;
  options: RadioOption[];
  name: string;
  id: string;
  extraFieldTrigger?: string | boolean;
  extraFieldProps?: TextFieldProps;
  outlined?: boolean;
};
