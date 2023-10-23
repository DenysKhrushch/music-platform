import { Box, FormControl, FormHelperText, FormLabel, Radio as MUIRadio } from "@mui/material";
import { CardRadioProps } from "./card-radio.types";
import { FC } from "react";
import { formControlOutlinedSx, formSx, radioSx, subTextSx } from "./card-radio.styles";
import React from "react";

export const CardRadio: FC<CardRadioProps> = ({ value, label, outlined, subText, icon, radioPosition = "left" }) => {
  const formControlSx = outlined ? formControlOutlinedSx : formSx;

  return (
    <FormControl
      sx={subText ? { ...formControlSx, alignItems: "flex-start" } : { ...formControlSx, alignItems: "center" }}
    >
      {radioPosition == "left" && <MUIRadio value={value} sx={radioSx} />}
      <Box component="span" sx={subText ? { paddingTop: "6px" } : null}>
        {icon && icon}
        <FormLabel>{label}</FormLabel>
        {subText ? (
          <FormHelperText sx={subTextSx}>
            {subText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
              </React.Fragment>
            ))}
          </FormHelperText>
        ) : null}
      </Box>
      {radioPosition == "right" && <MUIRadio value={value} sx={radioSx} />}
    </FormControl>
  );
};

export default CardRadio;
