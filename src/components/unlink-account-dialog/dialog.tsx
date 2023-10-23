import React, { FC, useContext } from "react";
import { Box, Dialog, Typography } from "@mui/material";

import {
  button,
  buttonWrapper,
  dialog,
  privacyNoteText,
} from "./dialog.styles";
import { Button } from "@/ui-library/button";
import theme from "@/ui-library/theme";
import { ProfileContext } from "@/context";

export const UnlinkAccountDialog: FC = () => {
  const { isUnlinkAccount, setIsUnlinkAccount } = useContext(ProfileContext);

  const handleClose = () => {
    setIsUnlinkAccount(false);
  };

  return (
    <Dialog open={isUnlinkAccount} onClose={handleClose} sx={dialog}>
      <Typography variant="h3" mb={1} color={theme.palette.primary.main}>
        Unlink Account
      </Typography>
      <Typography variant="body2" letterSpacing=".25px" mb={3}>
        Attention! Unlinking your account will result in the following actions:
        <ol style={{ margin: 0, paddingLeft: 16 }}>
          <li>
            Email Notification: Once you confirm the account unlinking process,
            a notification will be sent to the email address associated with
            your account. This email will provide details about the unlinking
            action and serve as a confirmation of your request.
          </li>
          <li>
            Automatic Logout: Following the account unlinking, you will be
            automatically logged out of your current session. You will need to
            log in again if you wish to access your account in the future.
          </li>
        </ol>
        Please note that these actions are irreversible and will affect your
        account immediately. Before proceeding with the unlinking process,
        carefully consider the implications mentioned above.
        <br /> If you are sure about your decision and wish to proceed, please
        click on the &quot;Confirm&quot; button below. Otherwise, click on
        &quot;Cancel&quot; to keep your account linked.
      </Typography>
      <Box sx={buttonWrapper}>
        <Box sx={button} mr={1.5}>
          <Button variant="outlined" fullWidth onClick={handleClose}>
            <Typography variant="h6" color={theme.palette.primary.main}>
              Cancel
            </Typography>
          </Button>
        </Box>
        <Box sx={button}>
          <Button variant="contained" fullWidth onClick={handleClose}>
            <Typography
              variant="h6"
              color={theme.customColors.neutral.neutral20}
            >
              Confirm
            </Typography>
          </Button>
        </Box>
      </Box>
      <Typography variant="body2" sx={privacyNoteText}>
        We value your privacy and the security of your account. If you have any
        concerns or require assistance, please contact our support team for
        further guidance.
      </Typography>
    </Dialog>
  );
};

export default UnlinkAccountDialog;
