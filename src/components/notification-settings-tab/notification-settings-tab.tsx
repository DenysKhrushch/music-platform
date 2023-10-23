import React, { FC } from "react";
import { Checkbox, Grid, Typography, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { notifications } from "./notification-settings-tab.constants";
import {
  button,
  buttonWrapper,
  checkboxSx,
  icon,
  iconWrapper,
  info,
  notification,
} from "./notification-settings-tab.styles";
import TabPanel from "@/ui-library/tab-panel/tab-panel";
import theme from "@/ui-library/theme";
import Button from "@/ui-library/button/button";

interface PanelProps {
  value: number;
}

export const NotificationSettingsTab: FC<PanelProps> = ({ value }) => {
  return (
    <TabPanel value={value} index={2}>
      <form>
        <Grid container sx={{ paddingLeft: "24px" }}>
          <Grid item xs={12} sx={info}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <InfoIcon sx={{ color: "#FFF", marginRight: 1.1 }} />
              <Typography variant='body2'>
                Pick the notifications you want to get via push or email.
                <br /> These preferences only apply to push and email.
              </Typography>
            </Box>
            <Box sx={iconWrapper}>
              <Box sx={icon}>
                <MailOutlineIcon sx={{ color: theme.palette.secondary.main }} />
                <Typography variant='h6'>Email</Typography>
              </Box>
              <Box sx={icon}>
                <SmartphoneIcon sx={{ color: theme.palette.secondary.main }} />
                <Typography variant='h6'>Push</Typography>
              </Box>
            </Box>
          </Grid>
          {notifications.map(({ title, description }) => (
            <Grid item key={title + description} xs={12} sx={notification}>
              <Box>
                <Typography variant='h4' sx={{ marginBottom: 1 }}>
                  {title}
                </Typography>
                <Typography variant='body2' sx={{ opacity: 0.7 }}>
                  {description}
                </Typography>
              </Box>

              <Box sx={iconWrapper}>
                <Checkbox defaultChecked sx={checkboxSx} value={value} />
                <Checkbox defaultChecked sx={checkboxSx} value={value} />
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} sx={buttonWrapper}>
            <Box sx={button}>
              <Button variant='outlined' fullWidth onClick={() => null}>
                <Typography variant='h6' sx={{ color: theme.palette.primary.main }}>
                  Cancel
                </Typography>
              </Button>
            </Box>
            <Box sx={{ width: 120 }}>
              <Button variant='contained' fullWidth onClick={() => null}>
                <Typography variant='h6' sx={{ color: theme.customColors.neutral.neutral20 }}>
                  Save
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </TabPanel>
  );
};

export default NotificationSettingsTab;
