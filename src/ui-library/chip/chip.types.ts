import { ChipProps as MUIChipProps } from "@mui/material";

export type ChipProps = MUIChipProps & {
  option: { label: string; value: string };
  value: string;
  selectedChips: string[];
  handleChipToggle?: (chip: string) => void;
};
