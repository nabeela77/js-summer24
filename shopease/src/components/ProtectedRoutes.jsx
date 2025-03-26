import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [user, navigate]);

  return children;
};

export default ProtectedRoutes;
