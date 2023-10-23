import React, { FC, useContext } from "react";

import { AppContext } from "../context";
import SignUpForm from "../components/sign-up-form/sign-up-form";
import SocialAuthMenu from "@/ui-library/social-auth-menu/social-auth-menu";
import AuthVerification from "../components/auth-verification/auth-verification";

const SignUpPage: FC = () => {
  const { context } = useContext(AppContext);

  return Object.keys(context.user).length === 0 ? (
    <>
      <SignUpForm />
      <SocialAuthMenu />
    </>
  ) : (
    <AuthVerification />
  );
};

export default SignUpPage;
