import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaArrowTrendUp } from "react-icons/fa6";

const DAY = 86400000;

const rangeLabels = {
  today: "24 Hours",
  yesterday: "Yesterday",
  "7d": "7 Days",
  "30d": "30 Days",
};

const Chart = ({ dailySales = [] }) => {
  const [range, setRange] = useState("30d");

  const filtered = useMemo(() => {
    if (!dailySales.length) return [];

    const withDates = dailySales.map((d) => ({
      ...d,
      _t: new Date(d.date).setHours(0, 0, 0, 0),
    }));
    const latest = Math.max(...withDates.map((d) => d._t));
    const latestDate = new Date(latest);

    return withDates.filter((d) => {
      if (range === "today") return d._t === latest;
      if (range === "yesterday") return d._t === latest - DAY;
      if (range === "7d") return latest - d._t < 7 * DAY;

      const dt = new Date(d._t);
      return (
        dt.getMonth() === latestDate.getMonth() &&
        dt.getFullYear() === latestDate.getFullYear()
      );
    });
  }, [dailySales, range]);

  return (
    <div className="bg-surface rounded-2xl p-4 sm:p-5 flex-1 min-w-0 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 rounded-2xl p-2.5 sm:p-3 shrink-0">
            <FaArrowTrendUp className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex flex-col min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
              Sales Overview
            </h2>
            <p className="text-text-muted text-sm">
              {range === "yesterday"
                ? "Total Sales Yesterday"
                : `Total Sales Over the Last ${rangeLabels[range]}`}
            </p>
          </div>
        </div>

        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="cursor-pointer bg-surface-muted text-text-primary text-sm rounded-lg px-3 py-2 outline-none w-full sm:w-auto"
        >
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-80 xl:h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={filtered}
            className="outline-none border-none"
            margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#f1e3c6" vertical={false} />
            <XAxis dataKey="date" stroke="#6b7d74" minTickGap={20} />
            <YAxis
              stroke="#6b7d74"
              width={50}
              tickFormatter={(v) =>
                v >= 1000 ? `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}k` : v
              }
            />
            <Tooltip />
            <Line
              dataKey="sales"
              stroke="#064e3b"
              strokeWidth={3}
              dot={filtered.length === 1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;