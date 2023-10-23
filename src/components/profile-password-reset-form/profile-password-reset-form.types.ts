export interface ProfileResetPasswordFormErrors {
  oldPassword?: string;
  newPassword?: string;
  repeatNewPassword?: string;
}

export interface ProfileResetPasswordFormValues {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}
