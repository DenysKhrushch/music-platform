import React from "react";
import { useFormik } from "formik";
import { Box, Grid, Link, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { initialValues, validate } from "./sign-up-form.utils";
import { ChangeEvent, FC, useContext, useState } from "react";
import { setColor } from "./sign-up-form.styles";
import {
  StyledLinkChangeLogin,
  StyledTypographyChangeLogin,
} from "../sign-in-form/sign-in-form.styles";

import {
  CountryAutocomplete,
  CountryType,
} from "@/ui-library/country-autocomplete";
import { useAuth } from "@/hooks/useAuth";
import theme from "@/ui-library/theme";
import { Input } from "@/ui-library/input";
import { PasswordInput } from "@/ui-library/password-input";
import { PasswordSection } from "@/ui-library/password-section";
import { Button } from "@/ui-library/button";
import { enqueueSnackbar } from "notistack";
import { AppContext } from "@/context";
import { AppContextType } from "next/dist/shared/lib/utils";

/* eslint-disable-next-line */
export interface SignUpFormProps {}

export const SignUpForm: FC<SignUpFormProps> = () => {
  const { signUp } = useAuth();
  const { dispatch } = useContext(AppContext);

  const [passwordReqs, setPasswordReqs] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specChar: false,
  });

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      signUp(values)
        .then((user) => {
          dispatch((state: AppContextType) => ({ ...state, user: user }));
        })
        .catch((error) => {
          const variant = "error";
          enqueueSnackbar(`${error}`, { variant });
        });
    },
  });

  const handlePasswordOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPasswordReqs({
      ...passwordReqs,
      length: e.target.value.length >= 8,
      number: /\d/.test(e.target.value),
      uppercase: /[A-Z]/.test(e.target.value),
      lowercase: /[a-z]/.test(e.target.value),
      specChar: /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(e.target.value),
    });

    formik.setFieldValue("password", e.target.value);
  };

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
          sx={{ color: theme.palette.primary.light, marginBottom: "8px" }}
        >
          Create a new account
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.primary.light, marginBottom: "32px" }}
        >
          Start a free account. No credit card needed.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CountryAutocomplete
            id="country"
            name="country"
            defaultValue={{
              code: "US",
              label: "United States",
              phone: "1",
              suggested: true,
            }}
            error={Boolean(formik.errors.country && formik.touched.country)}
            helperText={
              formik.touched.country &&
              (formik.errors.country as string | undefined)
            }
            value={formik.values.country}
            handleChange={(e: object, value: CountryType | null) =>
              formik.setFieldValue("country", value)
            }
            handleBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.name && formik.touched.name)}
            helperText={formik.touched.name && formik.errors.name}
            label="Your name"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="email"
            name="email"
            autoComplete="new-password"
            onBlur={formik.handleBlur}
            error={!!formik.errors.email && formik.touched.email}
            helperText={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Your email"
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            id="password"
            name="password"
            autoComplete="new-password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={!!formik.errors.password && formik.touched.password}
            onChange={handlePasswordOnChange}
            label="Create password"
          />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "8px" }}>
          <PasswordSection passwordReqs={passwordReqs} />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            startIcon={
              <AccountCircleIcon
                sx={setColor(formik.isValid && formik.dirty)}
              />
            }
          >
            <Typography
              variant="h6"
              sx={setColor(formik.isValid && formik.dirty)}
            >
              Create Account
            </Typography>
          </Button>
        </Grid>
        <Typography variant="h6" sx={StyledTypographyChangeLogin}>
          Already have an account?
          <Link href="/sign-in" sx={StyledLinkChangeLogin}>
            &nbsp;Login
          </Link>
        </Typography>
      </Grid>
    </form>
  );
};

export default SignUpForm;
