import React, { FC } from "react";

import { DropdownTypes } from "./dropdown.types";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  errorSelectSx,
  getLabelSx,
  paperSx,
  selectSx,
} from "./dropdown.styles";
import { Input } from "../input";

export const Dropdown: FC<DropdownTypes> = (props) => {
  const {
    id,
    name,
    options,
    handleChange,
    label,
    value,
    size,
    error,
    extraFieldTrigger,
    extraFieldProps,
    disabled,
    ...rest
  } = props;

  return (
    <Box>
      <FormControl fullWidth size={size} disabled={disabled}>
        <InputLabel
          id="demo-simple-select-label"
          sx={getLabelSx(disabled, error)}
        >
          {label}
        </InputLabel>
        <Select
          id={id}
          name={name}
          value={value}
          size={size}
          label={label}
          onChange={handleChange as any}
          MenuProps={{
            PaperProps: {
              sx: paperSx,
            },
          }}
          sx={error ? errorSelectSx : selectSx}
          {...rest}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {extraFieldTrigger === value ? (
        <Box sx={{ marginTop: "24px" }}>
          <Input {...extraFieldProps} />
        </Box>
      ) : null}
    </Box>
  );
};

export default Dropdown;
