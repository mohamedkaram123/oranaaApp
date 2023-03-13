import { lazy } from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import ErrorConnection from "../HelperComponents/ErrorConnection.jsx";
import AuthAdmin from "../ProtectedRoutes/AuthAdmin.js";
import { routes } from "../urls.js";
import WishList from "../views/admin/WishList.js";

const FullLayout = lazy(() => import("../layouts/admin/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/admin/Starter.js"));

const Login = lazy(() => import("../views/admin/Login.js"));

const Admin = () => {

  return   (
        <Routes>
            <Route  element={<AuthAdmin />}>
              <Route exact path="/admin" element={<FullLayout />}>
                  <Route  path={routes.home_route}  element={<Starter />} />
                  <Route  path={routes.wishlist}  element={<WishList />} />
      
                  <Route  path={routes.error_route}  element={<ErrorConnection />} />

              </Route>

            </Route>
            <Route  path="/admin/login"  element={<Login />} />
       
          <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
  )
};

export default Admin;
