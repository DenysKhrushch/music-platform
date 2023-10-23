import { Box, Grid, Typography } from "@mui/material";
import { useFormikContext } from "formik";

import {
  hereForOptions,
  radioOptions,
} from "./goals-music-producer-form.constants";

import React, { FC } from "react";
import { IndividualMusicProducerFormValues } from "../individual-music-producer-form/individual-music-producer-form.types";
import { RadioInput } from "@/ui-library/radio-input";
import { Dropdown } from "@/ui-library/dropdown";
import howHearAboutUsOptions from "../additional-questions-form/additional-questions-form.constants";
import Checkbox from "@/ui-library/checkbox/checkbox";

export const GoalsMusicProducerForm: FC = () => {
  const formik = useFormikContext<IndividualMusicProducerFormValues>();

  return (
    <form>
      <Box sx={{ padding: "32px 83px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RadioInput
              options={radioOptions}
              id="experienceGoals.experience"
              name="experienceGoals.experience"
              label="Have you ever had a sync license before?"
              value={formik.values.experienceGoals.experience}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Dropdown
              id="experienceGoals.howHearAboutUs"
              name="experienceGoals.howHearAboutUs"
              size="small"
              onBlur={formik.handleBlur}
              options={howHearAboutUsOptions}
              valueLabel={formik.values.experienceGoals.howHearAboutUs}
              error={
                !!formik.errors.experienceGoals?.howHearAboutUs &&
                formik.touched.experienceGoals?.howHearAboutUs
              }
              handleChange={formik.handleChange}
              label="How did you hear about us"
              value={formik.values.experienceGoals.howHearAboutUs}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioInput
              options={hereForOptions}
              id="experienceGoals.yourGoal"
              name="experienceGoals.yourGoal"
              label="What are you here for?"
              value={formik.values.experienceGoals.yourGoal}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ color: "white", marginBottom: "16px" }}
            >
              Subscribe to our:
            </Typography>
            <Box sx={{ marginBottom: "16px" }}>
              <Checkbox
                variant="outlined"
                name="experienceGoals.newsletters"
                id="experienceGoals.newsletters"
                onChange={formik.handleChange}
                value={formik.values.experienceGoals.newsletters}
                label="Newsletters"
              />
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <Checkbox
                variant="outlined"
                name="experienceGoals.opportunities"
                id="experienceGoals.opportunities"
                onChange={formik.handleChange}
                value={formik.values.experienceGoals.opportunities}
                label="Sync opportunities"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default GoalsMusicProducerForm;
