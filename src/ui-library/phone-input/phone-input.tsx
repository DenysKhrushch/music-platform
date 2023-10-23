import {
  Box,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Input } from "../input";
import React, { FC, useRef } from "react";

import {
  paperSx,
  selectStyle,
  selectSx,
  setColor,
  textSx,
} from "./phone-input.styles";
import { inputPropsStyle } from "../input/input.styles";
import ErrorIcon from "@mui/icons-material/Error";
import { PhoneInputProps } from "./phone-input.types";
import { countries, flags } from "../country-autocomplete";
import { getCountryByCode } from "./phone-input.utils";
import { MaskedInput } from "../masked-input";
import theme from "../theme";

export const PhoneInput: FC<PhoneInputProps> = (props) => {
  const {
    error,
    options,
    countryCode,
    countryCodeChange,
    selectDisabled,
    readOnly,
    disabled,
    ...rest
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input
      label="Phone number"
      error={error}
      helperText={props.helperText}
      InputProps={{
        readOnly: readOnly,
        inputComponent: MaskedInput,
        inputProps: {
          ref: inputRef,
          mask: "000 0000000000",
        },
        startAdornment: (
          <InputAdornment position="start">
            <Select
              MenuProps={{
                PaperProps: {
                  sx: paperSx,
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              disabled={selectDisabled}
              style={selectStyle}
              sx={selectSx}
              value={countryCode}
              renderValue={(value) => {
                const FlagIcon = flags[value as keyof typeof flags];
                return (
                  <Box>
                    <FlagIcon width={20} height={15} />
                  </Box>
                );
              }}
              onChange={countryCodeChange}
            >
              {options.map((option, index) => {
                const FlagIcon = flags[option.code as keyof typeof flags];

                if (option.code && FlagIcon) {
                  return (
                    <MenuItem value={option.code} key={index}>
                      <FlagIcon width={20} height={15} />
                      <Typography
                        variant="body2"
                        sx={{
                          ...textSx,
                          fontSize: "12px",
                        }}
                      >
                        +{option.phone}
                      </Typography>
                    </MenuItem>
                  );
                } else return null;
              })}
            </Select>
            <Typography
              variant="body1"
              sx={{
                marginLeft: "4px",
                ...setColor(disabled),
              }}
            >
              +
              {countryCode
                ? getCountryByCode(countryCode, countries)?.phone
                : null}
            </Typography>
          </InputAdornment>
        ),
        endAdornment: error ? (
          <InputAdornment position="end">
            <ErrorIcon sx={{ color: theme.palette.error.main }} />
          </InputAdornment>
        ) : null,
        style: inputPropsStyle,
      }}
      disabled={disabled}
      {...rest}
    />
  );
};

export default PhoneInput;
