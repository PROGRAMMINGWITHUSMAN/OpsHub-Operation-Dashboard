import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import usePagination from "../../../Hooks/usePagination";
import highlightText from "../../../Utils/highlightText";

const Table = ({
  users,
  isUsersPending,
  isUsersError,
  usersError,
  setFilteredUsers,
}) => {
  const statusStyles = {
    active: "bg-success/10 text-success border-success/20",
    inactive: "bg-danger/10 text-danger border-danger/20",
  };

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
    if (sort === "name-asc") {
      return a.fullName.localeCompare(b.fullName);
    }

    if (sort === "name-desc") {
      return b.fullName.localeCompare(a.fullName);
    }

    if (sort === "email-asc") {
      return a.email.localeCompare(b.email);
    }

    if (sort === "email-desc") {
      return b.email.localeCompare(a.email);
    }

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

  // Highlight all displayed fields
  const highlightedUser = currentPageUsers.map((user) => {
    return {
      name: highlightText(user.fullName, input),
      username: highlightText(user.username, input),
      email: highlightText(user.email, input),
      phone: highlightText(user.phone, input),
    };
  });

  // Clear
  const clearFilters = () => {
    setFilter("all");
    setSort("none");
    setInput("");
    setCurrentPage(1);
  };

  useEffect(() => {
    setFilteredUsers(filteredUsers.length);
  }, [setFilteredUsers, input, filter, users]);

  return (
    <div className="flex flex-col rounded-2xl px-5 py-3 bg-surface gap-4">
      <p className="text-text-muted text-2xl font-medium">All Users</p>

      {/* Controls */}
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
            placeholder="Search by name, email or username"
            className="w-full bg-surface border border-surface-muted rounded-xl py-3 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
          />

          <TbXboxXFilled
            size={17}
            onClick={() => input && setInput("")}
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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
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
              <option value="name-asc">Name ↑</option>
              <option value="name-desc">Name ↓</option>
              <option value="email-asc">Email ↑</option>
              <option value="email-desc">Email ↓</option>
            </select>
          </div>

          {/* Clear */}
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
      <div>
        <table className="w-full text-left text-sm">
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

          <tbody className="">
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
              currentPageUsers.map((elem, idx) => {
                const name = highlightedUser[idx].name;
                const username = highlightedUser[idx].username;
                const email = highlightedUser[idx].email;
                const phone = highlightedUser[idx].phone;

                return (
                  <tr key={elem.id}>
                    {/* ID */}
                    <td className="py-3 pr-4 font-medium text-text-primary">
                      {elem.id}
                    </td>

                    {/* Name */}
                    <td className="py-3 pr-4 text-text-primary">
                      {name.match ? (
                        <>
                          {name.before}

                          <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                            {name.match}
                          </span>

                          {name.after}
                        </>
                      ) : (
                        elem.fullName
                      )}
                    </td>

                    {/* Username */}
                    <td className="py-3 pr-4 text-text-primary">
                      @
                      {username.match ? (
                        <>
                          {username.before}

                          <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                            {username.match}
                          </span>

                          {username.after}
                        </>
                      ) : (
                        elem.username
                      )}
                    </td>

                    {/* Email */}
                    <td className="py-3 pr-4 text-text-primary">
                      {email.match ? (
                        <>
                          {email.before}

                          <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                            {email.match}
                          </span>

                          {email.after}
                        </>
                      ) : (
                        elem.email
                      )}
                    </td>

                    {/* Status */}
                    <td className="py-3 pr-4 text-text-primary">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold capitalize ${statusStyles[elem.status]}`}
                      >
                        {elem.status}
                      </span>
                    </td>

                    {/* Phone */}
                    <td className="py-3 pr-4 text-text-primary">
                      {phone.match ? (
                        <>
                          {phone.before}

                          <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                            {phone.match}
                          </span>

                          {phone.after}
                        </>
                      ) : (
                        elem.phone
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
          {sortUsers.length > 0 && (
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
                      {Math.min(startIndex + usersPerPage, sortUsers.length)} {" "}
                      Of {` ${sortUsers.length}`}
                    </p>
                    {/* <p>{currentPage}</p> */}
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
      </div>
    </div>
  );
};

export default Table;
