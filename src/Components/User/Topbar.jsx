import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 p-4 rounded-2xl">
          <BsFillPeopleFill size={36} className="text-primary" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-text-primary">Users</h1>
          <p className="text-text-muted text-base mt-1">
            Manage and organize all users
          </p>
        </div>
      </div>

      <button className="flex cursor-pointer items-center gap-2 bg-primary text-surface font-semibold text-lg px-5 py-2.5 rounded-xl shadow-sm hover:bg-primary/90 active:scale-95 transition">
        <FiPlus size={18} />
        Add User
      </button>
    </div>
  );
};

export default Topbar;
