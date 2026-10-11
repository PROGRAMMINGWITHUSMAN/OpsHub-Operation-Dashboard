import { FaShoppingBag } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const statusStyles = {
  Pending: "bg-accent/10 text-accent border-accent/20",
  Processing: "bg-primary/10 text-primary border-primary/20",
  Delivered: "bg-success/10 text-success border-success/20",
  Completed: "bg-success/10 text-success border-success/20",
  Cancelled: "bg-danger/10 text-danger border-danger/20",
};

const RecentOrders = ({ orders = [] }) => {
  return (
    <div className="flex flex-col w-full min-w-0 bg-surface rounded-2xl p-4 sm:p-5 shadow-sm gap-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaShoppingBag size={20} />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-text-primary truncate">
            Recent Orders
          </h2>
        </div>

        <Link
          to="/dashboard/orders"
          className="flex shrink-0 items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors duration-200"
        >
          <span>
            View All<span className="hidden sm:inline"> Orders</span>
          </span>
          <FaArrowRight size={14} />
        </Link>
      </div>

      {/* Table: chhoti screen pe side se scroll hota hai */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-150 text-left text-sm">
          <thead>
            <tr className="border-b border-surface-muted text-text-muted">
              <th className="py-2 pr-4 font-medium">Order ID</th>
              <th className="py-2 pr-4 font-medium">Customer</th>
              <th className="py-2 pr-4 font-medium">Product</th>
              <th className="py-2 pr-4 font-medium">Amount</th>
              <th className="py-2 pr-4 font-medium">Status</th>
              <th className="py-2 font-medium">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-surface-muted">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-text-muted">
                  No recent orders.
                </td>
              </tr>
            ) : (
              orders.map((o) => (
                <tr
                  key={o.uniqueId}
                  className="hover:bg-secondary/40 transition-colors duration-150"
                >
                  <td className="py-3 pr-4 font-medium text-text-primary whitespace-nowrap">
                    {o.productId}
                  </td>
                  <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                    {o.customer}
                  </td>
                  <td className="py-3 pr-4 text-text-muted max-w-48 truncate">
                    {o.items}
                  </td>
                  <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                    ${o.amount}
                  </td>
                  <td className="py-3 pr-4">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap ${statusStyles[o.status] ?? statusStyles.Pending}`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3 text-text-muted whitespace-nowrap">
                    {o.date}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;