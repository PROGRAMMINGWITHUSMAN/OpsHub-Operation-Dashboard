import React from "react";
import { FiActivity } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import Recent from "./Recent";

const RecentActivity = ({activities}) => {

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
        {activities.map((item, idx) => {
          // console.log(item.title)
            return <Recent key={idx} title={item.title} about={item.about} subtitle={item.subtitle} time={item.relativeTime}/>;
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
