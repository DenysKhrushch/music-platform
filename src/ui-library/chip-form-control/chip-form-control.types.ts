import { TextFieldProps } from "@mui/material";

export interface ChipFormControlProps {
  options: Array<{ label: string; value: string }>;
  name: string;
  extraFieldTrigger?: string;
  extraFieldProps?: TextFieldProps;
  value: Array<string>;
  onChange: (chip: string) => void;
}
