import { RiArrowDropDownLine } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="px-6 py-6 min-h-screen bg-secondary">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
          <p className="text-primary/70 text-lg mt-1">
            Welcome Back, Usman! Here's what's Happening with your Operations Today.
          </p>
        </div>
        <div className="flex justify-center items-center">
          Last 7 Days  <RiArrowDropDownLine size={20} className="text-primary/70" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;