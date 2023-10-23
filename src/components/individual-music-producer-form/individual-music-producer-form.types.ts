import { CountryType } from "@/ui-library/country-autocomplete";
import { ICity, IState } from "country-state-city";

export interface IndividualMusicProducerFormValues {
  role: "sync-buyer" | "individual-music-producer" | "catalog-owner";
  personalInfo: {
    fullLegalName: string;
    artistName: string;
    socialMediaLinks: Array<string>;
  };
  contactInfo: {
    email: string;
    phone: string;
    country: CountryType;
    address: string;
    city: ICity | null;
    state: IState | null;
    postalCode: string;
  };
  catalogInfo: {
    numberOfTracks: string;
    primaryGenres: Array<string>;
    primaryGenreOther: string;
    artistRelationships: boolean;
    artistRelationshipsOther: string;
    genre: string;
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
  };
  experienceGoals: {
    experience: boolean;
    howHearAboutUs: string;
    yourGoal: string;
    newsletters: boolean;
    opportunities: boolean;
  };
}
