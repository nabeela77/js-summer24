import React from "react";
import { Navigate } from "react-router-dom";

// role: "student", "teacher", "admin", "super-admin"
// requiredRoles: ["admin", "super-admin"]

function checkAccess(role, requiredRoles) {
  if (!requiredRoles) return true;
  if (!role) return false;
  return requiredRoles.includes(role);
}
const AccessControl = (props) => {
  const { role, requiredRoles, isPage, children } = props;

  const hasAccess = checkAccess(role, requiredRoles);

  if (!hasAccess && isPage)
    //if doesnt have access and isPage is true
    return <Navigate to={"/unauthorized"} replace />; //replace is boolean, same as props.replace, replaces history stack
  if (!hasAccess) return null; // if isPage is false it would return undefined

  return children; // children can be page or component
};

export default AccessControl;

// we use {} to pass any kind of objects(pre-defined) in jsx, only direct string can be passed without{}
// or just use {} everytime

// only react compoents takes props as parameter
// approches : can pass on more parameters for components
// children is the component being wrapped around we dont pass children as props explicitly.
// children is  the component eing wrapped around, we do not pass children as props explicitly.

// we wrap child around the parent component {<parent>{<child/>}</parent>} to pass children attributes from parents to child

// we can access child component from parent component by using props
// console.log(props.children);
