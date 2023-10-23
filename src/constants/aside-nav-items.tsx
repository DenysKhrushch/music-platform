import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import RestoreIcon from "@mui/icons-material/Restore";
import DownloadIcon from "@mui/icons-material/Download";
import PaymentsIcon from "@mui/icons-material/Payments";
import ContactsIcon from "@mui/icons-material/Contacts";

export const asideNavItems = [
  {
    title: "Profile",
    icon: <PersonOutlineIcon />,
    route: "/profile",
  },
  {
    title: "Playlists",
    icon: <PlaylistPlayIcon />,
    route: "/playlists",
  },
  { title: "History", icon: <RestoreIcon />, route: "/history" },
  { title: "Downloads", icon: <DownloadIcon />, route: "/downloads" },
  {
    title: "Payments and Licences",
    icon: <PaymentsIcon />,
    route: "/payments-and-licences",
  },
  { title: "Contacts", icon: <ContactsIcon />, route: "/contacts" },
];
