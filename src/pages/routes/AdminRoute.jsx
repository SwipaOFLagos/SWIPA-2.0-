import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

import React from "react";

const AdminRoutes = () => {
  const { auth } = useAuth();

  return auth?.token !== 1 ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
