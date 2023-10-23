export interface SignInFormErrors {
    email?: string;
    password?: string;
  }
  export interface SignInFormValues {
    email: string;
    password: string;
  }
  export interface RadioOption {
    label: string;
    value: string | boolean;
    subText?: string;
  }