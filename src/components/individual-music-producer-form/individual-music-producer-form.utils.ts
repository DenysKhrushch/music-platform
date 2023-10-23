import { IndividualMusicProducerFormValues } from "./individual-music-producer-form.types";

export const initialValues: IndividualMusicProducerFormValues = {
  role: "individual-music-producer",
  personalInfo: {
    fullLegalName: "",
    artistName: "",
    socialMediaLinks: [],
  },
  contactInfo: {
    email: "email@gmail.com",
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
    genre: "",
    primaryGenres: [],
    primaryGenreOther: "",
    artistRelationships: false,
    artistRelationshipsOther: "",
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
  },
  experienceGoals: {
    experience: true,
    howHearAboutUs: "search engines",
    yourGoal: "sync opportunities",
    newsletters: true,
    opportunities: true,
  },
};

export const validate = (values: IndividualMusicProducerFormValues) => {
  const errors: any = {};

  if (!values.role) {
    errors.role = "Required field";
  }

  //Personal info

  if (!values.personalInfo || !values.personalInfo.fullLegalName) {
    errors.personalInfo = {
      ...errors.personalInfo || {},
      fullLegalName: "Required field",
    };
  }

  // Contact info

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

  if (!values.catalogInfo || !values.catalogInfo.genre) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      genre: "Required field",
    };
  }

  // Catalog information

  if (!values.catalogInfo || !values.catalogInfo.numberOfTracks) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      numberOfTracks: "Required field",
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
    values.catalogInfo.primaryGenres.includes("other") && !values.catalogInfo.primaryGenreOther
  ) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      primaryGenreOther: "Required field",
    };
  }
  if (!values.catalogInfo || values.catalogInfo.artistRelationships && !values.catalogInfo.artistRelationshipsOther) {
    errors.catalogInfo = {
      ...errors.catalogInfo || {},
      artistRelationshipsOther: "Required field",
    };
  }

  // Licensing and Clearing Rights

  if (
    !values.licensingClearingRights ||
    !values.licensingClearingRights.musicOwnershipRights && !values.licensingClearingRights.musicOwnershipRightsOther
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

  // Your experience & goals

  if (!values.experienceGoals || !values.experienceGoals.howHearAboutUs) {
    errors.experienceGoals = {
      ...errors.experienceGoals || {},
      howHearAboutUs: "Required field",
    };
  }

  if (!values.experienceGoals || !values.experienceGoals.yourGoal) {
    errors.experienceGoals = {
      ...errors.experienceGoals || {},
      yourGoal: "Required field",
    };
  }

  return errors;
};
