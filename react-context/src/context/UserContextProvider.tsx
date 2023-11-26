// Update UserContextProvider.tsx
import React, { ReactNode, useState } from "react";
import UserContext from "./UserContext";
import User from "../types/User";
import UserContextType from './../types/UserContextType';

const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User); // Initialize with a default value

  const contextValue: UserContextType = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
