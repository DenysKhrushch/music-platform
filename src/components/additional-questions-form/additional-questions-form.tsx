import { Box, Grid, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { SyncBuyerFormValues } from "../sync-buyer-form/sync-buyer-form.types";

import howHearAboutUsOptions from "./additional-questions-form.constants";
import React, { FC } from "react";
import { Dropdown } from "@/ui-library/dropdown";
import Checkbox from "@/ui-library/checkbox/checkbox";

export const AdditionalQuestionsForm: FC = () => {
  const formik = useFormikContext<SyncBuyerFormValues>();

  return (
    <form>
      <Box sx={{ padding: "32px 83px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginBottom: "32px" }}>
            <Dropdown
              id="additionalQuestions.howHearAboutUs"
              name="additionalQuestions.howHearAboutUs"
              size="small"
              onBlur={formik.handleBlur}
              options={howHearAboutUsOptions}
              valueLabel={formik.values.additionalQuestions.howHearAboutUs}
              error={
                !!formik.errors.additionalQuestions?.howHearAboutUs &&
                formik.touched.additionalQuestions?.howHearAboutUs
              }
              handleChange={formik.handleChange}
              label="How did you hear about us"
              value={formik.values.additionalQuestions.howHearAboutUs}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "8px" }}>
            <Typography
              variant="h4"
              sx={{ color: "white", marginBottom: "16px" }}
            >
              Subscribe to our:
            </Typography>
            <Box sx={{ marginBottom: "16px" }}>
              <Checkbox
                variant="outlined"
                name="additionalQuestions.newsletters"
                id="additionalQuestions.newsletters"
                onChange={formik.handleChange}
                value={formik.values.additionalQuestions.newsletters}
                label="Newsletters"
              />
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <Checkbox
                variant="outlined"
                name="additionalQuestions.announcements"
                id="additionalQuestions.announcements"
                onChange={formik.handleChange}
                value={formik.values.additionalQuestions.announcements}
                label="New artists announcements"
              />
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <Checkbox
                variant="outlined"
                name="additionalQuestions.opportunities"
                id="additionalQuestions.opportunities"
                onChange={formik.handleChange}
                value={formik.values.additionalQuestions.opportunities}
                label="Sync opportunities"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default AdditionalQuestionsForm;
