import { CountryType } from "@/ui-library/country-autocomplete";

export interface SignUpFormErrors {
  country?: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface SignUpFormValues {
  country: CountryType;
  name: string;
  email: string;
  password: string;
}
