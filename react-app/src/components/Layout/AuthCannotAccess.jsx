import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

const AuthCannotAccess = (props) => {
  //const children = props.children;
  const { children } = props;
  //   const { user } = useAuth();
  const auth = useAuth();
  const user = auth.user;
  if (user) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default AuthCannotAccess;
