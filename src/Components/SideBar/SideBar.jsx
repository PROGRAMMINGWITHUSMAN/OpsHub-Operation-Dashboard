import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col items-start gap-8 py-6 bg-primary h-screen">
      <h1 className="text-2xl font-bold text-secondary px-7 leading-none">
        OpsHub <br />
        <span className="text-secondary text-sm font-normal opacity-60">Operation Dashboard</span>
      </h1>
      <div className="flex flex-col gap-1 px-4 w-60">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `cursor-pointer flex items-center gap-3 rounded-lg px-5 py-3 text-start transition-colors ${
              isActive ? "bg-secondary text-primary font-medium" : "text-secondary/70 hover:bg-secondary/10 hover:text-secondary"
            }`
          }
        >
          <MdHome size={20} />
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `cursor-pointer flex items-center gap-3 rounded-lg px-5 py-3 text-start transition-colors ${
              isActive ? "bg-secondary text-primary font-medium" : "text-secondary/70 hover:bg-secondary/10 hover:text-secondary"
            }`
          }
        >
          <FaUser size={20} />
          <p>Users</p>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `cursor-pointer flex items-center gap-3 rounded-lg px-5 py-3 text-start transition-colors ${
              isActive ? "bg-secondary text-primary font-medium" : "text-secondary/70 hover:bg-secondary/10 hover:text-secondary"
            }`
          }
        >
          <GoPackage size={20} />
          <p>Products</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `cursor-pointer flex items-center gap-3 rounded-lg px-5 py-3 text-start transition-colors ${
              isActive ? "bg-secondary text-primary font-medium" : "text-secondary/70 hover:bg-secondary/10 hover:text-secondary"
            }`
          }
        >
          <FaShoppingCart size={20} />
          <p>Orders</p>
        </NavLink>

        <NavLink
          to="/activity"
          className={({ isActive }) =>
            `cursor-pointer flex items-center gap-3 rounded-lg px-5 py-3 text-start transition-colors ${
              isActive ? "bg-secondary text-primary font-medium" : "text-secondary/70 hover:bg-secondary/10 hover:text-secondary"
            }`
          }
        >
          <FiActivity size={20} />
          <p>Activity</p>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `cursor-pointer flex items-center gap-3 rounded-lg px-5 py-3 text-start transition-colors ${
              isActive ? "bg-secondary text-primary font-medium" : "text-secondary/70 hover:bg-secondary/10 hover:text-secondary"
            }`
          }
        >
          <FaGear size={20} />
          <p>Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;