import { useFormik } from "formik";
import { Box, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { initialValues, validate } from "./password-reset-second-step.utils";
import React, { ChangeEvent, FC, useState } from "react";
import { setColor } from "./password-reset-second-step.styles";
import theme from "@/ui-library/theme";
import { Input } from "@/ui-library/input";
import PasswordInput from "@/ui-library/password-input/password-input";
import { PasswordSection } from "@/ui-library/password-section";
import Button from "@/ui-library/button/button";

export interface SignUpFormProps {
  onSubmit: (secretCode: string, password: string) => void;
  email: string;
  handleSendNewSecretCode: () => void;
}

export const PasswordResetSecondStep: FC<SignUpFormProps> = (props) => {
  const { onSubmit, email, handleSendNewSecretCode } = props;
  const [sentCode, setSentCode] = useState(false);
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
      onSubmit(values.secretCode, values.password);
    },
  });
  const handleDisableSendSecretCode = () => {
    const timer = setTimeout(() => {
      setSentCode(false);
    }, 30000);
    return () => clearTimeout(timer);
  };

  const handleResendCode = () => {
    handleDisableSendSecretCode();

    handleSendNewSecretCode();
    setSentCode(true);
  };

  const handlePasswordOnchange = (
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
    >
      <Box>
        <Typography
          variant="h1"
          sx={{ color: theme.palette.primary.light, marginBottom: "8px" }}
        >
          Reset password
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.customColors.neutral.neutral80 }}
        >
          We sent a secret 6-dight code to:
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.primary.light, marginBottom: "16px" }}
        >
          {email}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.primary.light, marginBottom: "16px" }}
        >
          To reset password, please enter the code from your email.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            id="secretCode"
            name="secretCode"
            autoComplete="new-password"
            onBlur={formik.handleBlur}
            value={formik.values.secretCode}
            onChange={formik.handleChange}
            error={Boolean(
              formik.errors.secretCode && formik.touched.secretCode
            )}
            helperText={formik.touched.secretCode && formik.errors.secretCode}
            label="Enter secret code"
          />
          <Typography
            onClick={handleResendCode}
            sx={{
              color: sentCode
                ? theme.customColors.neutral.neutral80
                : theme.palette.primary.main,
              fontSize: "12px",
              textAlign: "right",
              cursor: "pointer",
            }}
          >
            {sentCode ? "Code sent" : "Get new code"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            id="password"
            name="password"
            autoComplete="new-password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={!!formik.errors.password && formik.touched.password}
            onChange={handlePasswordOnchange}
            label="Create password"
          />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "8px" }}>
          <PasswordSection passwordReqs={passwordReqs} />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            type="submit"
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
