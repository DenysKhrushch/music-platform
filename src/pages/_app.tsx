import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Amplify } from "aws-amplify";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import "../styles/globals.css";

import theme from "../ui-library/theme";
import Layout from "../layout/layout";
import awsconfig from "../aws-exports";
import { AppProvider } from "@/context/AppContext";
import { ProfileProvider } from "@/context/ProfileContext";
import DeclinePasswordResetDialog from "@/components/decline-password-reset-dialog";
import styled from "@emotion/styled";
import { SnackbarContent } from "@mui/material";
import { SubscriptionInfoDialog } from "@/components/subscription-info-dialog/subscription-info-dialog";
import { PlayerProvider } from "@/context/PlayerContext";
import SpinnerOverlay from "@/ui-library/spinner-overlay/spinner-overlay";
import UnlinkAccountDialog from "@/components/unlink-account-dialog/dialog";

const MessageSnackbar = styled(SnackbarContent)`
  background-color: #2e3133;
`;

const ErrorSnackbar = styled(SnackbarContent)`
  background-color: ${theme.palette.error.main};
  color: #1a1c1e;
`;

Amplify.configure(awsconfig);

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return (
    <SnackbarProvider
      Components={{
        success: MessageSnackbar,
        error: ErrorSnackbar,
      }}
    >
      <AppProvider>
        <ThemeProvider theme={theme}>
          <PlayerProvider>
            <ProfileProvider>
              <Layout>
                <Component {...pageProps} />
                <DeclinePasswordResetDialog />
                <SubscriptionInfoDialog />
                <UnlinkAccountDialog />
                <SpinnerOverlay open={loading} />
              </Layout>
            </ProfileProvider>
          </PlayerProvider>
        </ThemeProvider>
      </AppProvider>
    </SnackbarProvider>
  );
}

export default App;
