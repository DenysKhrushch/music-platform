import { TextFieldProps } from "@mui/material";

export type PasswordInputProps = TextFieldProps & {
  showForgotPassword?: boolean;
  helpText?: string | false | undefined;
  readOnly?: boolean;
};
