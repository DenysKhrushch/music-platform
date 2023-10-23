import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";

import { radioOptions } from "./distribution-metadata-music-producer-form.constants";
import React, { FC } from "react";
import { RadioInput } from "@/ui-library/radio-input";
import { IndividualMusicProducerFormValues } from "../individual-music-producer-form/individual-music-producer-form.types";

export const DistributionMetadataMusicProducerForm: FC = () => {
  const formik = useFormikContext<IndividualMusicProducerFormValues>();

  return (
    <form>
      <Box sx={{ padding: "32px 83px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RadioInput
              options={radioOptions}
              id="distributionMetadata.catalogMetadataManagement"
              name="distributionMetadata.catalogMetadataManagement"
              outlined
              label="How do you currently manage and distribute your catalog’s metadata?"
              value={
                formik.values.distributionMetadata.catalogMetadataManagement
              }
              onChange={formik.handleChange}
              extraFieldTrigger="other"
              extraFieldProps={{
                label: "Explain any limitations",
                id: "distributionMetadata.catalogMetadataManagementOther",
                name: "distributionMetadata.catalogMetadataManagementOther",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                error:
                  !!formik.errors.distributionMetadata
                    ?.catalogMetadataManagementOther &&
                  formik.touched.distributionMetadata
                    ?.catalogMetadataManagementOther,
                helperText:
                  formik.touched.distributionMetadata
                    ?.catalogMetadataManagementOther &&
                  formik.errors.distributionMetadata
                    ?.catalogMetadataManagementOther,
                value:
                  formik.values.distributionMetadata
                    .catalogMetadataManagementOther,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default DistributionMetadataMusicProducerForm;
