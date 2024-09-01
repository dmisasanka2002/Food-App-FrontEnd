import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLogged, setIsLogged] = useState(false);
  const [isdisplayLogging, setIsDisplaySignIn] = useState(false);

  const values = {
    isLogged,
    setIsLogged,
    isdisplayLogging,
    setIsDisplaySignIn,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
