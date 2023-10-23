import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";

import { CatalogOwnerFormValues } from "../catalog-owner-form/catalog-owner-form.types";

import React, { FC } from "react";
import { toggleChip } from "../catalog-info-music-producer-form/catalog-info-music-producer-form.utils";
import { Dropdown } from "@/ui-library/dropdown";
import {
  numberOfTracks,
  numberOfUniqueArtists,
  primaryGenres,
} from "../catalog-info-music-producer-form/catalog-info-music-producer-form.constants";
import ChipFormControl from "@/ui-library/chip-form-control/chip-form-control";

import { RadioInput } from "@/ui-library/radio-input";
import Slider from "@/ui-library/slider/slider";
import { radioOptions } from "../licensing-music-producer-form/licensing-music-producer-form.constants";

export const OwnerCatalogInfoForm: FC = () => {
  const formik = useFormikContext<CatalogOwnerFormValues>();

  const handleChipToggle = (chip: string) => {
    formik.setFieldValue(
      "catalogInfo.primaryGenres",
      toggleChip(formik.values.catalogInfo.primaryGenres, chip)
    );
  };

  return (
    <form>
      <Box sx={{ padding: "32px 83px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Dropdown
              id="catalogInfo.numberOfTracks"
              name="catalogInfo.numberOfTracks"
              size="small"
              onBlur={formik.handleBlur}
              options={numberOfTracks}
              valueLabel={formik.values.catalogInfo.numberOfTracks}
              error={
                !!formik.errors.catalogInfo?.numberOfTracks &&
                formik.touched.catalogInfo?.numberOfTracks
              }
              handleChange={formik.handleChange}
              label="No. of tracks in your catalog"
              value={formik.values.catalogInfo.numberOfTracks}
            />
          </Grid>
          <Grid item xs={12}>
            <Dropdown
              id="catalogInfo.numberOfUniqueArtists"
              name="catalogInfo.numberOfUniqueArtists"
              size="small"
              onBlur={formik.handleBlur}
              options={numberOfUniqueArtists}
              valueLabel={formik.values.catalogInfo.numberOfUniqueArtists}
              error={
                !!formik.errors.catalogInfo?.numberOfUniqueArtists &&
                formik.touched.catalogInfo?.numberOfUniqueArtists
              }
              handleChange={formik.handleChange}
              label="No.of unique artists represented in your catalog"
              value={formik.values.catalogInfo.numberOfUniqueArtists}
            />
          </Grid>
          <Grid item xs={12}>
            <ChipFormControl
              name="catalogInfo.primaryGenres"
              options={primaryGenres}
              value={formik.values.catalogInfo.primaryGenres}
              onChange={handleChipToggle}
              extraFieldTrigger="other"
              extraFieldProps={{
                label: "Describe your genre",
                id: "catalogInfo.primaryGenreOther",
                name: "catalogInfo.primaryGenreOther",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                error:
                  !!formik.errors.catalogInfo?.primaryGenreOther &&
                  formik.touched.catalogInfo?.primaryGenreOther,
                helperText:
                  formik.touched.catalogInfo?.primaryGenreOther &&
                  formik.errors.catalogInfo?.primaryGenreOther,
                value: formik.values.catalogInfo.primaryGenreOther,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioInput
              options={radioOptions}
              id="catalogInfo.artistsAgreements"
              name="catalogInfo.artistsAgreements"
              label="Do you have direct agreements with all artists represented in your catalog?"
              value={formik.values.catalogInfo.artistsAgreements}
              onChange={(event) => {
                formik.setFieldValue(
                  "catalogInfo.artistsAgreements",
                  event.target.value === "true"
                );
              }}
              extraFieldTrigger={true}
              extraFieldProps={{
                label: "Explain your relationships",
                id: "catalogInfo.artistsAgreementsOther",
                name: "catalogInfo.artistsAgreementsOther",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                error:
                  !!formik.errors.catalogInfo?.artistsAgreementsOther &&
                  formik.touched.catalogInfo?.artistsAgreementsOther,
                helperText:
                  formik.touched.catalogInfo?.artistsAgreementsOther &&
                  formik.errors.catalogInfo?.artistsAgreementsOther,
                value: formik.values.catalogInfo.artistsAgreementsOther,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioInput
              options={radioOptions}
              id="catalogInfo.exclusiveRightsHolder"
              name="catalogInfo.exclusiveRightsHolder"
              label="Are you the exclusive rights holder for any of the music in your catalog?"
              value={formik.values.catalogInfo.exclusiveRightsHolder}
              onChange={(event) => {
                formik.setFieldValue(
                  "catalogInfo.exclusiveRightsHolder",
                  event.target.value === "true"
                );
              }}
            />
          </Grid>
          {formik.values.catalogInfo.exclusiveRightsHolder ? (
            <Grid item xs={12}>
              <Slider
                label="Please indicate the percentage of your catalog that is exclusive:"
                value={formik.values.catalogInfo.exclusiveContentPercentage}
                marks={[
                  { value: 10 },
                  { value: 20 },
                  { value: 30 },
                  { value: 40 },
                  { value: 50 },
                  { value: 60 },
                  { value: 70 },
                  { value: 80 },
                  { value: 90 },
                  { value: 100 },
                ]}
                step={10}
                handleChange={(e, value) => {
                  formik.setFieldValue(
                    "catalogInfo.exclusiveContentPercentage",
                    value
                  );
                }}
                name="catalogInfo.exclusiveContentPercentage"
                id="catalogInfo.exclusiveContentPercentage"
              />
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </form>
  );
};

export default OwnerCatalogInfoForm;
