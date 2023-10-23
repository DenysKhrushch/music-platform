import React from "react";
import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { SyncBuyerFormValues } from "../sync-buyer-form/sync-buyer-form.types";

import {
  businessTypeOptions,
  primaryRoleOptions,
} from "./personal-info-buyer-form.constants";
import { FC } from "react";
import { Input } from "@/ui-library/input";
import { Dropdown } from "@/ui-library/dropdown";

export const PersonalInfoBuyerForm: FC = () => {
  const formik = useFormikContext<SyncBuyerFormValues>();

  return (
    <form>
      <Box sx={{ padding: "32px 83px" }} id="personal-info-buyer-container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              id="personalInfo.fullName"
              name="personalInfo.fullName"
              onBlur={formik.handleBlur}
              error={
                !!formik.errors.personalInfo?.fullName &&
                formik.touched.personalInfo?.fullName
              }
              helperText={
                formik.touched.personalInfo?.fullName &&
                formik.errors.personalInfo?.fullName
              }
              value={formik.values.personalInfo.fullName}
              onChange={formik.handleChange}
              label="Full name"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "8px" }}>
            <Input
              id="personalInfo.email"
              name="personalInfo.email"
              disabled
              onBlur={formik.handleBlur}
              value={formik.values.personalInfo.email}
              onChange={formik.handleChange}
              label="Your email"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "8px" }}>
            <Dropdown
              id="personalInfo.businessType"
              name="personalInfo.businessType"
              size="small"
              onBlur={formik.handleBlur}
              options={businessTypeOptions}
              valueLabel={formik.values.personalInfo.businessType}
              error={
                !!formik.errors.personalInfo?.businessType &&
                formik.touched.personalInfo?.businessType
              }
              handleChange={formik.handleChange}
              label="Your business type"
              value={formik.values.personalInfo.businessType}
              extraFieldTrigger="other"
              extraFieldProps={{
                label: "Describe your business type",
                id: "personalInfo.describeBusinessType",
                name: "personalInfo.describeBusinessType",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                error:
                  !!formik.errors.personalInfo?.describeBusinessType &&
                  formik.touched.personalInfo?.describeBusinessType,
                helperText:
                  formik.touched.personalInfo?.describeBusinessType &&
                  formik.errors.personalInfo?.describeBusinessType,
                value: formik.values.personalInfo.describeBusinessType,
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "8px" }}>
            <Dropdown
              id="personalInfo.primaryRole"
              name="personalInfo.primaryRole"
              size="small"
              onBlur={formik.handleBlur}
              options={primaryRoleOptions}
              error={
                !!formik.errors.personalInfo?.primaryRole &&
                formik.touched.personalInfo?.primaryRole
              }
              valueLabel={formik.values.personalInfo.primaryRole}
              handleChange={formik.handleChange}
              label="Your primary role"
              value={formik.values.personalInfo.primaryRole}
              extraFieldTrigger="other"
              extraFieldProps={{
                label: "Describe your primary role",
                id: "personalInfo.describePrimaryRole",
                name: "personalInfo.describePrimaryRole",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                error:
                  !!formik.errors.personalInfo?.describePrimaryRole &&
                  formik.touched.personalInfo?.describePrimaryRole,
                helperText:
                  formik.touched.personalInfo?.describePrimaryRole &&
                  formik.errors.personalInfo?.describePrimaryRole,
                value: formik.values.personalInfo.describePrimaryRole,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default PersonalInfoBuyerForm;
