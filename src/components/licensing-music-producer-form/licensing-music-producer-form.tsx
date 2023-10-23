import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";

import { radioOptions } from "./licensing-music-producer-form.constants";
import React, { FC } from "react";
import { RadioInput } from "@/ui-library/radio-input";
import { IndividualMusicProducerFormValues } from "../individual-music-producer-form/individual-music-producer-form.types";

export const LicensingMusicProducerForm: FC = () => {
  const formik = useFormikContext<IndividualMusicProducerFormValues>();

  return (
    <form>
      <Box sx={{ padding: "32px 83px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RadioInput
              options={radioOptions}
              id="licensingClearingRights.musicOwnershipRights"
              name="licensingClearingRights.musicOwnershipRights"
              label="Do you own and control 100% of both master and publishing rights for all tracks
              in your catalog?"
              value={formik.values.licensingClearingRights.musicOwnershipRights}
              onChange={(event) => {
                formik.setFieldValue(
                  "licensingClearingRights.musicOwnershipRights",
                  event.target.value === "true"
                );
              }}
              extraFieldTrigger={false}
              extraFieldProps={{
                label: "Explain any limitations",
                id: "licensingClearingRights.musicOwnershipRightsOther",
                name: "licensingClearingRights.musicOwnershipRightsOther",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                error:
                  !!formik.errors.licensingClearingRights
                    ?.musicOwnershipRightsOther &&
                  formik.touched.licensingClearingRights
                    ?.musicOwnershipRightsOther,
                helperText:
                  formik.touched.licensingClearingRights
                    ?.musicOwnershipRightsOther &&
                  formik.errors.licensingClearingRights
                    ?.musicOwnershipRightsOther,
                value:
                  formik.values.licensingClearingRights
                    .musicOwnershipRightsOther,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioInput
              options={radioOptions}
              id="licensingClearingRights.trackContentAnalysis"
              name="licensingClearingRights.trackContentAnalysis"
              label="Do any tracks in your catalog contain samples, interpolations, or covers?"
              value={formik.values.licensingClearingRights.trackContentAnalysis}
              onChange={(event) => {
                formik.setFieldValue(
                  "licensingClearingRights.trackContentAnalysis",
                  event.target.value === "true"
                );
              }}
            />
          </Grid>
          {formik.values.licensingClearingRights.trackContentAnalysis ? (
            <Grid item xs={12}>
              <RadioInput
                options={radioOptions}
                id="licensingClearingRights.trackRightsVerification"
                name="licensingClearingRights.trackRightsVerification"
                label="Do you have all necessary rights for these tracks? "
                value={
                  formik.values.licensingClearingRights.trackRightsVerification
                }
                onChange={(event) => {
                  formik.setFieldValue(
                    "licensingClearingRights.trackRightsVerification",
                    event.target.value === "true"
                  );
                }}
                extraFieldTrigger={false}
                extraFieldProps={{
                  label: "Provide additional information",
                  id: "licensingClearingRights.trackRightsVerificationOther",
                  name: "licensingClearingRights.trackRightsVerificationOther",
                  onChange: formik.handleChange,
                  onBlur: formik.handleBlur,
                  error:
                    !!formik.errors.licensingClearingRights
                      ?.trackRightsVerificationOther &&
                    formik.touched.licensingClearingRights
                      ?.trackRightsVerificationOther,
                  helperText:
                    formik.touched.licensingClearingRights
                      ?.trackRightsVerificationOther &&
                    formik.errors.licensingClearingRights
                      ?.trackRightsVerificationOther,
                  value:
                    formik.values.licensingClearingRights
                      .trackRightsVerificationOther,
                }}
              />
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <RadioInput
              options={radioOptions}
              id="licensingClearingRights.trackIdentificationCodes"
              name="licensingClearingRights.trackIdentificationCodes"
              label="Can you provide ISRC and/or UPC codes for all tracks in your catalog?"
              value={
                formik.values.licensingClearingRights.trackIdentificationCodes
              }
              onChange={(event) => {
                formik.setFieldValue(
                  "licensingClearingRights.trackIdentificationCodes",
                  event.target.value === "true"
                );
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default LicensingMusicProducerForm;
