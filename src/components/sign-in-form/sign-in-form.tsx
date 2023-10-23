import React from "react";
import { ChangeEvent, FC, useState } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useFormik } from "formik";

import { initialValues, validate } from "./sign-in-form.utils";
import {
  setColor,
  StyledLinkChangeLogin,
  StyledTypographyChangeLogin,
} from "./sign-in-form.styles";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import theme from "@/ui-library/theme";
import { Input } from "@/ui-library/input";
import { enqueueSnackbar } from "notistack";

import { PasswordInput } from "@/ui-library/password-input";
import { Button } from "@/ui-library/button";

export const SignInForm: FC = () => {
  const { signIn } = useAuth();
  const router = useRouter();

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
      signIn(values)
        .then(() => router.push("welcome"))
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
      length: e.target.value.length > 8,
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
      autoComplete="new-password"
    >
      <Box>
        <Typography
          variant="h1"
          sx={{ color: theme.palette.primary.light, marginBottom: "32px" }}
        >
          Welcome back!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            onBlur={formik.handleBlur}
            error={!!formik.errors.email && formik.touched.email}
            helperText={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Your email"
          />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "8px" }}>
          <PasswordInput
            id="password"
            name="password"
            autoComplete="off"
            showForgotPassword
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={!!formik.errors.password && formik.touched.password}
            helpText={formik.touched.password && formik.errors.password}
            onChange={handlePasswordOnChange}
            label="Your password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            startIcon={
              <ExitToAppIcon sx={setColor(formik.isValid && formik.dirty)} />
            }
          >
            <Typography
              variant="h6"
              sx={setColor(formik.isValid && formik.dirty)}
            >
              Login
            </Typography>
          </Button>
        </Grid>
        <Typography variant="h6" sx={StyledTypographyChangeLogin}>
          Don’t have an account?
          <Link href="/sign-up" sx={StyledLinkChangeLogin}>
            &nbsp;Create
          </Link>
        </Typography>
      </Grid>
    </form>
  );
};

export default SignInForm;
