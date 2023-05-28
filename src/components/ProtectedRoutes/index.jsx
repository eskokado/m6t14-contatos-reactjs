import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { CustomerContext } from "../../contexts/CustomerContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(CustomerContext);
  const location = useLocation();

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};
