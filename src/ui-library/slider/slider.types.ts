import { SliderProps as MUISliderProps } from "@mui/material";

export type SliderProps = MUISliderProps & {
  value: number;
  handleChange: (
    event: React.SyntheticEvent<HTMLElement>,
    newValue: number | number[]
  ) => void;
  marks?: { value: number }[];
  step?: number | null;
  getAriaValueText?: (value: number, index?: number) => string;
  label?: string;
  min?: number;
  max?: number;
  hideMarks?: boolean;
  variant?: "dark" | "light";
};
