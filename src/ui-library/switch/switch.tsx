import { Box, Switch as MUISwitch, Typography } from "@mui/material";
import React, { FC } from "react";
import { SwitchProps } from "./switch.types";
import { switchSx } from "./switch.styles";

const Switch: FC<SwitchProps> = (props) => {
  const { icon, label, subLabel, checked, onChange, ...rest } = props;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <MUISwitch
        checked={checked}
        onChange={onChange}
        sx={switchSx}
        {...rest}
      />
      <Box sx={{ display: "flex", marginLeft: "8px" }}>
        <Box sx={{ marginRight: "8px" }}>{icon}</Box>
        {label ? (
          <Box>
            <Typography variant="body1" sx={checked ? {} : { opacity: 0.6 }}>
              {label}
            </Typography>
            {subLabel ? (
              <Typography variant="body1" sx={{ opacity: 0.5 }}>
                {subLabel}
              </Typography>
            ) : null}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Switch;
