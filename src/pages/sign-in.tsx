import React from "react";
import SocialAuthMenu from "@/ui-library/social-auth-menu/social-auth-menu";
import SignInForm from "../components/sign-in-form/sign-in-form";

export default function SignInPage() {
  return (
    <>
      <SignInForm />
      <SocialAuthMenu />
    </>
  );
}
