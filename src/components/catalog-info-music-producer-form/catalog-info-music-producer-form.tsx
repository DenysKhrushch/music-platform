import React from "react";
import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";

import {
  collaborationRadioOptions,
  numberOfTracks,
  primaryGenres,
} from "./catalog-info-music-producer-form.constants";
import { toggleChip } from "./catalog-info-music-producer-form.utils";
import { FC } from "react";
import { Dropdown } from "@/ui-library/dropdown";
import ChipFormControl from "@/ui-library/chip-form-control/chip-form-control";
import { RadioInput } from "@/ui-library/radio-input";
import { IndividualMusicProducerFormValues } from "../individual-music-producer-form/individual-music-producer-form.types";
import { Input } from "@/ui-library/input";

export const CatalogInfoMusicProducerForm: FC = () => {
  const formik = useFormikContext<IndividualMusicProducerFormValues>();

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
            <Input
              id="catalogInfo.genre"
              name="catalogInfo.genre"
              onBlur={formik.handleBlur}
              error={
                !!formik.errors.catalogInfo?.genre &&
                formik.touched.catalogInfo?.genre
              }
              helperText={
                formik.touched.catalogInfo?.genre &&
                formik.errors.catalogInfo?.genre
              }
              value={formik.values.catalogInfo.genre}
              onChange={formik.handleChange}
              label="Describe your genre"
            />
          </Grid>
          <Grid item xs={12}>
            <RadioInput
              options={collaborationRadioOptions}
              id="catalogInfo.artistRelationships"
              name="catalogInfo.artistRelationships"
              label="Do you have any collaborations of featured artists in your catalog?"
              value={formik.values.catalogInfo.artistRelationships}
              onChange={(event) => {
                formik.setFieldValue(
                  "catalogInfo.artistRelationships",
                  event.target.value === "true"
                );
              }}
              extraFieldTrigger={true}
              extraFieldProps={{
                label: "Explain your relationships",
                id: "catalogInfo.artistRelationshipsOther",
                name: "catalogInfo.artistRelationshipsOther",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                error:
                  !!formik.errors.catalogInfo?.artistRelationshipsOther &&
                  formik.touched.catalogInfo?.artistRelationshipsOther,
                helperText:
                  formik.touched.catalogInfo?.artistRelationshipsOther &&
                  formik.errors.catalogInfo?.artistRelationshipsOther,
                value: formik.values.catalogInfo.artistRelationshipsOther,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default CatalogInfoMusicProducerForm;
