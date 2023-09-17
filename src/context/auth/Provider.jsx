/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { UserContext } from "./context";

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const providerValue = useMemo(
    () => ({ isLoggedIn, logIn, logOut }),
    [isLoggedIn]
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
