import React from "react";
import { Navigate } from "react-router-dom";

// role : "student", "teacher", "admin", "super-admin"
// requiredRoles: ["admin", "super-admin"]

const AccessControl = ({ requiredRoles, role, children }) => {
  const hasAccess = () => {
    if (!requiredRoles || requiredRoles.length === 0) {
      //required roles falsy means that their is no need for required role
      return true;
    }
    return requiredRoles.includes(role);
  };
  return hasAccess() ? children : <Navigate to="/unauthorized" replace />;
};

export default AccessControl;
