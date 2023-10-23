import React, { FC, ReactNode, useState } from "react";

interface ProfileContextProps {
  isPasswordChanging: boolean;
  setIsPasswordChanging: (v: boolean) => void;
  isPlanChanging: boolean;
  setIsPlanChanging: (v: boolean) => void;
  isUnlinkAccount: boolean;
  setIsUnlinkAccount: (v: boolean) => void;
  isDeclineConfirmed: boolean;
  setIsDeclineConfirmed: (v: boolean) => void;
  isSubscriptionInfoDialogShowed: boolean;
  setIsSubscriptionInfoDialogShowed: (v: boolean) => void;
  isDeclineDialogShowed: boolean;
  setIsDeclineDialogShowed: (v: boolean) => void;
  afterConfirmAction: (e?: any) => any;
  setAfterConfirmAction: (e: any) => void;
  profileTabValue: number;
  setProfileTabValue: (v: number) => void;
  isPrivate: boolean;
  setIsPrivate: (v: boolean) => void;
  profileRole: string;
  setProfileRole: (v: string) => void;
}
export const ProfileContext = React.createContext<ProfileContextProps>(
  {} as ProfileContextProps
);

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [profileTabValue, setProfileTabValue] = useState(0);
  const [profileRole, setProfileRole] = useState("sync-buyer");
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);
  const [isPlanChanging, setIsPlanChanging] = useState(false);
  const [isUnlinkAccount, setIsUnlinkAccount] = useState(false);
  const [isDeclineConfirmed, setIsDeclineConfirmed] = useState(false);
  const [isDeclineDialogShowed, setIsDeclineDialogShowed] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [afterConfirmAction, setAfterConfirmAction] = useState(
    () => () => null
  );
  const [isSubscriptionInfoDialogShowed, setIsSubscriptionInfoDialogShowed] =
    useState(false);

  return (
    <ProfileContext.Provider
      value={{
        isPasswordChanging,
        setIsPasswordChanging,
        isDeclineConfirmed,
        setIsDeclineConfirmed,
        isDeclineDialogShowed,
        profileRole,
        setProfileRole,
        setIsDeclineDialogShowed,
        isSubscriptionInfoDialogShowed,
        setIsSubscriptionInfoDialogShowed,
        afterConfirmAction,
        setAfterConfirmAction,
        profileTabValue,
        setProfileTabValue,
        isPrivate,
        setIsPrivate,
        isPlanChanging,
        setIsPlanChanging,
        isUnlinkAccount,
        setIsUnlinkAccount,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
