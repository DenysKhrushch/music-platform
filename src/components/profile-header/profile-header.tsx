import { Box, Typography } from "@mui/material";

import {
  assistiveChipSx,
  avatar,
  avatarHoverIcon,
  profileHeaderContainerSx,
  profileHeaderWrapperSx,
} from "./profile-header.styles";
import { Avatar } from "@mui/material";

import React, { FC, useContext, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "next/image";
import CreateIcon from "@mui/icons-material/Create";
import { ProfileContext } from "@/context";
import theme from "@/ui-library/theme";
import { RainbowCircleIcon } from "@/ui-icons";
import { Button } from "@/ui-library/button";
import { EditAvatarDialog } from "@/ui-library/edit-avatar-dialog";

export const ProfileHeader: FC<{
  role: "sync-buyer" | "individual-music-producer" | "catalog-owner";
}> = ({ role }) => {
  const {
    isPasswordChanging,
    setIsPasswordChanging,
    setProfileTabValue,
    isPrivate,
  } = useContext(ProfileContext);
  const [isMouseOnAvatar, setIsMouseOnAvatar] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <Box sx={profileHeaderWrapperSx}>
      <Box
        sx={{
          width: "144px",
          height: "144px",
        }}
      >
        <Avatar alt="Username" sx={avatar}>
          <Image
            src="/images/avatar.png"
            width={144}
            height={144}
            alt="Image"
            onMouseEnter={() => setIsMouseOnAvatar(true)}
            onMouseLeave={() => setIsMouseOnAvatar(false)}
            onClick={() => setOpen(true)}
          />
          {isMouseOnAvatar && (
            <Box sx={avatarHoverIcon}>
              <CreateIcon
                sx={{
                  width: "36px",
                  height: "26px",
                  color: theme.palette.primary.light,
                }}
              />
            </Box>
          )}
        </Avatar>
      </Box>
      <Box sx={profileHeaderContainerSx}>
        {role === "sync-buyer" ? (
          <Box sx={assistiveChipSx}>
            <RainbowCircleIcon style={{ borderRadius: "50%" }} />
            <Typography
              variant="h6"
              sx={{ color: theme.customColors.neutral.neutral80 }}
            >
              Premium Individual
            </Typography>
          </Box>
        ) : null}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            {role === "catalog-owner" ? (
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.primary.main,
                  marginBottom: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                Distributor
              </Typography>
            ) : null}
            <Typography variant="h3" sx={{ fontSize: "36px" }}>
              Jamie James
            </Typography>
          </Box>
          <Box>
            {isPrivate && role === "individual-music-producer" ? (
              <LockOutlinedIcon
                sx={{ marginLeft: "16px", color: theme.palette.primary.main }}
              />
            ) : null}
          </Box>
        </Box>
        {isPasswordChanging ? null : (
          <Button
            variant="outlined"
            onClick={() => {
              setIsPasswordChanging(true);
              setProfileTabValue(0);
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              Change Password
            </Typography>
          </Button>
        )}
      </Box>
      <EditAvatarDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default ProfileHeader;
