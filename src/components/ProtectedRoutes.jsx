import { Navigate, Outlet } from "react-router-dom";
import { getUserIdFromStorage } from "../utils/api/user";

const ProtectedRoutes = () => {
  if (getUserIdFromStorage()) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
