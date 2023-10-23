import React from "react";
import KeyIcon from "@mui/icons-material/Key";
import { useFormik } from "formik";
import { Box, Grid, Typography } from "@mui/material";
import { initialValues, validate } from "./password-reset-first-step.utils";
import { setColor } from "./password-reset-first-step.styles";
import { FC } from "react";
import theme from "@/ui-library/theme";
import { Input } from "@/ui-library/input";
import { Button } from "@/ui-library/button";

export interface ResetPasswordFirstStepFormProps {
  onSubmit: (email: string) => void;
}

export const PasswordResetFirstStep: FC<ResetPasswordFirstStepFormProps> = ({
  onSubmit,
}) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      onSubmit(values.email);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        maxWidth: "448px",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{ color: theme.palette.primary.light, marginBottom: "24px" }}
        >
          Forgot password?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.primary.light, marginBottom: "32px" }}
        >
          Enter your Songistry email address and we`ll send you a code to reset
          your password.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            error={!!formik.errors.email && formik.touched.email}
            helperText={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Your email"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={!(formik.isValid && formik.dirty)}
            startIcon={
              <KeyIcon
                sx={{
                  ...setColor(formik.isValid && formik.dirty),
                  rotate: "45deg",
                }}
              />
            }
          >
            <Typography
              variant="h6"
              sx={{ ...setColor(formik.isValid && formik.dirty) }}
            >
              Send code
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
