import { Navigate, Outlet } from "react-router-dom";
import { isAuth, isAuthEmployee } from "../helper";
import { routes, routes_employee } from "../urls.js";

const AuthAdmin = () => {
  const isAuthenticated = isAuth();

  if (isAuthenticated) {
    return <Outlet />;
  }else {
    return <Navigate to={routes.login_route} />;
  }
};

export default AuthAdmin;
