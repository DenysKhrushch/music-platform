import React, { useContext } from "react";

import Box from "@mui/material/Box";

import { ProfileContext } from "@/context";
import ProfilePasswordResetForm from "../profile-password-reset-form/profile-password-reset-form";

import { OwnerPersonalDetailsTabForm } from "../owner-personal-details-tab-form";

export const OwnerPersonalDetailsTab = () => {
  const { isPasswordChanging } = useContext(ProfileContext);

  return (
    <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
      {isPasswordChanging ? (
        <ProfilePasswordResetForm />
      ) : (
        <OwnerPersonalDetailsTabForm />
      )}
    </Box>
  );
};

export default OwnerPersonalDetailsTab;
