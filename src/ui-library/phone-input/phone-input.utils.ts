import { CountryType } from "../country-autocomplete";

export const getCountryByCode = (
  countryCode: string,
  countries: readonly CountryType[]
) => countries.find((country) => country.code === countryCode);
