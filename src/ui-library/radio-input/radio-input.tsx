import React from "react";
import { FormControl, FormLabel, RadioGroup, Typography } from "@mui/material";
import { FC } from "react";
import Radio from "../radio/radio";
import { RadioInputProps, RadioOption } from "./radio-input.types";
import { Input } from "../input";

/* eslint-disable-next-line */

export const RadioInput: FC<RadioInputProps> = (props) => {
  const {
    options,
    label,
    name,
    id,
    outlined,
    extraFieldTrigger,
    extraFieldProps,
    ...rest
  } = props;

  return (
    <FormControl fullWidth>
      {label ? (
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          sx={{ marginBottom: "8px" }}
        >
          <Typography variant="h4">{label}</Typography>
        </FormLabel>
      ) : null}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        id={id}
        name={name}
        sx={{ marginBottom: "8px" }}
        {...rest}
      >
        {options.map((option: RadioOption, index) => (
          <Radio
            subText={option.subText}
            outlined={outlined}
            key={index}
            label={option.label}
            value={option.value}
            isIndifferentSubText={option.isIndifferentSubText}
          />
        ))}
      </RadioGroup>
      {extraFieldTrigger === rest.value ? <Input {...extraFieldProps} /> : null}
    </FormControl>
  );
};
