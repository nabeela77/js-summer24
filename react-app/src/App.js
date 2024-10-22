import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import PublicRoutes from "./components/Layout/PublicRoutes";
import Unauthorized from "./pages/Unauthorized";
import Login from "./pages/public/auth/Login";
import Register from "./pages/public/auth/Register";

import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Dashboard from "./pages/private/Dashboard";
import Admin from "./pages/private/Admin";
import SuperAdmin from "./pages/private/SuperAdmin";
import AuthCannotAccess from "./components/Layout/AuthCannotAccess";
import AccessControl from "./components/Layout/AccessControl";

const role = ["admin", "super-admin"];
const requiredRoles = ["admin", "super-admin"];
const superAdminRole = ["super-admin"];

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={
            <AuthCannotAccess>
              <Login />
            </AuthCannotAccess>
          }
        />
        <Route
          path="register"
          element={
            <AuthCannotAccess>
              <Register />
            </AuthCannotAccess>
          }
        />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/admin"
          element={
            <AccessControl
              requiredRoles={requiredRoles}
              role={role}
              type="page"
            >
              <Admin />
            </AccessControl>
          }
        />
        <Route
          path="/super-admin"
          element={
            <AccessControl
              requiredRoles={requiredRoles}
              role={superAdminRole}
              type="page"
            >
              <SuperAdmin />
            </AccessControl>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
