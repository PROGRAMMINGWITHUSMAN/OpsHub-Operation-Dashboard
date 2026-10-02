import SideBar from "../Components/SideBar/SideBar";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="header">
        <Header />
      </div>

      <main className="main"><Outlet /></main>
    </div>
  );
};

export default DashboardLayout;
