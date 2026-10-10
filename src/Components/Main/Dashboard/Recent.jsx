import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";

const Recent = ( { title, subtitle, time, about} ) => {

  // console.log(time)

    const icon = {
        people: <BsFillPeopleFill size={20} />,
        cart: <FaShoppingCart size={20} />,
        product: <BsFillBoxSeamFill size={20} />,
        settings: <FaGear size={20} />,
        notification: <IoNotifications size={20} />,
        wallet: <FaWallet size={20} />,
        analytics: <MdAnalytics size={20} />,
        review: <MdReviews size={20} />,
        security: <FaLock size={20} />
    }

  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary p-3">
          {icon[about]}
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-bold capitalize">{title}</p>
          <p className="text-text-muted">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-text-muted text-xs">{time}</p>
      </div>
    </div>
  );
};

export default Recent;
