import React, { FC, ReactNode, useContext } from "react";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";

import features from "../constants/login-features";

import { styledSignWrapperSx, styledSignFormWrapperSx } from "./layout.styles";
import ProtectedLayout from "./protected-layout/protected-layout";
import { AppContext } from "../context";
import Header from "@/ui-library/header/header";
import LoginRightPanel from "@/ui-library/login-right-panel/login-right-panel";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const { context } = useContext(AppContext);

  const renderLayout = () => {
    if (
      pathname.includes("sign-up") ||
      pathname.includes("sign-in") ||
      pathname.includes("verified") ||
      pathname.includes("onboarding-completed") ||
      pathname.includes("welcome")
    ) {
      return (
        <Box>
          <Header />
          <Box sx={styledSignWrapperSx}>
            <Box sx={styledSignFormWrapperSx}>{children}</Box>
            <LoginRightPanel features={features} role={context.role as any} />
          </Box>
        </Box>
      );
    } else {
      return <>{children}</>;
    }
  };

  if (pathname.includes("profile")) {
    return <ProtectedLayout>{children}</ProtectedLayout>;
  }

  return renderLayout();
};

export default Layout;
