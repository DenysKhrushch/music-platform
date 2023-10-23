import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";

import { CatalogOwnerFormValues } from "../catalog-owner-form/catalog-owner-form.types";

import React, { FC } from "react";
import { Input } from "@/ui-library/input";
import { Dropdown } from "@/ui-library/dropdown";
import { businessTypeOptions } from "../personal-info-buyer-form/personal-info-buyer-form.constants";

export const OwnerBusinessInfoForm: FC = () => {
  const formik = useFormikContext<CatalogOwnerFormValues>();

  return (
    <form>
      <Box sx={{ padding: "32px 83px" }} id="owner-business-info-container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input
              id="businessInfo.companyName"
              name="businessInfo.companyName"
              onBlur={formik.handleBlur}
              error={
                !!formik.errors.businessInfo?.companyName &&
                formik.touched.businessInfo?.companyName
              }
              helperText={
                formik.touched.businessInfo?.companyName &&
                formik.errors.businessInfo?.companyName
              }
              value={formik.values.businessInfo.companyName}
              onChange={formik.handleChange}
              label="Company name"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="businessInfo.companyUrl"
              name="businessInfo.companyUrl"
              onBlur={formik.handleBlur}
              error={
                !!formik.errors.businessInfo?.companyUrl &&
                formik.touched.businessInfo?.companyUrl
              }
              helperText={
                formik.touched.businessInfo?.companyUrl &&
                formik.errors.businessInfo?.companyUrl
              }
              value={formik.values.businessInfo.companyUrl}
              onChange={formik.handleChange}
              label="Company website URL"
            />
          </Grid>
          <Grid item xs={12}>
            <Dropdown
              id="businessInfo.businessType"
              name="businessInfo.businessType"
              size="small"
              onBlur={formik.handleBlur}
              options={businessTypeOptions}
              valueLabel={formik.values.businessInfo.businessType}
              error={
                !!formik.errors.businessInfo?.businessType &&
                formik.touched.businessInfo?.businessType
              }
              handleChange={formik.handleChange}
              label="Your business type"
              value={formik.values.businessInfo.businessType}
              extraFieldTrigger="other"
              extraFieldProps={{
                label: "Describe your business type",
                id: "businessInfo.businessTypeOther",
                name: "businessInfo.businessTypeOther",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                error:
                  !!formik.errors.businessInfo?.businessTypeOther &&
                  formik.touched.businessInfo?.businessTypeOther,
                helperText:
                  formik.touched.businessInfo?.businessTypeOther &&
                  formik.errors.businessInfo?.businessTypeOther,
                value: formik.values.businessInfo.businessTypeOther,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default OwnerBusinessInfoForm;
