import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: MdHome, end: true },
  { to: "/dashboard/users", label: "Users", icon: FaUser },
  { to: "/dashboard/products", label: "Products", icon: GoPackage },
  { to: "/dashboard/orders", label: "Orders", icon: FaShoppingCart },
  { to: "/dashboard/activity", label: "Activity", icon: FiActivity },
  { to: "/dashboard/settings", label: "Settings", icon: FaGear },
];

const SideBar = ({ onNavigate }) => {
  return (
    <div className="flex h-full flex-col gap-8 overflow-y-auto bg-primary py-6">
      <h1 className="px-7 text-2xl font-bold leading-none text-secondary">
        OpsHub <br />
        <span className="text-sm font-normal text-secondary opacity-60">
          Operation Dashboard
        </span>
      </h1>

      <nav className="flex flex-col gap-1 px-4">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex cursor-pointer items-center gap-3 rounded-lg px-5 py-3 text-start transition-colors ${
                isActive
                  ? "bg-secondary font-medium text-primary"
                  : "text-secondary/70 hover:bg-secondary/10 hover:text-secondary"
              }`
            }
          >
            <Icon size={20} />
            <p>{label}</p>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;