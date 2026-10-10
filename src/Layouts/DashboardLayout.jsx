import SideBar from "../Components/Main/SideBar/SideBar";
import Header from "../Components/Main/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="dashboard h-screen">
        <div className="sidebar overflow-hidden">
          <SideBar />
        </div>
        <div className="header overflow-hidden">
          <Header />
        </div>
        <main className="main overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
