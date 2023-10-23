import { Box, Dialog, Typography } from "@mui/material";
import React, { FC, useContext } from "react";

import {
  buttonsContainer,
  dialog,
} from "./decline-password-reset-dialog.styles";
import { ProfileContext } from "@/context";
import theme from "@/ui-library/theme";
import { Button } from "@/ui-library/button";

export const DeclinePasswordResetDialog: FC = () => {
  const {
    setIsPasswordChanging,
    isDeclineDialogShowed,
    setIsDeclineConfirmed,
    setIsDeclineDialogShowed,
    afterConfirmAction,
    setIsPlanChanging,
    isPlanChanging,
  } = useContext(ProfileContext);

  const handleClose = () => {
    setIsDeclineDialogShowed(false);
  };

  const handleConfirm = () => {
    setIsDeclineDialogShowed(false);
    setIsPasswordChanging(false);
    setIsDeclineConfirmed(false);
    if (!isPlanChanging) {
      afterConfirmAction();
    } else {
      setIsPlanChanging(false);
    }
  };

  return (
    <Dialog
      open={isDeclineDialogShowed}
      onClose={handleClose}
      aria-labelledby="edit-avatar-dialog-title"
      aria-describedby="edit-avatar-dialog-description"
      PaperProps={{ sx: dialog }}
    >
      <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
        Are You Sure?
      </Typography>
      <Typography>
        {isPlanChanging
          ? `Are you sure you want to leave the plan change process? Your
          plan has not been updated yet. If you have any concerns or need
          assistance with changing your plan, please reach out to our support
          team for help.`
          : `Are you sure you want to leave the password change process? Your
          password has not been updated yet. If you have any concerns or need
          assistance with changing your password, please reach out to our support
          team for help.`}
      </Typography>
      <Box sx={buttonsContainer}>
        <Button variant="outlined" onClick={handleClose} color="primary">
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            Cancel
          </Typography>
        </Button>
        <Button variant="contained" fullWidth onClick={handleConfirm}>
          <Typography
            variant="h6"
            sx={{ color: theme.customColors.neutral.neutral20 }}
          >
            Leave
          </Typography>
        </Button>
      </Box>
    </Dialog>
  );
};

export default DeclinePasswordResetDialog;
