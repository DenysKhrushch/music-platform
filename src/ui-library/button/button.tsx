import React from "react";
import { ButtonProps as MUIButtonProps } from "@mui/material";
import { Button as MUIButton } from "@mui/material";
import { button } from "./button.styles";
import { FC } from "react";

export const Button: FC<MUIButtonProps> = (props) => {
  return (
    <MUIButton sx={button} {...props}>
      {props?.children}
    </MUIButton>
  );
};

export default Button;
