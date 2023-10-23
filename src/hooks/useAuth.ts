import { Auth } from "aws-amplify";
import { useContext } from "react";

import { AppContextType } from "next/dist/shared/lib/utils";
import { UserAttributes } from "@/types/user-attributes";
import { AppContext } from "../context";
import { CountryType } from "@/ui-library/country-autocomplete";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { context, dispatch } = useContext(AppContext);

  const router = useRouter();

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const user = await Auth.signIn({
      username: email,
      password: password,
    });

    dispatch((state: AppContextType) => ({ ...state, user: user }));
  };

  const signUp = async ({
    email,
    password,
    name,
    country,
  }: {
    email: string;
    name: string;
    password: string;
    country: CountryType;
  }) => {
    const { user } = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email,
        name,
        "custom:country": country.code,
      },
    });

    return user;
  };

  const resendConfirmationLink = async (callback: () => void) => {
    const username = context?.user.getUsername();
    try {
      await Auth.resendSignUp(username);
      callback();
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch (error) {
      console.log("error getting user: ", error);
    }
  };

  const resetPassword = async (oldPassword: string, newPassword: string) => {
    const user = await Auth.currentAuthenticatedUser();

    await Auth.signIn(user.username, oldPassword);
    await Auth.changePassword(user, oldPassword, newPassword);
  };

  const forgotPasswordGetSecretCode = async (email: string) => {
    return Auth.forgotPassword(email);
  };

  const forgotPasswordChange = async (
    email: string,
    secretCode: string,
    newPassword: string
  ) => {
    return Auth.forgotPasswordSubmit(email, secretCode, newPassword);
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      router.push("/sign-in");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  const confirmSignUp = async (username: string, code: string) => {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  const refreshSession = async () => {
    Auth.currentSession()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const updateUserAttributes = async (attributes: UserAttributes) => {
    const user = await Auth.currentAuthenticatedUser();

    await Auth.updateUserAttributes(user, attributes);
  };

  return {
    signIn,
    signUp,
    resendConfirmationLink,
    getUser,
    signOut,
    resetPassword,
    refreshSession,
    updateUserAttributes,
    forgotPasswordGetSecretCode,
    forgotPasswordChange,
    confirmSignUp,
  };
};
