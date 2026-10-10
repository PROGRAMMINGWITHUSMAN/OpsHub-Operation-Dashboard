import { useState } from "react";
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

  const statusStyles = {
    Pending: "bg-accent/10 text-accent border-accent/20",
    Processing: "bg-primary/10 text-primary border-primary/20",
    Delivered: "bg-success/10 text-success border-success/20",
    Cancelled: "bg-danger/10 text-danger border-danger/20",
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
    if (sort === "name-asc") {
      return a.customer.localeCompare(b.customer);
    }
    if (sort === "name-desc") {
      return b.customer.localeCompare(a.customer);
    }
    if (sort === "items-asc") {
      return a.items.localeCompare(b.items);
    }
    if (sort === "items-desc") {
      return b.items.localeCompare(a.items);
    }
    if (sort === "amount-asc") {
      return a.amount - b.amount;
    }
    if (sort === "amount-desc") {
      return b.amount - a.amount;
    }
    if (sort === "date-asc") {
      return new Date(a.date) - new Date(b.date);
    }
    if (sort === "date-desc") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  // let isOrdersPending = true

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

  return (
    <div className="p-6 bg-secondary flex flex-col gap-5">
      {/* Top Bar  */}
      <TopOrder />

      {/* Stats  */}
      <div className="flex gap-4 flex-wrap justify-center">
        <StatOrder
          icon={<FaClipboardList size={40} className="text-primary" />}
          title="Total Orders"
          value={isOrdersPending ? "Loading..." : orders.length}
        />
        <StatOrder
          icon={<HiClock size={40} className="text-primary" />}
          title="Pending"
          value={isOrdersPending ? "Loading..." : pendingOrders.length}
        />
        <StatOrder
          icon={<FaTruckMoving size={40} className="text-primary" />}
          title="Delivered"
          value={isOrdersPending ? "Loading..." : deliveredOrders.length}
        />
        <StatOrder
          icon={<FaBan size={40} className="text-primary" />}
          title="Cancelled"
          value={isOrdersPending ? "Loading..." : cancelledOrders.length}
        />
        <StatOrder
          icon={<FaSpinner size={40} className="text-primary" />}
          title="Processing"
          value={isOrdersPending ? "Loading..." : processingOrders.length}
        />
      </div>

      {/* Orders Table  */}
      <div className="flex flex-col gap-4 bg-surface rounded-2xl p-4">
        <p className="text-text-muted text-2xl font-medium">All Orders</p>
        <div className="flex gap-3">
          {/* Search  */}
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
              placeholder="Search by name, email or username"
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
            {/* Filter  */}
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

            {/* Sort  */}
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

            {/* Clear  */}
            <div className="relative">
              <button
                onClick={clearFilters}
                className="cursor-pointer bg-surface border border-surface-muted text-sm text-text-primary rounded-xl pl-10 pr-4 py-3 outline-none hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
              >
                Clear
                <TbXboxXFilled
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        {isOrdersError && <p>Failed to load orders: {ordersError?.message}</p>}
        {isOrdersPending ? (
          <div className="flex justify-center items-center w-full">
            <div className="animate-pulse flex space-x-4 w-full">
              <div className="flex-1 space-y-6 py-1 w-full">
                <div className="bg-gray-200 rounded w-full flex justify-center py-5 px-5 items-center">
                  Loading...
                </div>
              </div>
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

            <tbody>
              {currentPageOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-text-muted">
                    No orders found.
                  </td>
                </tr>
              ) : (
                currentPageOrders.map((elem) => {
                  const customer = highlightText(elem.customer, input);
                  const items = highlightText(elem.items, input);

                  return (
                    <tr key={elem.uniqueId}>
                      <td className="py-3 pr-4 font-medium text-text-primary">
                        <span className="flex px-3 items-center gap-1">
                          {`#ORD-${String(elem.uniqueId).padStart(3, "0")}`}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-text-primary">
                        {customer ? customer.before : "Unknown"}

                        {customer.match ? (
                          <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                            {customer.match}
                          </span>
                        ) : null}

                        {customer.after}
                      </td>
                      <td className="py-3 pr-4 text-text-primary">
                        {items ? items.before : "N/A"}
                        {items.match ? (
                          <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                            {items.match}
                          </span>
                        ) : null}

                        {items.after}
                      </td>
                      <td className="py-3 pr-4 text-text-primary">
                        ${elem.amount}
                      </td>
                      <td className="py-3 pr-4 text-text-primary text-start">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold capitalize ${statusStyles[elem.status]}`}
                        >
                          {elem.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-text-primary">
                        {elem.date}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            {sortedOrders.length > 0 && (
              <tfoot>
                <tr>
                  <td colSpan="6" className="py-8 text-center text-text-muted">
                    <div className="flex justify-center gap-5 items-center">
                      <button
                        disabled={currentPage === 1}
                        onClick={() => {
                          previousPage();
                        }}
                        className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer"
                      >
                        <MdOutlineKeyboardArrowLeft size={20} /> Previous
                      </button>
                      <p className="text-text-muted text-xs">
                        Showing {startIndex + 1}-
                        {Math.min(
                          startIndex + ordersPerPage,
                          sortedOrders.length,
                        )}{" "}
                        Of {` ${sortedOrders.length}`}
                      </p>
                      <button
                        disabled={currentPage === totalPages}
                        onClick={() => {
                          nextPage();
                        }}
                        className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer"
                      >
                        Next
                        <MdOutlineKeyboardArrowRight size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        )}
      </div>
    </div>
  );
};

export default Orders;
