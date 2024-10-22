import React from "react";
import AccessControl from "../../../components/Layout/AccessControl";

const role = ["admin", "super-admin"];
const requiredRoles = ["admin", "super-admin"];

const Admin = () => {
  return (
    <AccessControl requiredRoles={requiredRoles} role={role} type="page">
      {<Admin />}
    </AccessControl>
  );
};

export default Admin;
