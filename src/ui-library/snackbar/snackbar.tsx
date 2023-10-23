import React, { FC, useState } from "react";
import {
  Box,
  IconButton,
  Snackbar as MuiSnackbar,
  Typography,
  Button,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import {
  container,
  crossIcon,
  message,
  snackbar,
  title,
  iconStyles,
} from "./snackbar.styles";

export interface SnackbarProps {
  show: boolean;
  variant?: string;
  size: "small" | "medium" | "large";
  withIcon: boolean;
  closable?: boolean;
  text: string;
  actionTitle?: string;
}

export const Snackbar: FC<SnackbarProps> = ({
  show,
  text = "Snackbar supporting text",
  closable = true,
  actionTitle,
  variant,
  size = "large",
  withIcon = true,
}) => {
  const [open, setOpen] = useState(show);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiSnackbar
      key={text}
      open={open}
      onClose={handleClose}
      message={
        <Box sx={container}>
          {withIcon && size !== "large" && (
            <InfoIcon sx={iconStyles(variant, 2)} />
          )}
          <Box sx={message(size, variant)}>{text}</Box>
        </Box>
      }
      action={
        <>
          {actionTitle && (
            <Button size="small">
              <Typography variant="h6" sx={title(variant)}>
                {actionTitle}
              </Typography>
            </Button>
          )}

          {closable && (
            <IconButton aria-label="close" sx={crossIcon} onClick={handleClose}>
              <CloseIcon sx={iconStyles(variant)} />
            </IconButton>
          )}
        </>
      }
      sx={snackbar(size, variant)}
    />
  );
};

export default Snackbar;
