import { BsFillPeopleFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="bg-primary/10 p-3 sm:p-4 rounded-2xl shrink-0">
          <BsFillPeopleFill className="text-primary w-7 h-7 sm:w-9 sm:h-9" />
        </div>
        <div className="flex flex-col min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
            Users
          </h1>
          <p className="text-text-muted text-sm sm:text-base mt-1">
            Manage and organize all users
          </p>
        </div>
      </div>

      <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 bg-primary text-surface font-semibold text-base sm:text-lg px-5 py-2.5 rounded-xl shadow-sm hover:bg-primary/90 active:scale-95 transition">
        <FiPlus size={18} />
        Add User
      </button>
    </div>
  );
};

export default Topbar;