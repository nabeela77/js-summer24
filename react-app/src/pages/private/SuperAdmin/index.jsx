import React from "react";
import AccessControl from "../../../components/Layout/AccessControl";

const requiredRoles = ["admin", "super-admin"];
const role = "super-admin";

const SuperAdmin = () => {
  return (
    <AccessControl requiredRoles={requiredRoles} role={role} type="page">
      {<SuperAdmin />}
    </AccessControl>
  );
};

export default SuperAdmin;
