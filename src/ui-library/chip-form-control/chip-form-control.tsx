import React, { FC } from "react";

import { Box, FormControl, Typography } from "@mui/material";

import Chip from "../chip/chip";

import { ChipFormControlProps } from "./chip-form-control.types";
import { Input } from "../input";

export const ChipFormControl: FC<ChipFormControlProps> = ({
  options,
  extraFieldProps,
  extraFieldTrigger,
  value,
  onChange,
}) => {
  return (
    <Box>
      <FormControl fullWidth sx={{ marginBottom: "16px" }}>
        <Typography variant="h4" sx={{ marginBottom: "16px" }}>
          Primary genres represented in your catalog({value.length}/3):
        </Typography>
        <Box>
          {options.map((option) => (
            <Chip
              key={option.value}
              selectedChips={value}
              handleChipToggle={onChange}
              option={option}
              value={option.value}
            />
          ))}
        </Box>
      </FormControl>
      {value.includes(String(extraFieldTrigger)) ? <Input {...extraFieldProps} /> : null}
    </Box>
  );
};

export default ChipFormControl;
