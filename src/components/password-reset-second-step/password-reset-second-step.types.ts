export interface ResetPasswordFormErrors {
  secretCode?: string;
  password?: string;
}

export interface ResetPasswordFormValues {
  secretCode: string;
  password: string;
}
