import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../Layouts/DashboardLayout";
import AuthLayout from "../Layouts/AuthLayout";

import Dashboard from "../Pages/Dashboard/Dashboard";
import Users from "../Pages/Dashboard/Users";
import Products from "../Pages/Dashboard/Products";
import Orders from "../Pages/Dashboard/Orders";
import Activity from "../Pages/Dashboard/Activity";
import Settings from "../Pages/Dashboard/Settings";

import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";
import ForgotPassword from "../Pages/Auth/ForgotPassword";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="activity" element={<Activity />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
