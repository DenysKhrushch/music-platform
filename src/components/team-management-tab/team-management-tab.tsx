import React, { FC, useContext, useState } from "react";
import { Box, SelectChangeEvent } from "@mui/material";

import { ProfileContext } from "@/context";
import ProfilePasswordResetForm from "../profile-password-reset-form/profile-password-reset-form";
import { TeamSearchInput } from "@/ui-library/team-search-input/team-search-input";
import TeamUserInviteDialog from "@/ui-library/team-user-invite-dialog/team-user-invite-dialog";
import { TeamManagementTable } from "@/ui-library/team-management-table";

export const TeamManagementTab: FC = () => {
  const { isPasswordChanging } = useContext(ProfileContext);
  const [selectedOption, setSelectedOption] = useState({
    label: "Can View",
    value: "can view",
  });

  const [open, setOpen] = useState(false);

  const options = [
    { label: "Can View", value: "can view" },
    { label: "Can Edit", value: "can edit" },
  ];
  const handleOptionChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    setSelectedOption((prev) => selectedOption || prev);
  };

  return (
    <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
      {isPasswordChanging ? (
        <ProfilePasswordResetForm />
      ) : (
        <Box sx={{ width: "577px" }}>
          <TeamSearchInput
            selected={selectedOption}
            onSelectChange={handleOptionChange}
            setOpen={setOpen}
          />
          <Box sx={{ marginTop: "12px" }}>
            <TeamManagementTable />
          </Box>
        </Box>
      )}
      <TeamUserInviteDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default TeamManagementTab;
