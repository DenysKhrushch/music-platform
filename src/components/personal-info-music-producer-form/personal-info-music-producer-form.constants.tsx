import React from "react";
import {
  AppleIcon,
  FacebookIcon,
  YoutubeIcon,
  SoundcloudIcon,
  TidalIcon,
  DeezerIcon,
  InstagramIcon,
  TwitterIcon,
  SpotifyIcon,
} from "@/ui-icons";
import TiktokIcon from "@/ui-icons/tiktok-icon/tiktok-icon";

export const socialMedia = [
  {
    name: "Spotify",
    icon: <SpotifyIcon />,
    isConnected: true,
  },
  {
    name: "Apple Music",
    icon: <AppleIcon />,
    isConnected: true,
  },
  {
    name: "Youtube Music",
    icon: <YoutubeIcon />,
    isConnected: true,
  },
  {
    name: "Soundcloud",
    icon: <SoundcloudIcon />,
    isConnected: false,
  },
  {
    name: "Tidal",
    icon: <TidalIcon />,
    isConnected: false,
  },
  {
    name: "Deezer",
    icon: <DeezerIcon />,
    isConnected: false,
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    isConnected: false,
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    isConnected: false,
  },
  {
    name: "TikTok",
    icon: <TiktokIcon />,
    isConnected: false,
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    isConnected: false,
  },
];
