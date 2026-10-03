import React from "react";
import { FiActivity } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import Recent from "./Recent";

const RecentActivity = () => {
  const activity = [
    {
      id: 1,
      about: "people",
      title: "New User Registered",
      time: "2m Ago",
      subtitle: "john.doe@example.com",
    },
    {
      id: 2,
      about: "cart",
      title: "Order #ORD-8721 completed",
      time: "12m Ago",
      subtitle: "$129.99",
    },
    {
      id: 3,
      about: "product",
      title: "Product Updated",
      time: "25m Ago",
      subtitle: "Wireless Headphones",
    },
    {
      id: 4,
      about: "people",
      title: "User Deleted",
      time: "42m Ago",
      subtitle: "sarah.smith@example.com",
    },
    {
      id: 5,
      about: "cart",
      title: "New Order Placed",
      time: "1h Ago",
      subtitle: "#871231",
    },
    {
      id: 6,
      about: "settings",
      title: "Setting Updated",
      time: "2h Ago",
      subtitle: "Systems Configuration",
    },
  ];

  return (
    <div className="flex flex-col bg-surface rounded-2xl p-5 shadow-sm gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FiActivity size={20} />
          </div>
          <h2 className="text-xl font-semibold text-text-primary">
            Recent Activity
          </h2>
        </div>
        <button className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors duration-200 cursor-pointer">
          View All <FaArrowRight size={14} />
        </button>
      </div>

      <div className="overflow-x-auto flex gap-4 flex-col">
        {activity.map((item, idx) => {
            return <Recent key={idx} about={item.about} title={item.title} time={item.time} subtitle={item.subtitle} />;
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
