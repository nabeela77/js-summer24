import React from "react";
import { Navigate } from "react-router-dom";

// role : "student", "teacher", "admin", "super-admin"
// requiredRoles: ["admin", "super-admin"]

function hasAccess(requiredRoles, role) {
  if (!requiredRoles || requiredRoles.length === 0) {
    //required roles falsy means that their is no need for required role
    return true;
  }
  return requiredRoles.includes(role);
}
const AccessControl = (props) => {
  const requiredRoles = props.requiredRoles;
  const role = props.role;
  const children = props.children;
  const type = props.type;

  if (!hasAccess(requiredRoles, role)) {
    if (type === "page") {
      return <Navigate to="/unauthorized" replace />;
    } else {
      return null;
    }
  }

  return children;
};

export default AccessControl;
// only react compoents takes props as parameter
// approches : can pass on more parameters for components
