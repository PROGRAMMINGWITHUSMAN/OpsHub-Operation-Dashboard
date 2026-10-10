import { useState } from "react";
import Stat from "../../Components/Main/Dashboard/Stat.jsx";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Chart from "../../Components/Main/Dashboard/Chart.jsx";
import RecentOrders from "../../Components/Main/Dashboard/RecentOrders.jsx";
import RecentActivity from "../../Components/Main/Dashboard/RecentActivity.jsx";
import activity from "../../Data/activity.js";
import TopBar from "../../Components/Main/Dashboard/TopBar.jsx";
import useAPIData from "../../Data/useAPIData.jsx";

const Dashboard = () => {
  const {
    users,
    products,
    orders,
    sales,
    dailySales,
    isUsersPending,
    isProductsPending,
    isOrdersPending,
    isUsersError,
    isProductsError,
    isOrdersError,
    usersError,
    productsError,
    ordersError,
    usersData,
    productsData,
    ordersData,
  } = useAPIData(); 

  // console.log("USERS:", users);
  // console.log("PRODUCTS:", products);
  // console.log("ORDERS:", orders);

  // const {
  //   data: usersData,
  //   isPending: isUsersPending,
  //   isError: isUsersError,
  //   error: usersError,
  // } = useCustomQuery("users", USER_API_URL);

  // const {
  //   data: productsData,
  //   isPending: isProductsPending,
  //   isError: isProductsError,
  //   error: productsError,
  // } = useCustomQuery("products", PRODUCT_API_URL);

  // const {
  //   data: ordersData,
  //   isPending: isOrdersPending,
  //   isError: isOrdersError,
  //   error: ordersError,
  // } = useCustomQuery("orders", ORDER_API_URL);

  // let users = usersData
  //   ? usersData.users.map((user) => {
  //       return {
  //         id: user.id,
  //         firstName: user.firstName,
  //         lastName: user.lastName,
  //         username: user.username,
  //         email: user.email,
  //         phone: user.phone,
  //         address: user.address,
  //         company: user.company,
  //       };
  //     })
  //   : [];

  // let products = productsData
  //   ? productsData.products.map((product) => {
  //       return {
  //         id: product.id,
  //         title: product.title,
  //         description: product.description,
  //         category: product.category,
  //         price: product.price,
  //         rating: product.rating,
  //         stock: product.stock,
  //         image: product.image,
  //       };
  //     })
  //   : [];

  // // console.log(productsData);

  // let orders = ordersData
  //   ? ordersData.carts.map((order, idx) => {
  //       let customer = users.find((user) => user.id === order.id);

  //       return {
  //         uniqueId: order.id,
  //         productId: `#${order.products[0].id}`,
  //         customer: customer
  //           ? customer.firstName + " " + customer.lastName
  //           : "Unknown",
  //         items: order.products[0].title,
  //         amount: Number(order.products[0].total).toFixed(2),
  //         status: statuses[idx] ? statuses[idx] : "Pending",
  //         date: dates[idx]
  //           ? new Date(dates[idx]).toLocaleString("en-PK", {
  //               day: "2-digit",
  //               month: "short",
  //               year: "numeric",
  //             })
  //           : "N/A",
  //       };
  //     })
  //   : [];

  // let sales = ordersData
  //   ? ordersData.carts.map((order, idx) => {
  //       const salesArr = order.products.map((product) => Number(product.total));
  //       const salesTotal = Number(
  //         salesArr.reduce((acc, curr) => acc + curr, 0).toFixed(2),
  //       );

  //       return {
  //         sales: salesTotal,
  //         date: orders[idx].date,
  //       };
  //     })
  //   : [];

  // const dailySales = sales.reduce((acc, current) => {
  //   const existingDate = acc.find((item) => item.date === current.date);

  //   if (existingDate) {
  //     Number(Number(existingDate.sales) + Number(current.sales)).toFixed(2);
  //   } else {
  //     acc.push({
  //       date: current.date,
  //       sales: Number(current.sales.toFixed(2)),
  //     });
  //   }

  //   return acc;
  // }, []);

  const activitiesSlice = activity.slice(0, 6);

  const ordersSlice = orders.slice(0, 5);

  const pendingOrders = orders.filter((order) => order.status === "Pending");

  // const [selectedRange, setSelectedRange] = useState("last7days");

  // const dateOptions = [
  //   { label: "Today", value: "today" },
  //   { label: "Yesterday", value: "yesterday" },
  //   { label: "Last 7 Days", value: "last7days" },
  //   { label: "Last 30 Days", value: "last30days" },
  //   { label: "This Month", value: "thisMonth" },
  // ];

  return (
    <div className="px-6 py-6 bg-secondary flex flex-col gap-6">
      {/* Top Bar */}
      <TopBar />

      {/* Stats */}
      <div className="flex justify-between flex-wrap">
        <Stat
          icon={<BsFillPeopleFill size={55} className="text-primary" />}
          title="Total Users"
          value={isUsersPending ? "Loading..." : users.length}
        />
        <Stat
          icon={<BsFillBoxSeamFill size={55} className="text-primary" />}
          title="Total Products"
          value={isProductsPending ? "Loading..." : products.length}
        />
        <Stat
          icon={<FaShoppingCart size={55} className="text-primary" />}
          title="Total Orders"
          value={isOrdersPending ? "Loading..." : orders.length}
        />
        <Stat
          icon={<FaRegClock size={55} className="text-primary" />}
          title="Pending Orders"
          value={isOrdersPending ? "Loading..." : pendingOrders.length}
        />
      </div>

      {/* Dashboard Chart and Recent Activity */}
      <div className="flex w-full gap-4 justify-between">
        <Chart dailySales={dailySales} />
        <RecentActivity activities={activitiesSlice} />
      </div>

      {/* Recent Orders */}
      <div>
        <RecentOrders orders={ordersSlice} />
      </div>
    </div>
  );
};

export default Dashboard;
