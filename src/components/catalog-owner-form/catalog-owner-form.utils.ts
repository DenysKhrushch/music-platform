import { CatalogOwnerFormValues } from "./catalog-owner-form.types";

export const initialValues: CatalogOwnerFormValues = {
  role: "individual-music-producer",
  businessInfo: {
    companyName: "",
    companyUrl: "",
    businessType: "",
    businessTypeOther: "",
  },
  contactInfo: {
    contactName: "",
    email: "email@gmail.com",
    role: "",
    phone: "",
    country: {
      code: "US",
      label: "United States",
      phone: "1",
      suggested: true,
    },
    address: "",
    city: null,
    state: null,
    postalCode: "",
  },
  catalogInfo: {
    numberOfTracks: "",
    numberOfUniqueArtists: "",
    primaryGenres: [],
    primaryGenreOther: "",
    artistsAgreements: false,
    artistsAgreementsOther: "",
    exclusiveRightsHolder: false,
    exclusiveContentPercentage: 0,
  },
  licensingClearingRights: {
    musicOwnershipRights: true,
    musicOwnershipRightsOther: "",
    trackContentAnalysis: false,
    trackRightsVerification: true,
    trackRightsVerificationOther: "",
    trackIdentificationCodes: true,
  },
  distributionMetadata: {
    catalogMetadataManagement: "in house/self-managed",
    catalogMetadataManagementOther: "",
    thirdPartyDistributor: "",
  },
};

export const validate = (values: CatalogOwnerFormValues) => {
  const errors: any = {};

  if (!values.role) {
    errors.role = "Required field";
  }

  //Business info

  if (!values.businessInfo || !values.businessInfo.companyName) {
    errors.businessInfo = {
      ...errors.businessInfo || {},
      companyName: "Required field",
    };
  }
  if (!values.businessInfo || !values.businessInfo.companyUrl) {
    errors.businessInfo = {
      ...errors.businessInfo || {},
      companyUrl: "Required field",
    };
  }
  if (!values.businessInfo || !values.businessInfo.businessType) {
    errors.businessInfo = {
      ...errors.businessInfo || {},
      businessType: "Required field",
    };
  }

  // Contact info

  if (!values.contactInfo || !values.contactInfo.contactName) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      contactName: "Required field",
    };
  }
  if (!values.contactInfo || !values.contactInfo.role) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      role: "Required field",
    };
  }
  if (!values.contactInfo || !values.contactInfo.email) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      email: "Required field",
    };
  }
  if (!values.contactInfo || !values.contactInfo.phone) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      phone: "Required field",
    };
  }
  if (!values.contactInfo || !values.contactInfo.country) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      country: "Required field",
    };
  }
  if (!values.contactInfo || !values.contactInfo.address) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      address: "Required field",
    };
  }
  if (!values.contactInfo || !values.contactInfo.city) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      city: "Required field",
    };
  }
  if (!values.contactInfo || !values.contactInfo.state) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      state: "Required field",
    };
  }
  if (!values.contactInfo || !values.contactInfo.postalCode) {
    errors.contactInfo = {
      ...errors.contactInfo || {},
      postalCode: "Required field",
    };
  }

  // Catalog information

  if (!values.catalogInfo || !values.catalogInfo.numberOfTracks) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      numberOfTracks: "Required field",
    };
  }
  if (!values.catalogInfo || !values.catalogInfo.numberOfUniqueArtists) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      numberOfUniqueArtists: "Required field",
    };
  }

  if (!values.catalogInfo || values.catalogInfo.primaryGenres.length < 3) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      primaryGenres: "Required field",
    };
  }
  if (
    !values.catalogInfo ||
    values.catalogInfo.primaryGenres.includes("other") &&
      !values.catalogInfo.primaryGenreOther
  ) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      primaryGenreOther: "Required field",
    };
  }
  if (
    !values.catalogInfo ||
    !values.catalogInfo.artistsAgreements &&
      !values.catalogInfo.artistsAgreementsOther
  ) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      artistsAgreementsOther: "Required field",
    };
  }
  if (
    !values.catalogInfo ||
    values.catalogInfo.exclusiveRightsHolder &&
      !values.catalogInfo.exclusiveContentPercentage
  ) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      exclusiveContentPercentage: "Required field",
    };
  }

  // Licensing and Clearing Rights

  if (
    !values.licensingClearingRights ||
    !values.licensingClearingRights.musicOwnershipRights &&
      !values.licensingClearingRights.musicOwnershipRightsOther
  ) {
    errors.licensingClearingRights = {
      ...errors.licensingClearingRights || {},
      musicOwnershipRightsOther: "Required field",
    };
  }
  if (
    !values.licensingClearingRights ||
    values.licensingClearingRights.trackContentAnalysis &&
      !values.licensingClearingRights.trackRightsVerification &&
      !values.licensingClearingRights.trackRightsVerificationOther
  ) {
    errors.licensingClearingRights = {
      ...errors.licensingClearingRights || {},
      trackRightsVerificationOther: "Required field",
    };
  }

  // Distribution & Metadata

  if (
    !values.distributionMetadata ||
    values.distributionMetadata.catalogMetadataManagement === "other" &&
      !values.distributionMetadata.catalogMetadataManagementOther
  ) {
    errors.distributionMetadata = {
      ...errors.distributionMetadata || {},
      catalogMetadataManagementOther: "Required field",
    };
  }

  return errors;
};
