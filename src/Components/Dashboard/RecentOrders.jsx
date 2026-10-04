import { FaShoppingBag } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const statusStyles = {
  Processing: "bg-accent/10 text-accent",
  Completed: "bg-success/10 text-success",
  Cancelled: "bg-danger/10 text-danger",
  Pending: "bg-accent/10 text-accent",
  Delivered: "bg-success/10 text-success",
};

const RecentOrders = ({ orders }) => {
  return (
    <div className="flex flex-col w-full bg-surface rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between w-full mb-4.5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaShoppingBag size={20} />
          </div>
          <h2 className="text-xl font-bold text-text-primary">Recent Orders</h2>
        </div>
        <button className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors duration-200 cursor-pointer">
          View All Orders <FaArrowRight size={14} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
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
          <tbody className="divide-y divide-surface-muted overflow-y-auto">
            {orders.map((o, idx) => (
              <tr key={idx} className="hover:bg-secondary/40 transition-colors duration-150">
                <td className="py-3 pr-4 font-medium text-text-primary">{o.productId}</td>
                <td className="py-3 pr-4 text-text-primary">{o.customer}</td>
                <td className="py-3 pr-4 text-text-muted">{o.items}</td>
                <td className="py-3 pr-4 text-text-primary">{o.amount}</td>
                <td className="py-3 pr-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[o.status]}`}>
                    {o.status}
                  </span>
                </td>
                <td className="py-3 text-text-muted">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;