import React from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import { Input } from "../input";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorIcon from "@mui/icons-material/Error";
import { FC, useState } from "react";
import {
  inputHelperText,
  inputHelperTextContainer,
  inputPropsStyle,
} from "./password-input.styles";
import { PasswordInputProps } from "./password-input.types";
import theme from "../theme";

export const PasswordInput: FC<PasswordInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const { error, showForgotPassword, helpText, readOnly } = props;

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Input
        type={showPassword ? "text" : "password"}
        InputLabelProps={{
          style: {
            color: theme.palette.secondary.main,
          },
        }}
        InputProps={
          props.error
            ? {
                readOnly: readOnly,
                style: inputPropsStyle,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <ErrorIcon sx={{ color: theme.palette.error.main }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {
                readOnly: readOnly,
                style: inputPropsStyle,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      ) : (
                        <Visibility
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
        }
        {...props}
      />
      {showForgotPassword ? (
        <Box sx={inputHelperTextContainer}>
          {error ? (
            <Typography
              color={theme.palette.error.main}
              sx={{ marginLeft: "14px", ...inputHelperText }}
              id="password-helper-text"
            >
              {helpText}
            </Typography>
          ) : null}

          <Typography
            color={theme.palette.secondary.main}
            sx={{ marginLeft: "auto", ...inputHelperText }}
          >
            Forgot password?
            <Link
              href="/reset-password"
              sx={{
                fontWeight: 500,
                color: theme.palette.primary.main,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              &nbsp;Reset
            </Link>
          </Typography>
        </Box>
      ) : (
        <>
          {error ? (
            <Typography
              color={theme.palette.error.main}
              sx={{ marginLeft: "14px", ...inputHelperText }}
              id="password-helper-text"
            >
              {helpText}
            </Typography>
          ) : null}
        </>
      )}
    </Box>
  );
};

export default PasswordInput;
