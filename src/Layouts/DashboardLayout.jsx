import SideBar from "../Components/SideBar/SideBar";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <div className="sidebar border-r border-primary/30 bg-secondary">
        <SideBar />
      </div>

      <div className="header border-b border-primary/30 bg-secondary">
        <Header />
      </div>

      <main className="main bg-secondary"><Outlet /></main>
    </div>
  );
};

export default DashboardLayout;
