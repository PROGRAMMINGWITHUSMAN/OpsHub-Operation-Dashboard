import { useState, useContext } from "react";
import { FaMagnifyingGlass, FaGear } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {setTheme} from "../../../App/Features/themeSlice";

const Header = ({ onMenuClick }) => {
  const { login } = useContext(AuthContext);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === "Dark";
  console.log(isDark)

  const comingSoon = () =>
    toast.warn("Coming Soon!", {
      position: "bottom-right",
      autoClose: 2000,
      theme: isDark ? "light" : "dark",
    });

  const notify = () => {
    toast.success(
      `Switched to ${!isDark ? "Dark" : "Light"} Mode! (Under Maintenance)`,
      {
        position: "bottom-right",
        autoClose: 2000,
        theme: isDark ? "light" : "dark",
      },
    );
  };

  return (
    <div className="flex h-17.5 items-center justify-between gap-3 border-b border-primary/10 bg-secondary px-4 sm:px-8">
      {/* Left: hamburger + search */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <button
          onClick={onMenuClick}
          className="cursor-pointer rounded-lg bg-surface p-2 text-primary lg:hidden"
          aria-label="Open menu"
        >
          <FiMenu size={20} />
        </button>

        <div className="flex w-full max-w-xs items-center gap-3 rounded-full border border-transparent bg-surface px-4 py-2.5 transition-all duration-200 focus-within:border-primary sm:w-80">
          <FaMagnifyingGlass size={18} className="shrink-0 text-primary/60" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full min-w-0 bg-transparent text-sm text-primary outline-none placeholder:text-primary/50"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {/* Bell */}
        <div
          onClick={comingSoon}
          className="relative inline-flex cursor-pointer items-center justify-center rounded-full p-2.5 text-primary/80 transition-all duration-200 hover:bg-surface hover:text-primary"
        >
          <FaRegBell size={24} />
          <GoDotFill
            size={15}
            className="absolute right-1.5 top-1.5 animate-pulse text-accent"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 sm:border-l sm:border-primary/10 sm:pl-4">
          <img
            onClick={comingSoon}
            src="https://avatars.githubusercontent.com/u/161487398?v=4"
            className="h-10 w-10 cursor-pointer rounded-full ring-2 ring-surface"
            alt="Usman Ghani"
          />
          <div className="hidden flex-col leading-none md:flex">
            <p className="text-sm font-medium text-primary">
              {login?.name ? login.name : "Usman Ghani"}
            </p>
            <p className="mt-1 text-xs text-primary/60">Administrator</p>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <div
          onClick={() => {
            dispatch(setTheme());
            notify();
          }}
          className={`relative hidden h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 sm:flex ${
            isDark ? "bg-primary" : "bg-surface"
          }`}
        >
          <div className="absolute inset-0 flex select-none items-center justify-between px-2 text-xs">
            <FiSun
              className={`${isDark ? "text-secondary/40" : "opacity-0"} transition-opacity duration-300`}
              size={14}
            />
            <FiMoon
              className={`${isDark ? "opacity-0" : "text-primary/40"} transition-opacity duration-300`}
              size={14}
            />
          </div>

          <div
            className={`relative z-10 flex h-6 w-6 transform items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out ${
              isDark
                ? "translate-x-8 bg-secondary text-primary"
                : "translate-x-0 bg-primary text-secondary"
            }`}
          >
            {isDark ? <FiMoon size={13} /> : <FiSun size={13} />}
          </div>
        </div>

        {/* Settings */}
        <button
          className="hidden cursor-pointer rounded-full p-2 text-primary/80 transition-colors duration-200 hover:bg-surface sm:block"
          onClick={comingSoon}
        >
          <FaGear size={21} />
        </button>
      </div>
    </div>
  );
};

export default Header;