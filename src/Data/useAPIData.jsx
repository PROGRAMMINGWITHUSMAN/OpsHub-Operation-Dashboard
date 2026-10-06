import { USER_API_URL, PRODUCT_API_URL, ORDER_API_URL } from "../Services/API";
import { useCustomQuery } from "../Hooks/useCustomQuery";
import dates from "../Data/date";
import statuses from "../Data/status";

const useAPIData = () => {
  const status = ["Active", "InActive"];

  const {
    data: usersData,
    isPending: isUsersPending,
    isError: isUsersError,
    error: usersError,
  } = useCustomQuery("users", USER_API_URL);

  const {
    data: productsData,
    isPending: isProductsPending,
    isError: isProductsError,
    error: productsError,
  } = useCustomQuery("products", PRODUCT_API_URL);

  const {
    data: ordersData,
    isPending: isOrdersPending,
    isError: isOrdersError,
    error: ordersError,
  } = useCustomQuery("orders", ORDER_API_URL);

  let users = usersData
    ? usersData.users.map((user) => {
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          fullName: user.firstName + " " + user.lastName,
          username: user.username,
          email: user.email,
          phone: user.phone,
          address: user.address,
          company: user.company,
          status: status[Math.floor(Math.random() * 2)],
        };
      })
    : [];

  // console.log(usersData)

  let products = productsData
    ? productsData.products.map((product) => {
        return {
          id: product.id,
          title: product.title,
          description: product.description,
          category: product.category,
          price: product.price,
          rating: product.rating,
          stock: product.stock,
          image: product.image,
        };
      })
    : [];

  let orders = ordersData
    ? ordersData.carts.map((order, idx) => {
        let customer = users.find((user) => user.id === order.id);

        return {
          uniqueId: order.id,
          productId: `#${order.products[0].id}`,
          customer: customer
            ? customer.firstName + " " + customer.lastName
            : "Unknown",
          items: order.products[0].title,
          amount: Number(order.products[0].total).toFixed(2),
          status: statuses[idx] ? statuses[idx] : "Pending",
          date: dates[idx]
            ? new Date(dates[idx]).toLocaleString("en-PK", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "N/A",
        };
      })
    : [];

  let sales = ordersData
    ? ordersData.carts.map((order, idx) => {
        const salesArr = order.products.map((product) => Number(product.total));
        const salesTotal = Number(
          salesArr.reduce((acc, curr) => acc + curr, 0).toFixed(2),
        );

        return {
          sales: salesTotal,
          date: orders[idx].date,
        };
      })
    : [];

  const dailySales = sales.reduce((acc, current) => {
    const existingDate = acc.find((item) => item.date === current.date);

    if (existingDate) {
      existingDate.sales = Number(
        (Number(existingDate.sales) + Number(current.sales)).toFixed(2),
      );
    } else {
      acc.push({
        date: current.date,
        sales: Number(current.sales.toFixed(2)),
      });
    }

    return acc;
  }, []);

  return {
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
  };
};

export default useAPIData;
