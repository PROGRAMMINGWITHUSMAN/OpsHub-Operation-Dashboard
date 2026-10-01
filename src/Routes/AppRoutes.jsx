import { Routes, Route } from "react-router-dom";
// Importing Pages
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users";
import Products from "../Pages/Products";
import Orders from "../Pages/Orders";
import Activity from "../Pages/Activity";
import Settings from "../Pages/Settings";
import DashboardLayout from "../Layouts/DashboardLayout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} /> 
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="activity" element={<Activity />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
