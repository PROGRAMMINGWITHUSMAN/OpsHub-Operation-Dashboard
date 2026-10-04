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

const Chart = ({ dailySales = [] }) => {
  const [range, setRange] = useState("7d");

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
    <div className="bg-surface rounded-2xl p-4 flex-1 h-[28rem] flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 rounded-2xl p-3">
         <FaArrowTrendUp size={30} className="text-primary" />
        </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-text-primary">
              Sales OverView
            </h2>
            <p className="text-text-muted">
              Total Sales Over the Last{" "}
              <span className="uppercase">
                {range === "today" ? "24 Hours" : range}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-end mb-2">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="bg-surface-muted text-text-primary text-sm rounded-lg px-3 py-1 outline-none"
          >
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={filtered}
            className="outline-none border-none"
            margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
          >
            <CartesianGrid stroke="#f1e3c6" vertical={false} />
            <XAxis dataKey="date" stroke="#6b7d74" minTickGap={20} />
            <YAxis
              stroke="#6b7d74"
              width={60}
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
