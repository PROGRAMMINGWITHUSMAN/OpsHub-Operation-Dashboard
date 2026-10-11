import { useState } from "react";
import { motion } from "motion/react";
import StatOrder from "../../Components/Main/Orders/StatOrder.jsx";
import TopOrder from "../../Components/Main/Orders/TopOrder.jsx";
import { HiClock } from "react-icons/hi2";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import usePagination from "../../Hooks/usePagination.js";
import useAPIData from "../../Data/useAPIData.jsx";
import highlightText from "../../Utils/highlightText.js";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbXboxXFilled } from "react-icons/tb";
import {
  FaFilter,
  FaSort,
  FaSpinner,
  FaBan,
  FaClipboardList,
  FaTruckMoving,
} from "react-icons/fa";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const statusStyles = {
  Pending: "bg-accent/10 text-accent border-accent/20",
  Processing: "bg-primary/10 text-primary border-primary/20",
  Delivered: "bg-success/10 text-success border-success/20",
  Cancelled: "bg-danger/10 text-danger border-danger/20",
};

const Orders = () => {
  const { orders, isOrdersError, ordersError, isOrdersPending } = useAPIData();

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("none");

  const clearFilters = () => {
    setFilter("All");
    setSort("none");
    setInput("");
    setCurrentPage(1);
  };

  const pendingOrders = orders.filter((o) => o.status === "Pending");
  const deliveredOrders = orders.filter((o) => o.status === "Delivered");
  const cancelledOrders = orders.filter((o) => o.status === "Cancelled");
  const processingOrders = orders.filter((o) => o.status === "Processing");

  const filteredOrders = orders.filter((elem) => {
    const search = input.toLowerCase();

    const matchesSearch =
      elem.customer.toLowerCase().includes(search) ||
      elem.items.toLowerCase().includes(search);

    const matchesFilter = filter === "All" || elem.status === filter;

    return matchesSearch && matchesFilter;
  });

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sort === "name-asc") return a.customer.localeCompare(b.customer);
    if (sort === "name-desc") return b.customer.localeCompare(a.customer);
    if (sort === "items-asc") return a.items.localeCompare(b.items);
    if (sort === "items-desc") return b.items.localeCompare(a.items);
    if (sort === "amount-asc") return a.amount - b.amount;
    if (sort === "amount-desc") return b.amount - a.amount;
    if (sort === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sort === "date-desc") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  const {
    currentPage,
    currentItems: currentPageOrders,
    totalPages,
    startIndex,
    nextPage,
    previousPage,
    itemsPerPage: ordersPerPage,
    setCurrentPage,
  } = usePagination(sortedOrders, 10);

  const stats = [
    {
      icon: <FaClipboardList size={40} className="text-primary" />,
      title: "Total Orders",
      value: isOrdersPending ? "Loading..." : orders.length,
    },
    {
      icon: <HiClock size={40} className="text-primary" />,
      title: "Pending",
      value: isOrdersPending ? "Loading..." : pendingOrders.length,
    },
    {
      icon: <FaTruckMoving size={40} className="text-primary" />,
      title: "Delivered",
      value: isOrdersPending ? "Loading..." : deliveredOrders.length,
    },
    {
      icon: <FaBan size={40} className="text-primary" />,
      title: "Cancelled",
      value: isOrdersPending ? "Loading..." : cancelledOrders.length,
    },
    {
      icon: <FaSpinner size={40} className="text-primary" />,
      title: "Processing",
      value: isOrdersPending ? "Loading..." : processingOrders.length,
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
        <TopOrder />
      </motion.div>

      {/* Stats */}
      <div className="flex gap-4 flex-wrap justify-center">
        {stats.map((stat) => (
          <motion.div key={stat.title} variants={item} whileHover={{ y: -4 }}>
            <StatOrder {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Orders Table */}
      <motion.div
        variants={item}
        className="flex flex-col gap-4 bg-surface rounded-2xl p-4"
      >
        <p className="text-text-muted text-2xl font-medium">All Orders</p>

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
              placeholder="Search by customer or items"
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
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
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
                <option value="name-asc">Customer ↑</option>
                <option value="name-desc">Customer ↓</option>
                <option value="items-asc">Items ↑</option>
                <option value="items-desc">Items ↓</option>
                <option value="amount-asc">Amount ↑</option>
                <option value="amount-desc">Amount ↓</option>
                <option value="date-asc">Date ↑</option>
                <option value="date-desc">Date ↓</option>
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

        {/* Table */}
        {isOrdersPending ? (
          <div className="animate-pulse w-full">
            <div className="bg-surface-muted text-text-muted rounded-xl w-full flex justify-center py-5 px-5 items-center">
              Loading...
            </div>
          </div>
        ) : isOrdersError ? (
          <p className="py-6 text-center text-danger">
            Failed to load orders: {ordersError?.message || "Please try again."}
          </p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-surface-muted text-text-muted">
                <th className="py-2 pr-4 font-medium">Order ID</th>
                <th className="py-2 pr-4 font-medium">Customer</th>
                <th className="py-2 pr-4 font-medium">Items</th>
                <th className="py-2 pr-4 font-medium">Amount</th>
                <th className="py-2 pr-4 font-medium">Status</th>
                <th className="py-2 pr-4 font-medium">Date</th>
              </tr>
            </thead>

            {/* key badalne pe rows ki animation dobara chalti hai */}
            <tbody key={`${currentPage}-${filter}-${sort}`}>
              {currentPageOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-text-muted">
                    No orders found.
                  </td>
                </tr>
              ) : (
                currentPageOrders.map((elem, idx) => {
                  const customer = highlightText(elem.customer, input);
                  const items = highlightText(elem.items, input);

                  return (
                    <motion.tr
                      key={elem.uniqueId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="border-b border-surface-muted/60 hover:bg-secondary/50 transition-colors"
                    >
                      <td className="py-3 pr-4 font-medium text-text-primary">
                        <span className="flex px-3 items-center gap-1">
                          {`#ORD-${String(elem.uniqueId).padStart(3, "0")}`}
                        </span>
                      </td>

                      <td className="py-3 pr-4 text-text-primary">
                        {customer.match ? (
                          <>
                            {customer.before}
                            <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                              {customer.match}
                            </span>
                            {customer.after}
                          </>
                        ) : (
                          elem.customer || "Unknown"
                        )}
                      </td>

                      <td className="py-3 pr-4 text-text-primary">
                        {items.match ? (
                          <>
                            {items.before}
                            <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                              {items.match}
                            </span>
                            {items.after}
                          </>
                        ) : (
                          elem.items || "N/A"
                        )}
                      </td>

                      <td className="py-3 pr-4 text-text-primary">
                        ${elem.amount}
                      </td>

                      <td className="py-3 pr-4 text-text-primary text-start">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold capitalize ${statusStyles[elem.status] ?? statusStyles.Processing}`}
                        >
                          {elem.status}
                        </span>
                      </td>

                      <td className="py-3 pr-4 text-text-primary">
                        {elem.date}
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </tbody>

            {sortedOrders.length > 0 && (
              <tfoot>
                <tr>
                  <td colSpan="6" className="py-8 text-center text-text-muted">
                    <div className="flex justify-center gap-5 items-center">
                      <motion.button
                        disabled={currentPage === 1}
                        onClick={previousPage}
                        whileHover={
                          currentPage === 1 ? undefined : { scale: 1.05 }
                        }
                        whileTap={
                          currentPage === 1 ? undefined : { scale: 0.95 }
                        }
                        className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <MdOutlineKeyboardArrowLeft size={20} /> Previous
                      </motion.button>

                      <p className="text-text-muted text-xs">
                        Showing {startIndex + 1}-
                        {Math.min(
                          startIndex + ordersPerPage,
                          sortedOrders.length,
                        )}{" "}
                        Of {` ${sortedOrders.length}`}
                      </p>

                      <motion.button
                        disabled={currentPage === totalPages}
                        onClick={nextPage}
                        whileHover={
                          currentPage === totalPages
                            ? undefined
                            : { scale: 1.05 }
                        }
                        whileTap={
                          currentPage === totalPages
                            ? undefined
                            : { scale: 0.95 }
                        }
                        className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Next
                        <MdOutlineKeyboardArrowRight size={20} />
                      </motion.button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Orders;
