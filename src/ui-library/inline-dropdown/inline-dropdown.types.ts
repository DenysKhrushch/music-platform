import { SelectChangeEvent, SelectProps } from "@mui/material";
export interface DropdownOption {
  label: string;
  value: string;
}
export type InlineDropdownTypes = SelectProps & {
  options: Array<DropdownOption>;
  value: string;
  label: string;
  icon: JSX.Element;
  dangerOption?: DropdownOption;
  handleChange: (event: SelectChangeEvent) => void;
};
