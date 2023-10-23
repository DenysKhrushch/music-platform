import React, { ChangeEvent, useContext, useState } from "react";
import { Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useFormik } from "formik";

import { useAuth } from "@/hooks/useAuth";
import { ProfileContext } from "@/context";
import { PasswordInput } from "@/ui-library/password-input";
import { PasswordSection } from "@/ui-library/password-section";
import { Button } from "@/ui-library/button";

import { initialValues, validate } from "./profile-password-reset-form.utils";
import { setColor } from "./profile-password-reset-form.styles";
import { enqueueSnackbar } from "notistack";

export const ProfilePasswordResetForm = () => {
  const { resetPassword } = useAuth();

  const { setIsPasswordChanging } = useContext(ProfileContext);

  const initialReqsValues = {
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specChar: false,
  };

  const [passwordReqs, setPasswordReqs] = useState(initialReqsValues);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) =>
      resetPassword(values.oldPassword, values.newPassword)
        .then(() => setIsPasswordChanging(false))
        .catch((error) => {
          const variant = "error";
          enqueueSnackbar(`${error}`, { variant });
          formik.resetForm();
          setPasswordReqs(initialReqsValues);
        }),
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

    formik.setFieldValue("newPassword", e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: "507px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PasswordInput
            id="oldPassword"
            name="oldPassword"
            autoComplete="new-password"
            onBlur={formik.handleBlur}
            error={!!formik.errors.oldPassword && formik.touched.oldPassword}
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            label="Current password"
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            id="newPassword"
            name="newPassword"
            autoComplete="new-password"
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            error={!!formik.errors.newPassword && formik.touched.newPassword}
            onChange={handlePasswordOnChange}
            label="Create password"
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            id="repeatNewPassword"
            name="repeatNewPassword"
            autoComplete="repeat-new-password"
            onBlur={formik.handleBlur}
            value={formik.values.repeatNewPassword}
            helperText={
              formik.touched.repeatNewPassword &&
              formik.errors.repeatNewPassword
            }
            error={
              !!formik.errors.repeatNewPassword &&
              formik.touched.repeatNewPassword
            }
            onChange={formik.handleChange}
            label="Repeat new password"
          />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "16px" }}>
          <PasswordSection passwordReqs={passwordReqs} />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            id="reset-password-button"
            disabled={!(formik.isValid && formik.dirty)}
            startIcon={
              <CheckCircleIcon sx={setColor(formik.isValid && formik.dirty)} />
            }
          >
            <Typography
              variant="h6"
              sx={setColor(formik.isValid && formik.dirty)}
            >
              Confirm
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfilePasswordResetForm;
