import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Radio as MUIRadio,
} from "@mui/material";
import { RadioProps } from "./radio.types";
import { FC } from "react";
import {
  formControlOutlinedSx,
  formSx,
  radioSx,
  subTextSx,
} from "./radio.styles";
import React from "react";
import theme from "../theme";

export const Radio: FC<RadioProps> = ({
  value,
  label,
  outlined,
  subText,
  isIndifferentSubText,
}) => {
  const formControlSx = outlined ? formControlOutlinedSx : formSx;

  return (
    <FormControl
      sx={
        subText
          ? { ...formControlSx, alignItems: "flex-start" }
          : { ...formControlSx, alignItems: "center" }
      }
    >
      <MUIRadio value={value} sx={radioSx} />
      <Box component="span" sx={subText ? { paddingTop: "6px" } : null}>
        <FormLabel>{label}</FormLabel>
        {subText ? (
          <FormHelperText
            sx={
              isIndifferentSubText
                ? { ...subTextSx, color: theme.customColors.dark.surface }
                : { ...subTextSx }
            }
          >
            {subText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </FormHelperText>
        ) : null}
      </Box>
    </FormControl>
  );
};

export default Radio;
