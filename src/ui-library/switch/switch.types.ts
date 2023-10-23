import { SwitchProps as MUISwitchProps } from "@mui/material";
export type SwitchProps = MUISwitchProps & {
  icon?: JSX.Element;
  label?: string;
  subLabel?: string;
};
