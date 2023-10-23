import React, { FC } from "react";
import { Avatar, Badge, Box, Divider, IconButton } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

import {
  dividerSx,
  headerSx,
  iconSx,
  iconButtonSx,
  navIconsContainerSx,
  navWrapperSx,
  notificationBadgeSx,
} from "./header.styles";
import theme from "../theme";

export interface HeaderProps {
  authorized?: boolean;
}

export const Header: FC<HeaderProps> = ({ authorized }) => {
  return (
    <Box sx={headerSx}>
      {authorized && (
        <Box sx={navWrapperSx}>
          <Box sx={navIconsContainerSx}>
            <IconButton sx={iconButtonSx}>
              <SearchIcon sx={iconSx} />
            </IconButton>
            <IconButton sx={iconButtonSx}>
              <PlaylistPlayIcon sx={iconSx} />
            </IconButton>
            <IconButton sx={iconButtonSx}>
              <ShoppingBasketOutlinedIcon sx={iconSx} />
            </IconButton>
          </Box>
          <Divider sx={dividerSx} />
          <Box>
            <Badge sx={notificationBadgeSx} overlap='circular' variant='dot'>
              <IconButton sx={{ ...iconButtonSx, width: "14px", height: "14px" }}>
                <NotificationsIcon sx={{ ...iconSx, color: theme.palette.primary.light }} />
              </IconButton>
            </Badge>
            <IconButton sx={{ ...iconButtonSx, marginLeft: "18px" }}>
              <Avatar alt='Username' src='../images/avatar.png' sx={{ width: "32px", height: "32px" }} />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
