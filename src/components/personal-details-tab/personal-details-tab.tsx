import React, { FC, useContext, useState } from "react";
import { Typography, Box, Link } from "@mui/material";
import { container } from "./personal-details-tab.styles";
import TabPanel from "@/ui-library/tab-panel/tab-panel";
import { ProfileContext } from "@/context";
import ProfilePasswordResetForm from "../profile-password-reset-form/profile-password-reset-form";
import { ProfileInfoForm } from "@/components/profile-info-form/profile-info-form";

interface PersonalDetailsTabProps {
  value: number;
}

export const PersonalDetailsTab: FC<PersonalDetailsTabProps> = ({ value }) => {
  const { isPasswordChanging, setIsUnlinkAccount } = useContext(ProfileContext);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <TabPanel value={value} index={0}>
      <Box sx={container}>
        {isPasswordChanging ? (
          <ProfilePasswordResetForm />
        ) : (
          <ProfileInfoForm
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
          >
            {isEditMode && (
              <Typography sx={{ marginBottom: "24px" }}>
                Connected using Google. To edit some fields you will need to{" "}
                <Link
                  sx={{ cursor: "pointer", textDecoration: "none" }}
                  onClick={() => setIsUnlinkAccount(true)}
                >
                  Unlink Account
                </Link>
              </Typography>
            )}
          </ProfileInfoForm>
        )}
      </Box>
    </TabPanel>
  );
};

export default PersonalDetailsTab;
