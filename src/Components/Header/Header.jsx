import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";

const Header = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div className="flex items-center justify-between px-8 h-17.5">
      {/* Search Input Box */}
      <div className="flex items-center gap-3 w-80 rounded-full bg-secondary/40 px-4 py-2.5 border border-primary/20 focus-within:border-primary focus-within:bg-secondary/70 transition-all duration-200">
        <FaMagnifyingGlass size={18} className="text-primary/60" />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-transparent text-sm text-primary placeholder:text-primary/50 outline-none"
        />
      </div>

      {/* Bell Icon Container */}
      <div className="flex items-center gap-3">
        <div className="relative inline-flex items-center justify-center cursor-pointer p-2.5 rounded-full hover:bg-secondary/60 text-primary/80 hover:text-primary transition-all duration-200">
          {/* Bell Icon */}
          <FaRegBell size={24} />
          <GoDotFill
            size={15}
            className="text-red-500 absolute top-1.5 right-1.5 animate-pulse"
          />
        </div>
        <div className="rounded-xl px-2 py-1 gap-3 w-auto h-auto flex items-center justify-between">
          <img
            src="https://avatars.githubusercontent.com/u/161487398?v=4"
            className="w-10 h-10 rounded-full"
            alt="Usman Ghani"
          />
          <div className="flex flex-col leading-none">
            <p className="text-sm text-primary/80">Usman Ghani</p>
            <p className="text-xs text-primary/60">Administrator</p>
          </div>
        </div>

        {/* Dark Mode Toggle Button */}
        <div
          onClick={() => setIsDark(!isDark)}
          className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 flex items-center ${
            isDark ? "bg-primary" : "bg-secondary border border-primary/20"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-between px-2 text-xs select-none">
            <FiSun
              className={`${isDark ? "text-secondary/40" : "opacity-0"} transition-opacity duration-300`}
              size={14}
            />
            <FiMoon
              className={`${isDark ? "opacity-0" : "text-primary/40"} transition-opacity duration-300`}
              size={14}
            />
          </div>

          {/* Sliding Knob with Active Icon */}
          <div
            className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md transform transition-all duration-300 ease-in-out ${
              isDark
                ? "translate-x-8 bg-secondary text-primary"
                : "translate-x-0 bg-primary text-secondary"
            }`}
          >
            {isDark ? (
              <FiMoon
                size={13}
                className="transition-transform duration-300 rotate-0"
              />
            ) : (
              <FiSun
                size={13}
                className="transition-transform duration-300 rotate-0"
              />
            )}
          </div>
        </div>
        <div className="cursor-pointer">{<FaGear size={21} className="text-primary/80" />}</div>
      </div>
    </div>
  );
};

export default Header;
