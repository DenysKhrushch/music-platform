import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Dialog } from "@mui/material";
import { SpinnerIcon } from "@/ui-icons";
import {
  container,
  paper,
  spinnerIcon,
} from "@/ui-library/spinner-overlay/spinner-overlay.styles";

interface SpinnerOverlayProps {
  open: boolean;
}

export const SpinnerOverlay: FC<SpinnerOverlayProps> = ({ open }) => {
  return (
    <Dialog open={open} sx={paper}>
      <Box sx={container}>
        <SpinnerIcon style={spinnerIcon} />
        <CircularProgress size={100} />
      </Box>
    </Dialog>
  );
};

export default SpinnerOverlay;
