import React from "react";
import { Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FC } from "react";
import { useFormikContext } from "formik";
import { WelcomeFormValues } from "../welcome-form/welcome-form.types";
import { SelectRoleFormProps } from "./select-role-form.types";
import { RadioInput } from "@/ui-library/radio-input/radio-input";
import Button from "@/ui-library/button/button";
import theme from "@/ui-library/theme";

/* eslint-disable-next-line */

export const SelectRoleForm: FC<SelectRoleFormProps> = ({
  onNextStep,
  onPrevStep,
}) => {
  const formik = useFormikContext<WelcomeFormValues>();

  const radioOptions = [
    {
      label: "Sync buyer",
      value: "sync-buyer",
      subText:
        "You are looking for music for media, films, TV shows, commercials, video games, and more.",
    },
    {
      label: "Individual Music Producer",
      value: "individual-music-producer",
      subText: "You are an individual music professional\nand/or creator.",
    },
    {
      label: "Catalog owner",
      value: "catalog-owner",
      subText:
        "You are music collection rights holder and are looking at further monetizing the use and value of your catalog.",
    },
  ];

  return (
    <form onSubmit={onNextStep}>
      <Typography variant="h2" sx={{ marginBottom: "32px" }}>
        Select your role
      </Typography>
      <RadioInput
        options={radioOptions}
        onChange={formik.handleChange}
        outlined
        value={formik.values.role}
        name="role"
        id="role"
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        id="onboarding-continue"
        disabled={!formik.values.role}
        startIcon={
          <ArrowForwardIcon
            sx={{ color: theme.customColors.neutral.neutral20 }}
          />
        }
      >
        <Typography
          variant="h6"
          sx={{ color: theme.customColors.neutral.neutral20 }}
        >
          Continue
        </Typography>
      </Button>
    </form>
  );
};

export default SelectRoleForm;
