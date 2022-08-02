// lib
import { Navigate, Outlet } from "react-router-dom";

// src
import { getCurrentUser } from "../../utils/helperFunctions";

const RouteRequiresLogin = () => {
  const user = getCurrentUser();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default RouteRequiresLogin;
