import { TextFieldProps } from "@mui/material";

export type InputProps = TextFieldProps & {
  startIcon?: JSX.Element | null;
  maxLength?: number;
  mask?: string;
  tooltip?: string;
  endIcon?: JSX.Element | null;
  readOnly?: boolean;
};
