import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";

import { CatalogOwnerFormValues } from "../catalog-owner-form/catalog-owner-form.types";

import React, { FC } from "react";
import { radioOptions } from "../distribution-metadata-music-producer-form/distribution-metadata-music-producer-form.constants";
import { RadioInput } from "@/ui-library/radio-input";

/* eslint-disable-next-line */
export interface OwnerDistributionMetadataFormFormProps {}

export const OwnerDistributionMetadataForm: FC = () => {
  const formik = useFormikContext<CatalogOwnerFormValues>();

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
                label: "Describe your method",
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

export default OwnerDistributionMetadataForm;
