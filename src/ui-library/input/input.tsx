import { InputAdornment, TextField, Tooltip } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { input, inputPropsStyle } from "./input.styles";
import React,{ FC } from "react";
import theme from "../theme";
import { InputProps } from "./input.types";

import { MaskedInput } from "../masked-input";

export const Input: FC<InputProps> = (props) => {
  const { startIcon, maxLength, mask, endIcon, tooltip, readOnly, ...rest } = props;

  return (
    <TextField
      fullWidth
      autoComplete="new-password"
      size="small"
      InputProps={{
        readOnly: readOnly,
        endAdornment: rest.error ? (
          <InputAdornment position="end">
            <ErrorIcon sx={{ color: theme.palette.error.main }} />
          </InputAdornment>
        ) : endIcon ? (
          <Tooltip title={tooltip}>
            <InputAdornment position="end">{endIcon}</InputAdornment>
          </Tooltip>
        ) : null,
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : null,
        inputComponent: mask ? MaskedInput : undefined,
        style: inputPropsStyle,
        inputProps: {
          ref: rest.ref,
          mask: mask,
          maxLength: maxLength,
        },
      }}
      InputLabelProps={{
        style: {
          color: theme.palette.secondary.main,
        },
      }}
      sx={input}
      {...rest}
    />
  );
};
