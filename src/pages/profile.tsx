import { Box } from "@mui/material";

import React, { FC, useContext, useEffect } from "react";
import ProfileHeader from "../components/profile-header/profile-header";
import ProfileTabs from "../components/profile-tabs/profile-tabs";
import { useRouter } from "next/router";
import { ProfileContext } from "@/context";

const Profile: FC = () => {
  const router = useRouter();
  const { setProfileRole } = useContext(ProfileContext);

  const { role } = router.query;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        !role ||
        role !== "sync-buyer" &&
          role !== "individual-music-producer" &&
          role !== "catalog-owner"
      ) {
        router.push("/welcome");
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [role, router]);

  useEffect(() => {
    if (role) {
      setProfileRole(role as string);
    }
  }, [role]);

  if (
    !role ||
    role !== "sync-buyer" &&
      role !== "individual-music-producer" &&
      role !== "catalog-owner"
  ) {
    return <>Loading...</>;
  }

  return (
    <Box>
      <ProfileHeader role={role} />
      <ProfileTabs />
    </Box>
  );
};

export default Profile;
