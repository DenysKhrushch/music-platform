import React, { useContext } from "react";

import Box from "@mui/material/Box";

import { ProfileContext } from "@/context";
import ProfilePasswordResetForm from "../profile-password-reset-form/profile-password-reset-form";

import { ArtistPersonalDetailsTabForm } from "../artist-personal-details-tab-form";

export const ArtistPersonalDetailsTab = () => {
  const { isPasswordChanging } = useContext(ProfileContext);

  return (
    <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
      {isPasswordChanging ? (
        <ProfilePasswordResetForm />
      ) : (
        <ArtistPersonalDetailsTabForm />
      )}
    </Box>
  );
};

export default ArtistPersonalDetailsTab;
