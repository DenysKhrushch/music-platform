import React, { FC, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import theme from "@/ui-library/theme";
import { Input } from "@/ui-library/input";
import { Dropdown } from "@/ui-library/dropdown";
import { primaryRoleOptions } from "@/components/personal-info-buyer-form/personal-info-buyer-form.constants";
import { PasswordInput } from "@/ui-library/password-input";
import {
  countries,
  CountryAutocomplete,
} from "@/ui-library/country-autocomplete";
import { City, ICity, IState, State } from "country-state-city";
import { Button } from "@/ui-library/button";
import { useFormik } from "formik";
import InputAutocomplete from "@/ui-library/input-autocomplete/input-autocomplete";
import PhoneInput from "@/ui-library/phone-input/phone-input";
import { ProfileInfoFormValues } from "@/components/profile-info-form/profile-info-form.types";
import { setColor } from "@/components/profile-info-form/profile-info-form.styles";
import {
  initialValues,
  validate,
} from "@/components/profile-info-form/profile-info-form.utils";

interface ProfileInfoForm {
  children?: React.ReactNode;
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
}

export const ProfileInfoForm: FC<ProfileInfoForm> = ({
  children,
  isEditMode,
  setIsEditMode,
}) => {
  const updateInfo = (values: any) => {
    setIsEditMode(false);
    console.log("UpdateInfo", values);
  };

  const formik = useFormik<ProfileInfoFormValues>({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => updateInfo(values),
  });

  const [cityOptions, setCityOptions] = useState<any>(
    City.getCitiesOfCountry(formik?.values.country.code as any)
  );

  const [stateOptions, setStateOptions] = useState<any>(
    State.getStatesOfCountry(formik?.values.country.code as any)
  );

  const handleChangeState = (state: IState | null) => {
    formik?.setFieldValue("state", state);
    formik?.setFieldValue("city", null);

    if (state) {
      setCityOptions(
        City.getCitiesOfState(formik?.values.country.code, state.isoCode)
      );
    } else {
      setCityOptions([]);
    }
  };

  return (
    <Box>
      <form onSubmit={(e) => e.preventDefault()}>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.primary.main, fontSize: "22px" }}
        >
          Your information
        </Typography>
        <Box sx={{ padding: "32px 0px", maxWidth: "650px" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Input
                id="fullName"
                name="fullName"
                onBlur={formik?.handleBlur}
                value={formik?.values.fullName}
                onChange={formik?.handleChange}
                label="Full name"
                disabled={!isEditMode}
                error={!!formik?.errors?.fullName && formik?.touched?.fullName}
                helperText={
                  formik?.touched?.fullName && formik?.errors?.fullName
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Dropdown
                  id="primaryRole"
                  name="primaryRole"
                  size="small"
                  onBlur={formik?.handleBlur}
                  options={primaryRoleOptions}
                  disabled={!isEditMode}
                  error={
                    !!formik?.errors?.primaryRole && formik.touched?.primaryRole
                  }
                  valueLabel={formik?.values.primaryRole}
                  handleChange={formik?.handleChange}
                  label="Your primary role"
                  value={formik?.values.primaryRole}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Input
                id="email"
                name="email"
                disabled={!isEditMode}
                onBlur={formik?.handleBlur}
                value={formik?.values.email}
                onChange={formik?.handleChange}
                error={!!formik?.errors?.email && formik?.touched?.email}
                helperText={formik?.touched?.email && formik?.errors?.email}
                label="Your email"
              />
            </Grid>
            {isEditMode &&
              formik.values.email !== formik.initialValues.email && (
                <Grid item xs={12}>
                  <PasswordInput
                    id="password"
                    name="password"
                    onBlur={formik?.handleBlur}
                    value={formik?.values.password}
                    onChange={formik?.handleChange}
                    error={!!formik.errors.password && formik.touched.password}
                    helpText={formik?.errors?.password}
                    label="Create password"
                  />
                </Grid>
              )}

            <Grid item xs={12}>
              <PhoneInput
                id="phone"
                disabled={!isEditMode}
                name="phone"
                countryCodeChange={(e) =>
                  formik.setFieldValue(
                    "country",
                    countries.find((country) => country.code === e.target.value)
                  )
                }
                countryCode={formik?.values.country.code}
                options={countries}
                value={formik?.values.phone}
                selectDisabled
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!formik?.errors?.phone && formik?.touched?.phone}
                helperText={formik?.touched?.phone && formik?.errors?.phone}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: "100%" }}>
                <CountryAutocomplete
                  id="country"
                  name="country"
                  disabled
                  defaultValue={{
                    code: "US",
                    label: "United States",
                    phone: "1",
                    suggested: true,
                  }}
                  helperText={
                    formik?.touched?.country &&
                    (formik?.errors?.country as string | undefined)
                  }
                  value={formik?.values.country}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <InputAutocomplete
                id="city"
                name="city"
                readOnly={!isEditMode}
                disabled={!formik?.values.state}
                handleBlur={formik?.handleBlur}
                options={cityOptions}
                error={Boolean(!!formik?.errors?.city && formik?.touched?.city)}
                helperText={
                  formik?.touched?.city &&
                  (formik?.errors?.city as string | undefined)
                }
                handleChange={
                  ((_e: object, value: ICity | null) => {
                    formik.setFieldValue("city", value);
                  }) as any
                }
                label="City"
                value={formik?.values.city}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="address"
                name="address"
                onBlur={formik?.handleBlur}
                error={!!formik?.errors?.address && formik?.touched?.address}
                helperText={formik?.touched?.address && formik?.errors?.address}
                value={formik?.values.address}
                onChange={formik?.handleChange}
                label="Your address"
                disabled={!isEditMode}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <InputAutocomplete
                id="state"
                name="state"
                disabled={!isEditMode}
                handleBlur={formik?.handleBlur}
                options={stateOptions}
                error={Boolean(
                  !!formik?.errors?.state && formik?.touched?.state
                )}
                helperText={
                  formik?.touched?.state &&
                  (formik?.errors?.state as string | undefined)
                }
                handleChange={
                  ((_e: object, value: IState | null) => {
                    handleChangeState(value);
                  }) as any
                }
                label="State/province"
                value={formik?.values.state}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="zipCode"
                name="zipCode"
                onBlur={formik?.handleBlur}
                error={!!formik?.errors?.zipCode && formik?.touched?.zipCode}
                helperText={formik?.touched?.zipCode && formik?.errors?.zipCode}
                value={formik?.values.zipCode}
                onChange={formik?.handleChange}
                label="ZIP code"
                disabled={!isEditMode}
              />
            </Grid>
          </Grid>
          <Grid sx={{ marginTop: "34px" }}>
            {children}
            {isEditMode ? (
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    formik.setErrors({});
                    setIsEditMode(false);
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Cancel
                  </Typography>
                </Button>
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={!(formik?.isValid && formik.dirty)}
                    onClick={() => formik.handleSubmit()}
                  >
                    <Typography
                      variant="h6"
                      sx={setColor(formik?.isValid && formik.dirty)}
                    >
                      Save changes
                    </Typography>
                  </Button>
                </Box>
              </Box>
            ) : (
              <Button variant="outlined" onClick={() => setIsEditMode(true)}>
                Edit profile
              </Button>
            )}
          </Grid>
        </Box>
      </form>
    </Box>
  );
};
