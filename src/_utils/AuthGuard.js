import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from '@/_utils/UserAuthContext';
const AuthGuard = ({ children }) => {
  const { user } = useUserAuth();

  //console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

 
export default AuthGuard;
