import React from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

const Top = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 p-4 rounded-2xl">
          <BsFillBoxSeamFill size={40} className="text-primary" />
        </div>
        <div className="flex flex-col">
          <p className="text-3xl font-bold text-text-primary">Products</p>
          <p className="text-text-muted text-base mt-1 capitalize">
            Manage and organize your products inventory
          </p>
        </div>
      </div>
      <div>
        <button onClick={
            () => {
                toast.warn('Coming Soon!', {
                    position: "bottom-right",
                    autoClose: 2000,                    
                    theme: "dark",
                })
            }
        } className="bg-primary text-white rounded-xl px-5 py-3 outline-none flex items-center cursor-pointer gap-2">
          <FiPlus /> Add Product
        </button>
      </div>
    </div>
  );
};

export default Top;
