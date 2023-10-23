export interface SyncBuyerFormValues {
  role: "sync-buyer" | "individual-music-producer" | "catalog-owner";
  personalInfo: {
    fullName: string;
    email: string;
    businessType: string;
    describeBusinessType: null | string;
    primaryRole: string;
    describePrimaryRole: null | string;
  };
  additionalQuestions: {
    howHearAboutUs: string;
    newsletters: boolean;
    announcements: boolean;
    opportunities: boolean;
  };
}
