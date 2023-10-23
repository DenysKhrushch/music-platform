import React, { FC, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Header from "@/ui-library/header/header";
import SyncBuyerForm from "@/components/sync-buyer-form/sync-buyer-form";
import IndividualMusicProducerForm from "@/components/individual-music-producer-form/individual-music-producer-form";
import CatalogOwnerForm from "@/components/catalog-owner-form/catalog-owner-form";
import { layoutWrapper, styledSignWrapper } from "@/styles/styles";
import { useAuth } from "@/hooks/useAuth";

const OnboardingPage: FC = () => {
  const router = useRouter();
  const { role } = router.query;

  const { getUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInf = await getUser();

        if (!userInf) {
          router.replace("/sign-in");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        !role ||
        (role !== "sync-buyer" &&
          role !== "individual-music-producer" &&
          role !== "catalog-owner")
      ) {
        router.push("/welcome");
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [role, router]);

  return (
    <Box sx={layoutWrapper}>
      <Header />
      <Box sx={styledSignWrapper} className="app">
        {role === "sync-buyer" ? <SyncBuyerForm /> : null}
        {role === "individual-music-producer" ? (
          <IndividualMusicProducerForm />
        ) : null}
        {role === "catalog-owner" ? <CatalogOwnerForm /> : null}
      </Box>
    </Box>
  );
};

export default OnboardingPage;
