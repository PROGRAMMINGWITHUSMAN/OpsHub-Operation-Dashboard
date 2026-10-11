import { motion } from "motion/react";
import Stat from "../../Components/Main/Dashboard/Stat.jsx";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Chart from "../../Components/Main/Dashboard/Chart.jsx";
import RecentOrders from "../../Components/Main/Dashboard/RecentOrders.jsx";
import RecentActivity from "../../Components/Main/Dashboard/RecentActivity.jsx";
import activity from "../../Data/activity.js";
import TopBar from "../../Components/Main/Dashboard/TopBar.jsx";
import useAPIData from "../../Data/useAPIData.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Dashboard = () => {
  const {
    users,
    products,
    orders,
    dailySales,
    isUsersPending,
    isProductsPending,
    isOrdersPending,
  } = useAPIData();

  const activitiesSlice = activity.slice(0, 6);
  const ordersSlice = orders.slice(0, 5);
  const pendingOrders = orders.filter((order) => order.status === "Pending");

  const stats = [
    {
      icon: <BsFillPeopleFill size={40} className="text-primary" />,
      title: "Total Users",
      value: isUsersPending ? "Loading..." : users.length,
    },
    {
      icon: <BsFillBoxSeamFill size={40} className="text-primary" />,
      title: "Total Products",
      value: isProductsPending ? "Loading..." : products.length,
    },
    {
      icon: <FaShoppingCart size={40} className="text-primary" />,
      title: "Total Orders",
      value: isOrdersPending ? "Loading..." : orders.length,
    },
    {
      icon: <FaRegClock size={40} className="text-primary" />,
      title: "Pending Orders",
      value: isOrdersPending ? "Loading..." : pendingOrders.length,
    },
  ];

  return (
    <motion.main variants={container} initial="hidden" animate="show">
      <div className="p-4 sm:p-6 bg-secondary flex flex-col gap-4 sm:gap-6">
        {/* Top Bar */}
        <motion.div variants={item}>
          <TopBar />
        </motion.div>

        {/* Stats: mobile 1, tablet 2, desktop 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="flex"
            >
              <Stat {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Chart and Recent Activity: neeche neeche, bari screen pe side by side */}
        {/* Chart and Recent Activity */}
        <div className="flex flex-col xl:flex-row gap-4 w-full">
          <motion.div variants={item} className="flex flex-1 min-w-0">
            <Chart dailySales={dailySales} />
          </motion.div>
          <motion.div
            variants={item}
            className="flex w-full xl:w-96 [&>*]:w-full [&>*]:min-w-0"
          >
            <RecentActivity activities={activitiesSlice} />
          </motion.div>
        </div>

        {/* Recent Orders */}
        <motion.div variants={item} className="min-w-0">
          <RecentOrders orders={ordersSlice} />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Dashboard;
