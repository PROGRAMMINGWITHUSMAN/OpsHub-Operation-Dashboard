import React from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";


const Stats = ({ value, text, icon}) => {
  return (
    <div className="flex gap-4 bg-surface p-4 rounded-2xl items-center justify-start w-full ">
      <div className="bg-primary/10 p-4 rounded-2xl">
        {icon}
      </div>
      <div>
        <p className="text-text-muted font-medium">{text}</p>
        <p className="text-text-primary text-3xl font-bold">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Stats;
