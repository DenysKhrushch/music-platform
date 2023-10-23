import Box from "@mui/material/Box";
import { Slider as MUISlider, Typography } from "@mui/material";
import { darkSliderSx, lightSliderSx } from "./slider.styles";
import React, { FC } from "react";
import { SliderProps } from "./slider.types";

function valuetext(value: number) {
  return `${value}°C`;
}

export const Slider: FC<SliderProps> = (props) => {
  const {
    label,
    value,
    handleChange,
    track = "normal",
    marks,
    hideMarks,
    step,
    min = 10,
    max = 100,
    variant = "dark",
  } = props;

  return (
    <Box>
      {label ? (
        <Typography sx={{ marginBottom: "42px" }} variant="h4">
          {label}
        </Typography>
      ) : null}
      <MUISlider
        aria-label="Temperature"
        defaultValue={10}
        getAriaValueText={valuetext}
        valueLabelDisplay={hideMarks ? "off" : "auto"}
        step={step}
        value={value}
        onChange={handleChange as any}
        marks={marks}
        track={track}
        min={min}
        max={max}
        sx={variant === "dark" ? darkSliderSx : lightSliderSx}
      />
    </Box>
  );
};
export default Slider;
