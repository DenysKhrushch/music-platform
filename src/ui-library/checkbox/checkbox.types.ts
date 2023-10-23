import { CheckboxProps as MUICheckboxProps } from "@mui/material";

export type CheckboxProps = MUICheckboxProps & {
  label: string;
  variant: "outlined" | "text";
};
