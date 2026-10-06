import { useState } from "react";
import TopBar from "../Components/User/TopBar";
import { GoDotFill } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Stat from "../Components/User/Stat";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaSort } from "react-icons/fa";
import useAPIData from "../Data/useAPIData.jsx";

const Users = () => {
  const { users, isUsersPending, isUsersError, usersError } = useAPIData();

  console.log(users);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  const highlightUser = (filteredUserss, input) => {
    if (input.trim().length === 0) return;

    return filteredUserss.map((user) => {
      // const startChar = input[0];
      // const lastChar = input[input.length - 1];
      // const lastLetterInputIndex = input.indexOf(lastLetterInputText);

      // console.log(startChar)

      const s = user.fullName.toLowerCase().indexOf(input.toLowerCase());
      const e = s + input.length;
      // console.log("S: ", s, "E: ", e);

      let before = user.fullName.slice(0, s);
      let match = user.fullName.slice(s, e);
      let after = user.fullName.slice(e);

      return { before, match, after };
    });
  };

  const filteredUsers = users.filter((user) => {
    if (input.trim().length === 0) return true;
    else {
      return (
        user.firstName.toLowerCase().includes(input.toLowerCase()) ||
        user.lastName.toLowerCase().includes(input.toLowerCase()) ||
        user.fullName.toLowerCase().includes(input.toLowerCase()) ||
        user.username.toLowerCase().includes(input.toLowerCase()) ||
        user.email.toLowerCase().includes(input.toLowerCase()) ||
        user.phone.toLowerCase().includes(input.toLowerCase()) ||
        user.address.address.toLowerCase().includes(input.toLowerCase()) ||
        user.company.name.toLowerCase().includes(input.toLowerCase())
      );
    }
  });

  let highlightedUsers = highlightUser(filteredUsers, input);

  return (
    <div className="p-6 flex flex-col gap-5 bg-secondary min-h-screen">
      {/* Top Bar */}
      <TopBar />

      {/* {Stats} */}
      <div className="flex gap-4">
        <Stat
          icon={<BsFillPeopleFill size={40} className="text-primary" />}
          title="Total Users"
          value="100"
        />
        <Stat
          icon={<GoDotFill size={40} className="text-primary" />}
          title="Total Active Users"
          value="100"
        />
        <Stat
          icon={<FaFilter size={40} className="text-primary" />}
          title="Total Filtered Users"
          value="100"
        />
      </div>

      {/* {Table (Acual User List)} */}
      <div className="flex flex-col rounded-2xl px-5 py-3 bg-surface gap-4">
        <p className="text-text-muted text-2xl font-medium">All Users</p>
        <div className="flex gap-3">
          <div className="relative w-full">
            <FaMagnifyingGlass
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search by name, email or username"
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <FaFilter
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              />
              <select className="cursor-pointer bg-surface border border-surface-muted text-sm text-text-primary rounded-xl pl-10 pr-4 py-3 outline-none hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="relative">
              <FaSort
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              />
              <select className="cursor-pointer bg-surface border border-surface-muted text-sm text-text-primary rounded-xl pl-10 pr-4 py-3 outline-none hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transitionr34">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="name">Name (A-Z)</option>
              </select>
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
            <tbody className="divide-y divide-surface-muted overflow-y-auto">
              {input === "" ? (
                isUsersPending ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  users.map((elem, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="py-3 pr-4 font-medium text-text-primary">
                          {elem.id}
                        </td>
                        <td className="py-3 pr-4 text-text-primary">
                          {elem.firstName + " " + elem.lastName}
                        </td>
                        <td className="py-3 pr-4 text-text-primary">
                          @{elem.username}
                        </td>
                        <td className="py-3 pr-4 text-text-primary">
                          {elem.email}
                        </td>
                        <td className="py-3 pr-4 text-text-primary">
                          {elem.phone}
                        </td>
                      </tr>
                    );
                  })
                )
              ) : (
                filteredUsers.map((elem, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="py-3 pr-4 font-medium text-text-primary">
                        {elem.id}.
                      </td>
                      <td className="py-3 pr-4 text-text-primary">
                        {highlightedUsers ? (
                          <>
                            {highlightedUsers[idx].before}
                            {highlightedUsers[idx].match && (
                              <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                                {highlightedUsers[idx].match}
                              </span>
                            )}
                            {highlightedUsers[idx].after}
                          </>
                        ) : (
                          elem.name
                        )}
                      </td>
                      <td className="py-3 pr-4 text-text-primary">
                        @{elem.username}
                      </td>
                      <td className="py-3 pr-4 text-text-primary">
                        {elem.email}
                      </td>
                      <td className="py-3 pr-4 text-text-primary">
                        {elem.phone}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
