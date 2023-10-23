import React from "react";
import { FormGroup, Checkbox as MUICheckbox, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FC } from "react";
import { CheckboxProps } from "./checkbox.types";
import { checkboxSx, formLabelSx } from "./checkbox.styles";
import theme  from "../theme";

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { label, checked, value, variant, ...rest } = props;

  const containerSx =
    variant === "outlined"
      ? {
          ...formLabelSx,
          border: value
            ? `1px solid ${theme.palette.primary.main}`
            : `1px solid ${theme.palette.secondary.main}`,
        }
      : { ...formLabelSx };

  return (
    <FormGroup>
      <FormControlLabel
        sx={containerSx}
        control={
          <MUICheckbox defaultChecked sx={checkboxSx} {...rest} value={value} />
        }
        label={<Typography variant="body1">{label}</Typography>}
      />
    </FormGroup>
  );
};

export default Checkbox;
