import { useState } from "react";
import { motion } from "motion/react";
import ActivityTop from "../../Components/Main/Activity/ActivityTop";
import ActivityStat from "../../Components/Main/Activity/ActivityStat";
import { FiActivity } from "react-icons/fi";
import activityData from "../../Data/activity";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbXboxXFilled } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import usePagination from "../../Hooks/usePagination";
import highlightText from "../../Utils/highlightText";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const categoryStyles = {
  // Primary (green): users / insights
  people: "bg-primary/10 text-primary border-primary/20",
  analytics: "bg-primary/10 text-primary border-primary/20",
  review: "bg-primary/10 text-primary border-primary/20",

  // Accent (amber): shopping / alerts
  cart: "bg-accent/10 text-accent border-accent/20",
  product: "bg-accent/10 text-accent border-accent/20",
  notification: "bg-accent/10 text-accent border-accent/20",

  // Success: paisa
  wallet: "bg-success/10 text-success border-success/20",

  // Danger: sensitive
  security: "bg-danger/10 text-danger border-danger/20",

  // Neutral
  settings: "bg-surface-muted text-text-muted border-surface-muted",
};

const Activity = () => {
  const todayActivities = activityData.filter(
    (item) => item.relativeTime === "1d ago" || item.relativeTime === "24h ago",
  );
  const last24Hours = activityData.filter(
    (item) =>
      item.relativeTime === "24h ago" ||
      item.relativeTime === "23h ago" ||
      item.relativeTime === "22h ago" ||
      item.relativeTime === "21h ago" ||
      item.relativeTime === "20h ago",
  );

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");

  const clearFilters = () => {
    setFilter("all");
    setSort("none");
    setInput("");
    setCurrentPage(1);
  };

  const filteredActivities = activityData.filter((elem) => {
    const search = input.toLowerCase();

    const matchesSearch =
      elem.title.toLowerCase().includes(search) ||
      elem.user.toLowerCase().includes(search);

    const matchesFilter =
      filter === "all" || elem.about.toLowerCase() == filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  const sortedActivities = [...filteredActivities].sort((a, b) => {
    if (sort === "time-asc") {
      return new Date(a.time) - new Date(b.time);
    }

    if (sort === "time-desc") {
      return new Date(b.time) - new Date(a.time);
    }

    return 0;
  });

  const {
    currentPage,
    currentItems: currentPageActivities,
    totalPages,
    startIndex,
    nextPage,
    previousPage,
    itemsPerPage: usersPerPage,
    setCurrentPage,
  } = usePagination(sortedActivities, 10);

  const stats = [
    {
      icon: <FiActivity size={40} className="text-primary" />,
      title: "Total Activities",
      value: activityData.length,
    },
    {
      icon: <FaCalendarAlt size={40} className="text-primary" />,
      title: "Today's Activities",
      value: todayActivities.length,
    },
    {
      icon: <BsFillPeopleFill size={40} className="text-primary" />,
      title: "Last 24 Hours",
      value: last24Hours.length,
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-6 bg-secondary flex flex-col gap-5"
    >
      {/* Top Bar */}
      <motion.div variants={item}>
        <ActivityTop />
      </motion.div>

      {/* Stats */}
      <div className="flex gap-4 flex-wrap justify-center">
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={item} whileHover={{ y: -4 }}>
            <ActivityStat {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Activity Table */}
      <motion.div
        variants={item}
        className="flex flex-col gap-4 bg-surface rounded-2xl p-4"
      >
        <p className="text-text-muted text-2xl font-medium">All Activities</p>

        <div className="flex gap-3">
          {/* Search */}
          <div className="relative w-full">
            <FaMagnifyingGlass
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            />

            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search Activities..."
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            />

            <TbXboxXFilled
              size={17}
              onClick={() => {
                setInput("");
                setCurrentPage(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted cursor-pointer"
            />
          </div>

          <div className="flex gap-4">
            {/* Filter */}
            <div className="relative">
              <FaFilter
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              />

              <select
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="cursor-pointer bg-surface border border-surface-muted text-sm text-text-primary rounded-xl pl-10 pr-4 py-3 outline-none hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
              >
                <option value="all">All</option>
                <option value="cart">Cart</option>
                <option value="people">People</option>
                <option value="settings">Settings</option>
                <option value="notification">Notification</option>
                <option value="security">Security</option>
                <option value="analytics">Analytics</option>
                <option value="product">Product</option>
                <option value="review">Review</option>
                <option value="wallet">Wallet</option>
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <FaSort
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              />

              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setCurrentPage(1);
                }}
                className="cursor-pointer bg-surface border border-surface-muted text-sm text-text-primary rounded-xl pl-10 pr-4 py-3 outline-none hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
              >
                <option value="none">None</option>
                <option value="time-asc">Time ↑</option>
                <option value="time-desc">Time ↓</option>
              </select>
            </div>

            {/* Clear */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearFilters}
                className="cursor-pointer bg-surface border border-surface-muted text-sm text-text-primary rounded-xl pl-10 pr-4 py-3 outline-none hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
              >
                Clear
                <TbXboxXFilled
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                />
              </motion.button>
            </div>
          </div>
        </div>

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-surface-muted text-text-muted">
              <th className="py-2 pr-4 font-medium">Activity ID</th>
              <th className="py-2 pr-4 font-medium">Activity</th>
              <th className="py-2 pr-4 font-medium">User</th>
              <th className="py-2 pr-4 font-medium">Type</th>
              <th className="py-2 pr-4 font-medium">Time</th>
            </tr>
          </thead>

          {/* key badalne pe rows ki animation dobara chalti hai */}
          <tbody key={`${currentPage}-${filter}-${sort}`}>
            {currentPageActivities.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-8 text-center text-text-muted">
                  No activities found.
                </td>
              </tr>
            ) : (
              currentPageActivities.map((elem, idx) => {
                const title = highlightText(elem.title, input);
                const user = highlightText(elem.user, input);

                return (
                  <motion.tr
                    key={elem.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="border-b border-surface-muted/60 hover:bg-secondary/50 transition-colors"
                  >
                    <td className="py-3 pr-4 font-medium text-text-primary">
                      <span className="flex px-3 items-center gap-1">
                        {`#ACT-${String(elem.id).padStart(3, "0")}`}
                      </span>
                    </td>

                    <td className="py-3 pr-4 text-text-primary">
                      {title.match ? (
                        <>
                          {title.before}
                          <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                            {title.match}
                          </span>
                          {title.after}
                        </>
                      ) : (
                        elem.title
                      )}
                    </td>

                    <td className="py-3 pr-4 text-text-primary">
                      {user.match ? (
                        <>
                          {user.before}
                          <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                            {user.match}
                          </span>
                          {user.after}
                        </>
                      ) : (
                        elem.user
                      )}
                    </td>

                    <td className="py-3 pr-4 text-text-primary capitalize">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold capitalize ${categoryStyles[elem.about] ?? categoryStyles.settings}`}
                      >
                        {elem.about}
                      </span>
                    </td>

                    <td className="py-3 pr-4 text-text-primary">
                      {elem.relativeTime}
                    </td>
                  </motion.tr>
                );
              })
            )}
          </tbody>

          <tfoot>
            {sortedActivities.length > 0 && (
              <tr>
                <td colSpan="5" className="py-8 text-center text-text-muted">
                  <div className="flex justify-center gap-5 items-center">
                    <motion.button
                      disabled={currentPage === 1}
                      onClick={previousPage}
                      whileHover={
                        currentPage === 1 ? undefined : { scale: 1.05 }
                      }
                      whileTap={currentPage === 1 ? undefined : { scale: 0.95 }}
                      className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <MdOutlineKeyboardArrowLeft size={20} /> Previous
                    </motion.button>

                    <p className="text-text-muted text-xs">
                      Showing {startIndex + 1}-
                      {Math.min(
                        startIndex + usersPerPage,
                        sortedActivities.length,
                      )}{" "}
                      Of {` ${sortedActivities.length}`}
                    </p>

                    <motion.button
                      disabled={currentPage === totalPages}
                      onClick={nextPage}
                      whileHover={
                        currentPage === totalPages ? undefined : { scale: 1.05 }
                      }
                      whileTap={
                        currentPage === totalPages ? undefined : { scale: 0.95 }
                      }
                      className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Next
                      <MdOutlineKeyboardArrowRight size={20} />
                    </motion.button>
                  </div>
                </td>
              </tr>
            )}
          </tfoot>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default Activity;
