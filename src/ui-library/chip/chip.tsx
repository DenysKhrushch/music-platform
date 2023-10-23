import React, { FC } from "react";

import { Chip as MUIChip, Typography } from "@mui/material";

import { ChipProps } from "./chip.types";
import { chipLabelSx, selectedChipSx, unselectedChipSx } from "./chip.styles";

export const Chip: FC<ChipProps> = (props) => {
  const { option, handleChipToggle, value, selectedChips, ...rest } = props;

  const chipSx = selectedChips.includes(option.value)
    ? { ...selectedChipSx }
    : { ...unselectedChipSx };

  return (
    <MUIChip
      label={
        <Typography
          variant="h6"
          sx={chipLabelSx(selectedChips.includes(option.value))}
        >
          {option.label}
        </Typography>
      }
      sx={chipSx}
      clickable={!!handleChipToggle}
      disabled={
        selectedChips.length >= 3 && !selectedChips.includes(option.value)
      }
      color={selectedChips.includes(option.value) ? "primary" : "secondary"}
      onClick={() => handleChipToggle && handleChipToggle(option.value)}
      {...rest}
    />
  );
};

export default Chip;
