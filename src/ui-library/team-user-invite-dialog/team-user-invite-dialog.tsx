import { Box, Dialog, Typography } from "@mui/material";
import React, { FC } from "react";

import { buttonsContainer, dialog } from "./team-user-invite-dialog.styles";

import theme from "@/ui-library/theme";
import { Button } from "@/ui-library/button";
import { TeamUserInviteDialogProps } from "./team-user-invite-dialog.types";

export const TeamUserInviteDialog: FC<TeamUserInviteDialogProps> = ({
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-avatar-dialog-title"
      aria-describedby="edit-avatar-dialog-description"
      PaperProps={{ sx: dialog }}
    >
      <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
        User not found
      </Typography>
      <Typography>
        {`It seems like user with such email address (aubreyjjenkins@asf.com)
        don't have an account yet. Do you want to invite him to the platform
        through email?`}
      </Typography>
      <Box sx={buttonsContainer}>
        <Button variant="outlined" onClick={handleClose} color="primary">
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            Cancel
          </Typography>
        </Button>
        <Button variant="contained" fullWidth onClick={handleClose}>
          <Typography
            variant="h6"
            sx={{ color: theme.customColors.neutral.neutral20 }}
          >
            Send Invite
          </Typography>
        </Button>
      </Box>
    </Dialog>
  );
};

export default TeamUserInviteDialog;
