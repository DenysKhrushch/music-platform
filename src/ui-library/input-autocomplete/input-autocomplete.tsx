import * as React from "react";
import Box from "@mui/material/Box";
import { Autocomplete as MUIAutocomplete, Paper } from "@mui/material";
import { Input } from "../input/input";
import { inputPropsStyle } from "../input/input.styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { InputAutocompleteProps } from "./input-autocomplete.types";
import { listbox, paper } from "./input-autocomplete.styles";
import { FC } from "react";
import theme from "../theme";

export const InputAutocomplete: FC<InputAutocompleteProps> = ({
  value,
  handleChange,
  handleBlur,
  options,
  id,
  disabled,
  name,
  label,
  error,
  helperText,
  defaultValue,
  readOnly
}) => {
  return (
    <MUIAutocomplete
      readOnly={readOnly}
      options={options}
      autoHighlight
      disableClearable
      disabled={disabled}
      onBlur={handleBlur}
      defaultValue={defaultValue}
      value={value as any}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      popupIcon={
        <ArrowDropDownIcon
          sx={
            disabled
              ? { color: theme.palette.secondary.main, opacity: 0 }
              : { color: theme.palette.secondary.main }
          }
        />
      }
      onChange={handleChange}
      ListboxProps={{
        sx: listbox,
      }}
      PaperComponent={({ children }) => <Paper style={paper}>{children}</Paper>}
      fullWidth
      getOptionLabel={(option) => option?.name}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option?.name}
        </Box>
      )}
      renderInput={(params) => (
        <Input
          {...params}
          label={label}
          size="small"
          id={id}
          name={name}
          value={value}
          fullWidth
          disabled={disabled}
          error={error}
          helperText={helperText}
          InputLabelProps={{
            style: {
              color: theme.palette.secondary.main,
            },
          }}
          InputProps={{
            readOnly: readOnly,
            style: inputPropsStyle,
            ...params.InputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

export default InputAutocomplete;
