import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import usePagination from "../../../Hooks/usePagination";
import highlightText from "../../../Utils/highlightText";

const statusStyles = {
  active: "bg-success/10 text-success border-success/20",
  inactive: "bg-danger/10 text-danger border-danger/20",
};

const highlightClass =
  "bg-accent/20 text-text-primary font-semibold rounded px-0.5";

const Highlighted = ({ data, fallback }) =>
  data.match ? (
    <>
      {data.before}
      <span className={highlightClass}>{data.match}</span>
      {data.after}
    </>
  ) : (
    fallback
  );

const Table = ({
  users,
  isUsersPending,
  isUsersError,
  usersError,
  setFilteredUsers,
}) => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");

  // Filter
  const filteredUsers = users.filter((elem) => {
    const search = input.toLowerCase();

    const matchesSearch =
      elem.fullName.toLowerCase().includes(search) ||
      elem.username.toLowerCase().includes(search) ||
      elem.email.toLowerCase().includes(search) ||
      elem.phone.toLowerCase().includes(search);

    const matchesFilter = filter === "all" || elem.status === filter;

    return matchesSearch && matchesFilter;
  });

  // Sort
  const sortUsers = [...filteredUsers].sort((a, b) => {
    if (sort === "name-asc") return a.fullName.localeCompare(b.fullName);
    if (sort === "name-desc") return b.fullName.localeCompare(a.fullName);
    if (sort === "email-asc") return a.email.localeCompare(b.email);
    if (sort === "email-desc") return b.email.localeCompare(a.email);
    return 0;
  });

  // Pagination
  const {
    currentPage,
    setCurrentPage,
    currentItems: currentPageUsers,
    totalPages,
    startIndex,
    nextPage,
    previousPage,
    itemsPerPage: usersPerPage,
  } = usePagination(sortUsers, 10);

  // Clear
  const clearFilters = () => {
    setFilter("all");
    setSort("none");
    setInput("");
    setCurrentPage(1);
  };

  useEffect(() => {
    setFilteredUsers(filteredUsers.length);
  }, [setFilteredUsers, filteredUsers.length]);

  const controlClass =
    "w-full cursor-pointer bg-surface border border-surface-muted text-sm text-text-primary rounded-xl pl-10 pr-4 py-3 outline-none hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition";
  const iconLeft =
    "absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none";

  return (
    <div className="flex flex-col rounded-2xl px-4 sm:px-5 py-4 bg-surface gap-4">
      <p className="text-text-muted text-xl sm:text-2xl font-medium">
        All Users
      </p>

      {/* Controls: mobile pe neeche neeche, bari screen pe ek row */}
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Search */}
        <div className="relative w-full">
          <FaMagnifyingGlass
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
          />

          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by name, email or username"
            className="w-full bg-surface border border-surface-muted rounded-xl py-3 pl-11 pr-10 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-3">
          {/* Filter */}
          <div className="relative">
            <FaFilter size={14} className={iconLeft} />
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              className={controlClass}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Sort */}
          <div className="relative">
            <FaSort size={14} className={iconLeft} />
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1);
              }}
              className={controlClass}
            >
              <option value="none">None</option>
              <option value="name-asc">Name ↑</option>
              <option value="name-desc">Name ↓</option>
              <option value="email-asc">Email ↑</option>
              <option value="email-desc">Email ↓</option>
            </select>
          </div>

          {/* Clear */}
          <div className="relative col-span-2 sm:col-span-1">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearFilters}
              className={`${controlClass} text-left`}
            >
              Clear
            </motion.button>
            <TbXboxXFilled size={14} className={iconLeft} />
          </div>
        </div>
      </div>

      {/* Table: chhoti screen pe side se scroll hota hai */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-175 text-left text-sm">
          <thead>
            <tr className="border-b border-surface-muted text-text-muted">
              <th className="py-2 pr-4 font-medium">User ID</th>
              <th className="py-2 pr-4 font-medium">Name</th>
              <th className="py-2 pr-4 font-medium">Username</th>
              <th className="py-2 pr-4 font-medium">Email</th>
              <th className="py-2 pr-4 font-medium">Status</th>
              <th className="py-2 pr-4 font-medium">Phone</th>
            </tr>
          </thead>

          {/* key badalne pe rows ki animation dobara chalti hai */}
          <tbody key={`${currentPage}-${filter}-${sort}`}>
            {/* Loading */}
            {isUsersPending && (
              <tr>
                <td colSpan="6" className="py-8 text-center text-text-muted">
                  Loading users...
                </td>
              </tr>
            )}

            {/* Error */}
            {!isUsersPending && isUsersError && (
              <tr>
                <td colSpan="6" className="py-8 text-center text-danger">
                  {usersError?.message || "Something went wrong."}
                </td>
              </tr>
            )}

            {/* Empty */}
            {!isUsersPending && !isUsersError && sortUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="py-8 text-center text-text-muted">
                  No users found.
                </td>
              </tr>
            )}

            {/* Users */}
            {!isUsersPending &&
              !isUsersError &&
              currentPageUsers.map((elem, idx) => (
                <motion.tr
                  key={elem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="border-b border-surface-muted/60 hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-3 pr-4 font-medium text-text-primary whitespace-nowrap">
                    {elem.id}
                  </td>

                  <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                    <Highlighted
                      data={highlightText(elem.fullName, input)}
                      fallback={elem.fullName}
                    />
                  </td>

                  <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                    @
                    <Highlighted
                      data={highlightText(elem.username, input)}
                      fallback={elem.username}
                    />
                  </td>

                  <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                    <Highlighted
                      data={highlightText(elem.email, input)}
                      fallback={elem.email}
                    />
                  </td>

                  <td className="py-3 pr-4 text-text-primary">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold capitalize ${statusStyles[elem.status] ?? statusStyles.inactive}`}
                    >
                      {elem.status}
                    </span>
                  </td>

                  <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                    <Highlighted
                      data={highlightText(elem.phone, input)}
                      fallback={elem.phone}
                    />
                  </td>
                </motion.tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination: table se bahar, taake mobile pe scroll ke saath na jaye */}
      {sortUsers.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 py-2">
          <motion.button
            disabled={currentPage === 1}
            onClick={previousPage}
            whileHover={currentPage === 1 ? undefined : { scale: 1.05 }}
            whileTap={currentPage === 1 ? undefined : { scale: 0.95 }}
            className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <MdOutlineKeyboardArrowLeft size={20} /> Previous
          </motion.button>

          <p className="text-text-muted text-xs order-last w-full text-center sm:order-none sm:w-auto">
            Showing {startIndex + 1}-
            {Math.min(startIndex + usersPerPage, sortUsers.length)} Of{" "}
            {sortUsers.length}
          </p>

          <motion.button
            disabled={currentPage === totalPages}
            onClick={nextPage}
            whileHover={currentPage === totalPages ? undefined : { scale: 1.05 }}
            whileTap={currentPage === totalPages ? undefined : { scale: 0.95 }}
            className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
            <MdOutlineKeyboardArrowRight size={20} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Table;