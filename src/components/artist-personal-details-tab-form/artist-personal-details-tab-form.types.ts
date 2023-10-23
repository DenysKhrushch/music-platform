import { CountryType } from "@/ui-library/country-autocomplete";
import { ICity, IState } from "country-state-city";
export interface ArtistPersonalDetailsFormValues {
  password: string;
  contactName: string;
  email: string;
  role: string;
  phone: string;
  country: CountryType;
  address: string;
  primaryRole: string;
  describePrimaryRole: null | string;
  city: ICity | null;
  state: IState | null;
}
export interface ArtistPersonalDetailsFormErrors {
  secretCode?: string;
  password?: string;
  email?: string;
}
