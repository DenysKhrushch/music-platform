import { SelectChangeEvent, SelectProps, TextFieldProps } from "@mui/material";

export interface DropdownOption {
  label: string;
  value: string;
}

export type DropdownTypes = SelectProps & {
  options: Array<DropdownOption>;
  label: string;
  value: string;
  valueLabel: string;
  extraFieldTrigger?: string;
  extraFieldProps?: TextFieldProps;
  handleChange: (event: SelectChangeEvent) => void;
};
