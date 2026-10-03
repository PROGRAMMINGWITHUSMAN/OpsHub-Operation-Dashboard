import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Stat from "../Components/Dashboard/Stat";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Chart from "../Components/Dashboard/Chart";
import RecentOrders from "../Components/Dashboard/RecentOrders";
import RecentActivity from "../Components/Dashboard/RecentActivity";

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("last7days");

  const dateOptions = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 Days", value: "last7days" },
    { label: "Last 30 Days", value: "last30days" },
    { label: "This Month", value: "thisMonth" },
    { label: "Custom Range", value: "custom" },
  ];

  return (
    <div className="px-6 py-6 bg-secondary flex flex-col gap-6">

      {/* Top Bar */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
          <p className="text-primary/70 text-lg mt-1">
            Welcome Back, Usman! Here's what's Happening with your Operations
            Today.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-primary/10 px-3.5 py-2.5 shadow-sm">
          <span className="text-primary/50">
            <FaCalendarAlt />
          </span>

          <select
            value={selectedRange}
            onChange={(e) => {
              setSelectedRange(e.target.value);
            }}
            className="cursor-pointer bg-transparent text-sm font-semibold text-primary outline-none"
          >
            {dateOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between flex-wrap">
        <Stat icon={<BsFillPeopleFill size={55} className="text-primary" />} title="Total Users" value="1,248" />
        <Stat icon={<BsFillBoxSeamFill size={55} className="text-primary" />} title="Total Products" value="892" />
        <Stat icon={<FaShoppingCart size={55} className="text-primary" />} title="Total Orders" value="2,341" />
        <Stat icon={<FaRegClock size={55} className="text-primary" />} title="Pending Orders" value="142" />
      </div>
      
      {/* Dashboard Chart and Recent Activity */}
      <div className="flex justify-between">
        <Chart />
        <RecentActivity />
      </div>

      {/* Recent Orders */}
      <div>
        <RecentOrders />
      </div>
    </div>
  );
}

export default Dashboard;