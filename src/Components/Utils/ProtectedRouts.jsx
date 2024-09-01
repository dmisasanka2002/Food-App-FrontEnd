import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

function ProtectedRouts() {
  const { isLogged, setIsDisplaySignIn } = useContext(AuthContext);

  return isLogged ? (
    <Outlet />
  ) : (
    setIsDisplaySignIn(true)
  ) /*<Navigate to="/login" />*/;
}

export default ProtectedRouts;
