import React from "react";
import {
  ManageMetadataCatalogIcon,
  DistributePublishingPromoteIcon,
  MusicPublishingIcon,
  SearchByKeywordsIcon,
  SoundMasteringIcon,
  SearchByAudioIcon,
  RecommendedSongsIcon,
  MusicDiscoveryIcon,
  LicensingVariabilityIcon,
  IaMultifunctionalSearchIcon,
  ContentManagementIcon,
  VisualizeTracksIcon,
  CleanKeywordsIcon,
} from "@/ui-icons";

const features = [
  {
    icon: <MusicDiscoveryIcon />,
    title: "Music Discovery",
    description:
      "We use algorithms to suggest new songs, artists, and playlists based on your preferences and listening history.",
    role: "general",
  },
  {
    icon: <IaMultifunctionalSearchIcon />,
    title: "IA Multifunctional Search",
    description:
      "Easy search for various music-related content, such as songs, albums, and playlists, with fast and precise results.",
    role: "general",
  },
  {
    icon: <ContentManagementIcon />,
    title: "Content Management",
    description:
      "Organize and manage music-related data and images with the ability to teamwork.",
    role: "general",
  },
  {
    icon: <LicensingVariabilityIcon />,
    title: "Licensing Variability",
    description:
      "We provide flexible licenses for each track with just a few clicks.",
    role: "general",
  },
  {
    icon: <SearchByAudioIcon />,
    title: "Search by Audio",
    description:
      "Find similar songs in your catalog using our audio-based Similarity Search. Cyanite AI compares acoustic features to identify perfect matches.",
    role: "sync-buyer",
  },
  {
    icon: <SearchByKeywordsIcon />,
    title: "Search by Keywords",
    description:
      "Filter 1,500 keywords to find best matches for sync briefs and branding projects. Improve music search for faster and intuitive user experience.",
    role: "sync-buyer",
  },
  {
    icon: <RecommendedSongsIcon />,
    title: "Recommended Songs",
    description:
      "Personalize each listener’s music experience. Our AI accounts for sound factors as well as personal preference to deliver targeted song recommendations.",
    role: "sync-buyer",
  },
  {
    icon: <DistributePublishingPromoteIcon />,
    title: "Distribute, Publish and Promote",
    description:
      "We deliver to all major digital storefronts and unlike other music distribution services - we won't take a cut. That means you keep 100% of your sales royalties.",
    role: "individual-music-producer",
  },
  {
    icon: <MusicPublishingIcon />,
    title: "Music Publishing",
    description:
      "Register your songs with our Music Publishing service and we'll collect ALL the royalties you are owed, including those your PRO does not.",
    role: "individual-music-producer",
  },
  {
    icon: <SoundMasteringIcon />,
    title: "Sound Mastering",
    description:
      "Sound awesome in an instant with online mastering. Get access to our AI-driven mastering suite to enhance and perfect your tracks ensuring that they are release-ready.",
    role: "individual-music-producer",
  },
  {
    icon: <VisualizeTracksIcon />,
    title: "Visualize your tracks",
    description:
      "Compare songs at a glance with data-driven graphical interfaces. Use data and visual representations to help listeners find what they’re looking for quickly and easily.",
    role: "catalog-owner",
  },
  {
    icon: <CleanKeywordsIcon />,
    title: "Clean your keywords",
    description:
      "Our unique Keyword Cleaning detects odd keyword combinations and erases tagging mistakes to boost searchability of your catalog.",
    role: "catalog-owner",
  },
  {
    icon: <ManageMetadataCatalogIcon />,
    title: "Manage your metadata & catalog",
    description:
      "Metadata can be as important as the music when it comes to securing sync opportunities. Keep yourself and your files organized with the best metadata management tool.",
    role: "catalog-owner",
  },
];

export default features;
