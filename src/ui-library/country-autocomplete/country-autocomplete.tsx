import * as React from "react";
import Box from "@mui/material/Box";
import {
  InputAdornment,
  Autocomplete as MUIAutocomplete,
  Paper,
} from "@mui/material";
import { countries, flags } from "./country-autocomplete.constants";
import { Input } from "../input/input";
import { inputPropsStyle } from "../input/input.styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CountryAutocompleteProps } from "./country-autocomplete.types";
import { listbox, paper } from "./country-autocomplete.styles";
import { FC } from "react";
import theme from "../theme";

export const CountryAutocomplete: FC<CountryAutocompleteProps> = ({
  value,
  handleChange,
  handleBlur,
  id,
  disabled,
  name,
  error,
  helperText,
  defaultValue,
  readOnly,
}) => {
  const FlagIcon = value ? flags[value.code as keyof typeof flags] : null;
  return (
    <MUIAutocomplete
      options={countries}
      autoHighlight
      readOnly={readOnly}
      disableClearable
      disabled={disabled}
      onBlur={handleBlur}
      defaultValue={defaultValue}
      value={value}
      isOptionEqualToValue={(option, value) => option.code === value.code}
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
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <Input
          {...params}
          label={disabled ? "Country" : "Choose a country"}
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
            startAdornment: (
              <InputAdornment position="start">
                {value && FlagIcon ? (
                  <FlagIcon
                    width={20}
                    height={15}
                    style={
                      disabled
                        ? { marginLeft: "8px", opacity: 0.4 }
                        : { marginLeft: "8px" }
                    }
                  />
                ) : null}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default CountryAutocomplete;
