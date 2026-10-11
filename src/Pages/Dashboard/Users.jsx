import { useState } from "react";
import { motion } from "motion/react";
import TopBar from "../../Components/Main/User/Topbar.jsx";
import { GoDotFill } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Stat from "../../Components/Main/User/Stat";
import useAPIData from "../../Data/useAPIData.jsx";
import Table from "../../Components/Main/User/Table";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Users = () => {
  const { users, isUsersPending, isUsersError, usersError } = useAPIData();

  const [filteredUsersLength, setFilteredUsersLength] = useState("");

  const stats = [
    {
      icon: <BsFillPeopleFill size={40} className="text-primary" />,
      title: "Total Users",
      value: isUsersPending ? "Loading..." : users.length,
    },
    {
      icon: <GoDotFill size={40} className="text-primary" />,
      title: "Total Active Users",
      value: isUsersPending
        ? "Loading..."
        : users.filter((user) => user.status === "active").length,
    },
    {
      icon: <FaFilter size={40} className="text-primary" />,
      title: "Total Filtered Users",
      value: isUsersPending ? "Loading..." : filteredUsersLength,
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-6 flex flex-col gap-5 bg-secondary"
    >
      {/* Top Bar */}
      <motion.div variants={item}>
        <TopBar />
      </motion.div>

      {/* Stats */}
      <div className="flex gap-4 flex-wrap justify-center">
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={item} whileHover={{ y: -4 }}>
            <Stat {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Table Container */}
      <motion.div variants={item}>
        <Table
          users={users}
          isUsersPending={isUsersPending}
          isUsersError={isUsersError}
          usersError={usersError}
          setFilteredUsers={setFilteredUsersLength}
        />
      </motion.div>
    </motion.div>
  );
};

export default Users;