import { Box, Typography } from "@mui/material";
import { ConnectServiceProps } from "./connect-service.types";
import React, { FC } from "react";
import { Button } from "../button";
import { containerSx } from "./connect-service.styles";

/* eslint-disable-next-line */

export const ConnectService: FC<ConnectServiceProps> = ({
  serviceName,
  serviceIcon,
  isConnected,
  handleConnect,
}) => {
  return (
    <Box sx={containerSx}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {serviceIcon}
        <Typography variant="body1" sx={{ marginLeft: "17.2px" }}>
          {serviceName}
        </Typography>
      </Box>
      <Button variant={isConnected ? "contained" : "outlined"}>
        {isConnected ? "Connected" : "Connect"}
      </Button>
    </Box>
  );
};

export default ConnectService;
