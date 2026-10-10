import { useState } from "react";
import TopBar from "../../Components/Main/User/Topbar.jsx";
import { GoDotFill } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Stat from "../../Components/Main/User/Stat";
import useAPIData from "../../Data/useAPIData.jsx";
import Table from "../../Components/Main/User/Table";

const Users = () => {
  const { users, isUsersPending, isUsersError, usersError } = useAPIData();

  const [filteredUsersLength, setFilteredUsersLength] = useState("");

  return (
    <div className="p-6 flex flex-col gap-5 bg-secondary">
      {/* Top Bar */}
      <TopBar />

      {/* Stats */}
      <div className="flex gap-4">
        <Stat
          icon={<BsFillPeopleFill size={40} className="text-primary" />}
          title="Total Users"
          value={users.length}
        />

        <Stat
          icon={<GoDotFill size={40} className="text-primary" />}
          title="Total Active Users"
          value={users.filter((user) => user.status === "active").length}
        />

        <Stat
          icon={<FaFilter size={40} className="text-primary" />}
          title="Total Filtered Users"
          value={filteredUsersLength}
        />
      </div>

      {/* Table Container */}
      <Table
        users={users}
        isUsersPending={isUsersPending}
        isUsersError={isUsersError}
        usersError={usersError}
        setFilteredUsers={setFilteredUsersLength}
      />
    </div>
  );
};

export default Users;
