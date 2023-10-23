import React, { FC, useEffect } from "react";

import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import theme from "@/ui-library/theme";
import { Button } from "@/ui-library/button";
import { useAuth } from "@/hooks/useAuth";

const OnboardingCompletedPage: FC = () => {
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

  return (
    <Box sx={{ marginLeft: "142px", marginRight: "142px" }}>
      <Typography variant="h1" sx={{ marginBottom: "16px" }}>
        Congratulations!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "16px",
          color: theme.customColors.neutral.neutral80,
        }}
      >
        Our team will review the information and contact you with the next steps
        for uploading your catalog to Songistry.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "32px",
          color: theme.customColors.neutral.neutral80,
        }}
      >
        Thank you for choosing Songistry, and we look forward to working with
        you!
      </Typography>
      <Box>
        <Button
          variant="contained"
          fullWidth
          onClick={() => router.push(`/profile?role=${role}`)}
          startIcon={
            <ArrowBackIcon
              sx={{ color: theme.customColors.neutral.neutral20 }}
            />
          }
        >
          <Typography
            variant="h6"
            sx={{ color: theme.customColors.neutral.neutral20 }}
          >
            Back to main page
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default OnboardingCompletedPage;
