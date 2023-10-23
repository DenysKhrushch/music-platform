import React, { FC, ReactNode, useState } from "react";
import { CognitoUser } from "@aws-amplify/auth";

interface AppContextType {
  context: {
    user: CognitoUser;
    role: string;
  };
  dispatch: (state: any) => void;
}
export const AppContext = React.createContext({} as AppContextType);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [context, dispatch] = useState({
    user: {} as CognitoUser,
    role: "general",
    // Initial state values go here
  });

  return (
    <AppContext.Provider value={{ context, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
