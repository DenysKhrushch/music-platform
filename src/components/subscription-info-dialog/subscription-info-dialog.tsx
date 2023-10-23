import { Box, Dialog, IconButton, Typography } from "@mui/material";
import React, { FC, useContext } from "react";

import { buttonsContainer, dialog } from "./subscription-info-dialog.styles";
import { ProfileContext } from "@/context";
import theme from "@/ui-library/theme";
import { Button } from "@/ui-library/button";
import { RainbowCircleIcon } from "@/ui-icons";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { crossIcon } from "@/ui-library/snackbar/snackbar.styles";
import CloseIcon from "@mui/icons-material/Close";

export const SubscriptionInfoDialog: FC = () => {
  const { isSubscriptionInfoDialogShowed, setIsSubscriptionInfoDialogShowed } =
    useContext(ProfileContext);
  const handleClose = () => {
    setIsSubscriptionInfoDialogShowed(false);
  };

  const handleConfirm = () => {
    setIsSubscriptionInfoDialogShowed(false);
  };

  return (
    <Dialog
      open={isSubscriptionInfoDialogShowed}
      onClose={handleClose}
      aria-labelledby="edit-avatar-dialog-title"
      aria-describedby="edit-avatar-dialog-description"
      PaperProps={{ sx: dialog }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
          }}
        >
          <RainbowCircleIcon
            style={{ borderRadius: "50%", marginRight: "8px" }}
          />
          Premium Catalogue
        </Typography>
        <IconButton aria-label="close" sx={crossIcon} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography>
        Ad-free music listening, offline listening, and unlimited skips. No Team
        limitations and no per time loading limit. With our Premium
        subscription, you gain exclusive access to a world of limitless musical
        possibilities. Enjoy an enhanced music experience like never before,
        with a vast library of licensed tracks at your fingertips.
      </Typography>
      <Box sx={{ display: "flex", marginTop: "22px" }}>
        <Box sx={{ width: "50%", paddingRight: "24px" }}>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.primary.main, fontSize: "16px" }}
          >
            Payment
          </Typography>
          <Typography>
            Your next bill:
            <br /> for{" "}
            <Box component="span" fontWeight="bold">
              $499
            </Box>{" "}
            on{" "}
            <Box component="span" fontWeight="bold">
              6/14/23
            </Box>
            .
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.primary.main, fontSize: "16px" }}
          >
            Payment Method
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CreditCardIcon
              sx={{ color: theme.palette.primary.light, marginRight: "24px" }}
            />
            <Typography>**** **** **** 3314 | 09/26</Typography>
          </Box>
        </Box>
      </Box>
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
            Send Invite
          </Typography>
        </Button>
      </Box>
    </Dialog>
  );
};

export default SubscriptionInfoDialog;
