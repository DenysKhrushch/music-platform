import { Box, Grid } from "@mui/material";
import { useFormikContext } from "formik";

import { socialMedia } from "./personal-info-music-producer-form.constants";
import React, { FC } from "react";
import { IndividualMusicProducerFormValues } from "../individual-music-producer-form/individual-music-producer-form.types";
import { Input } from "@/ui-library/input/input";
import ConnectService from "@/ui-library/connect-service/connect-service";

export const PersonalInfoMusicProducerForm: FC = () => {
  const formik = useFormikContext<IndividualMusicProducerFormValues>();

  return (
    <form>
      <Box
        sx={{ padding: "32px 83px" }}
        id="personal-info-music-producer-container"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginBottom: "8px" }}>
            <Input
              id="personalInfo.fullLegalName"
              name="personalInfo.fullLegalName"
              onBlur={formik.handleBlur}
              error={
                !!formik.errors.personalInfo?.fullLegalName &&
                formik.touched.personalInfo?.fullLegalName
              }
              helperText={
                formik.touched.personalInfo?.fullLegalName &&
                formik.errors.personalInfo?.fullLegalName
              }
              value={formik.values.personalInfo.fullLegalName}
              onChange={formik.handleChange}
              label="Full legal name"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "32px" }}>
            <Input
              id="personalInfo.artistName"
              name="personalInfo.artistName"
              onBlur={formik.handleBlur}
              value={formik.values.personalInfo.artistName}
              onChange={formik.handleChange}
              label="Artist / stage name"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "8px" }}>
            {socialMedia.map((media, ind) => (
              <Box
                key={ind}
                sx={
                  ind !== socialMedia.length
                    ? { marginBottom: "24px" }
                    : { marginBottom: "0px" }
                }
              >
                <ConnectService
                  isConnected={media.isConnected}
                  serviceIcon={media.icon}
                  serviceName={media.name}
                  handleConnect={() => null}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default PersonalInfoMusicProducerForm;
