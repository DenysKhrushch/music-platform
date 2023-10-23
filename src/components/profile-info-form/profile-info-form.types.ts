import { CountryType } from "@/ui-library/country-autocomplete";
import { ICity, IState } from "country-state-city";

export interface ProfileInfoFormValues {
  password: string;
  fullName: string;
  email: string;
  role: string;
  phone: string;
  country: CountryType;
  address: string;
  primaryRole: string;
  describePrimaryRole: null | string;
  city: ICity | null;
  state: IState | null;
  zipCode: string;
}
export interface ProfileInfoFormErrors {
  secretCode?: string;
  password?: string;
  email?: string;
  phone?: string;
  zipCode?: string;
}
