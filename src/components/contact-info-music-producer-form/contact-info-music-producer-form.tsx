import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";

import React, { FC, useState } from "react";
import { City, State, ICity, IState } from "country-state-city";
import { IndividualMusicProducerFormValues } from "../individual-music-producer-form/individual-music-producer-form.types";
import {
  CountryAutocomplete,
  CountryType,
  countries,
} from "@/ui-library/country-autocomplete";
import { Input } from "@/ui-library/input";
import PhoneInput from "@/ui-library/phone-input/phone-input";
import { InputAutocomplete } from "@/ui-library/input-autocomplete/input-autocomplete";

export const ContactInfoMusicProducerForm: FC = () => {
  const formik = useFormikContext<IndividualMusicProducerFormValues>();

  const [cityOptions, setCityOptions] = useState<any>(
    City.getCitiesOfCountry(formik.values.contactInfo.country.code as any)
  );
  const [stateOptions, setStateOptions] = useState<any>(
    State.getStatesOfCountry(formik.values.contactInfo.country.code as any)
  );

  const handleCountryChange = (country: CountryType | null) => {
    formik.setFieldValue("contactInfo.country", country);

    if (country) {
      setStateOptions(State.getStatesOfCountry(country?.code as any));
    } else {
      setStateOptions([]);
      setCityOptions([]);
    }

    formik.setFieldValue("contactInfo.city", null);
    formik.setFieldValue("contactInfo.state", null);
  };

  const handleChangeState = (state: IState | null) => {
    formik.setFieldValue("contactInfo.state", state);
    formik.setFieldValue("contactInfo.city", null);

    if (state) {
      setCityOptions(
        City.getCitiesOfState(
          formik.values.contactInfo.country.code,
          state.isoCode
        )
      );
    } else {
      setCityOptions([]);
    }
  };

  return (
    <form>
      <Box sx={{ padding: "32px 83px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input
              id="contactInfo.email"
              name="contactInfo.email"
              disabled
              onBlur={formik.handleBlur}
              value={formik.values.contactInfo.email}
              onChange={formik.handleChange}
              label="Your email"
            />
          </Grid>
          <Grid item xs={12}>
            <PhoneInput
              id="contactInfo.phone"
              name="contactInfo.phone"
              countryCodeChange={(e) =>
                formik.setFieldValue(
                  "contactInfo.country",
                  countries.find((country) => country.code === e.target.value)
                )
              }
              countryCode={formik.values.contactInfo.country.code}
              options={countries}
              value={formik.values.contactInfo.phone}
              selectDisabled
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ width: "50%", marginRight: "24px" }}>
              <CountryAutocomplete
                id="contactInfo.country"
                name="contactInfo.country"
                defaultValue={{
                  code: "US",
                  label: "United States",
                  phone: "1",
                  suggested: true,
                }}
                disabled
                error={Boolean(
                  formik.errors.contactInfo?.country &&
                    formik.touched.contactInfo?.country
                )}
                helperText={
                  formik.touched.contactInfo?.country &&
                  (formik.errors.contactInfo?.country as string | undefined)
                }
                value={formik.values.contactInfo.country}
                handleChange={
                  ((_e: object, value: CountryType | null) => {
                    handleCountryChange(value);
                  }) as any
                }
                handleBlur={formik.handleBlur}
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <InputAutocomplete
                id="contactInfo.state"
                name="contactInfo.state"
                disabled={!formik.values.contactInfo.country}
                handleBlur={formik.handleBlur}
                options={stateOptions}
                error={Boolean(
                  !!formik.errors.contactInfo?.state &&
                    formik.touched.contactInfo?.state
                )}
                helperText={
                  formik.touched.contactInfo?.state &&
                  (formik.errors.contactInfo?.state as string | undefined)
                }
                handleChange={
                  ((_e: object, value: IState | null) => {
                    handleChangeState(value);
                  }) as any
                }
                label="State"
                value={formik.values.contactInfo.state}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Input
              id="contactInfo.address"
              name="contactInfo.address"
              onBlur={formik.handleBlur}
              error={
                !!formik.errors.contactInfo?.address &&
                formik.touched.contactInfo?.address
              }
              helperText={
                formik.touched.contactInfo?.address &&
                formik.errors.contactInfo?.address
              }
              value={formik.values.contactInfo.address}
              onChange={formik.handleChange}
              label="Your address"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ width: "100%", marginRight: "24px" }}>
              <InputAutocomplete
                id="contactInfo.city"
                name="contactInfo.city"
                disabled={
                  !formik.values.contactInfo.country ||
                  !formik.values.contactInfo.state
                }
                handleBlur={formik.handleBlur}
                options={cityOptions}
                error={Boolean(
                  !!formik.errors.contactInfo?.city &&
                    formik.touched.contactInfo?.city
                )}
                helperText={
                  formik.touched.contactInfo?.city &&
                  (formik.errors.contactInfo?.city as string | undefined)
                }
                handleChange={
                  ((_e: object, value: ICity | null) => {
                    formik.setFieldValue("contactInfo.city", value);
                  }) as any
                }
                label="City"
                value={formik.values.contactInfo.city}
              />
            </Box>
            <Input
              id="contactInfo.postalCode"
              name="contactInfo.postalCode"
              onBlur={formik.handleBlur}
              error={
                !!formik.errors.contactInfo?.postalCode &&
                formik.touched.contactInfo?.postalCode
              }
              helperText={
                formik.touched.contactInfo?.postalCode &&
                formik.errors.contactInfo?.postalCode
              }
              value={formik.values.contactInfo.postalCode}
              onChange={formik.handleChange}
              label="ZIP code"
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default ContactInfoMusicProducerForm;
