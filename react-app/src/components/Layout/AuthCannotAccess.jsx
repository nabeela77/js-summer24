import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PrivateNavbar from "./PrivateNavbar";
const AuthCannotAccess = () => {
  const { user } = useAuth();

  const isAuthenticated = user && user.id > 0 && user.accessToken;

  const handleLogin = (e) => {
    e.preventDefault();
  };
  //   const handleLoginR = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <div>
      {isAuthenticated ? "Login" : <PrivateNavbar onLoginClick={handleLogin} />}
    </div>
  );
};
export default AuthCannotAccess;
