

const TopBar = () => {
  return (
    <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
          <p className="text-primary/70 text-lg mt-1">
            Welcome Back, Usman! Here's what's Happening with your Operations
            Today.
          </p>
        </div>
        {/* <div className="flex items-center gap-2 rounded-xl border border-primary/10 px-3.5 py-2.5 shadow-sm">
          <span className="text-primary/50">
            <FaCalendarAlt />
          </span>

          <select
            value={selectedRange}
            onChange={(e) => {
              setSelectedRange(e.target.value);
            }}
            className="cursor-pointer bg-transparent text-sm font-semibold text-primary outline-none"
          >
            {dateOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div> */}
      </div>
  )
}

export default TopBar