import { CountryType } from "@/ui-library/country-autocomplete";
import { ICity, IState } from "country-state-city";

export interface CatalogOwnerFormValues {
  role: "sync-buyer" | "individual-music-producer" | "catalog-owner";
  businessInfo: {
    companyName: string;
    companyUrl: string;
    businessType: string;
    businessTypeOther: string;
  };
  contactInfo: {
    contactName: string;
    email: string;
    role: string;
    phone: string;
    country: CountryType;
    address: string;
    city: ICity | null;
    state: IState | null;
    postalCode: string;
  };
  catalogInfo: {
    numberOfTracks: string;
    numberOfUniqueArtists: string;
    primaryGenres: Array<string>;
    primaryGenreOther: string;
    artistsAgreements: boolean;
    artistsAgreementsOther: string;
    exclusiveRightsHolder: boolean;
    exclusiveContentPercentage: number;
  };
  licensingClearingRights: {
    musicOwnershipRights: boolean;
    musicOwnershipRightsOther: string;
    trackContentAnalysis: boolean;
    trackRightsVerification: boolean;
    trackRightsVerificationOther: string;
    trackIdentificationCodes: boolean;
  };
  distributionMetadata: {
    catalogMetadataManagement: string;
    catalogMetadataManagementOther: string;
    thirdPartyDistributor: string;
  };
}
