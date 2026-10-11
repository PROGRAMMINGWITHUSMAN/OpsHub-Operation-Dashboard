import { useState } from "react";
import { motion } from "motion/react";
import useAPIData from "../../Data/useAPIData.jsx";
import { BsFillBoxSeamFill } from "react-icons/bs";
import Top from "../../Components/Main/Products/Top.jsx";
import Stats from "../../Components/Main/Products/Stats.jsx";
import { GoDotFill } from "react-icons/go";
import { GoAlertFill } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbXboxXFilled } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import usePagination from "../../Hooks/usePagination";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import highlightText from "../../Utils/highlightText.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const statusStyles = {
  "In Stock": "bg-success/10 text-success border-success/20",
  "Out Of Stock": "bg-danger/10 text-danger border-danger/20",
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

const controlClass =
  "w-full cursor-pointer bg-surface border border-surface-muted text-sm text-text-primary rounded-xl pl-10 pr-4 py-3 outline-none hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10 transition";
const iconLeft =
  "absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none";

const Products = () => {
  const { products, isProductsPending, isProductsError, productsError } =
    useAPIData();

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");

  const clearFilters = () => {
    setFilter("all");
    setSort("none");
    setInput("");
    setCurrentPage(1);
  };

  const inStock = products.filter((product) => product.status === "In Stock");
  const outOfStock = products.filter(
    (product) => product.status === "Out Of Stock",
  );

  const filteredProducts = products.filter((elem) => {
    const search = input.toLowerCase();

    const matchesSearch = elem.title.toLowerCase().includes(search);
    const matchesFilter = filter === "all" || elem.status === filter;

    return matchesSearch && matchesFilter;
  });

  const sortProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "name-asc") return a.title.localeCompare(b.title);
    if (sort === "name-desc") return b.title.localeCompare(a.title);
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "stock-asc") return a.stock - b.stock;
    if (sort === "stock-desc") return b.stock - a.stock;
    return 0;
  });

  // Pagination
  const {
    currentPage,
    setCurrentPage,
    currentItems: currentPageProducts,
    totalPages,
    startIndex,
    nextPage,
    previousPage,
    itemsPerPage: productsPerPage,
  } = usePagination(sortProducts, 10);

  const stats = [
    {
      value: isProductsPending ? "Loading..." : products.length,
      text: "Products",
      icon: <BsFillBoxSeamFill size={40} className="text-primary" />,
    },
    {
      value: isProductsPending ? "Loading..." : inStock.length,
      text: "In Stock",
      icon: <GoDotFill size={40} className="text-primary" />,
    },
    {
      value: isProductsPending ? "Loading..." : outOfStock.length,
      text: "Out Of Stock",
      icon: <GoAlertFill size={40} className="text-primary" />,
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 bg-secondary"
    >
      {/* Top Bar */}
      <motion.div variants={item}>
        <Top />
      </motion.div>

      {/* Stats: mobile 1 column, tablet se upar 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.text}
            variants={item}
            whileHover={{ y: -4 }}
            className="flex"
          >
            <Stats {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Products Table */}
      <motion.div
        variants={item}
        className="flex flex-col gap-4 bg-surface rounded-2xl p-4 sm:p-5 min-w-0"
      >
        <p className="text-text-muted text-xl sm:text-2xl font-medium">
          All Products
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
              placeholder="Search products..."
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
                <option value="In Stock">In Stock</option>
                <option value="Out Of Stock">Out Of Stock</option>
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
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="stock-asc">Stock ↑</option>
                <option value="stock-desc">Stock ↓</option>
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

        {/* Table */}
        {isProductsPending ? (
          <div className="animate-pulse w-full">
            <div className="bg-surface-muted text-text-muted rounded-xl w-full flex justify-center py-5 px-5 items-center">
              Loading...
            </div>
          </div>
        ) : isProductsError ? (
          <p className="py-6 text-center text-danger">
            Failed to load products:{" "}
            {productsError?.message || "Please try again."}
          </p>
        ) : (
          <>
            {/* Chhoti screen pe side se scroll hota hai */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-200 text-left text-sm">
                <thead>
                  <tr className="border-b border-surface-muted text-text-muted">
                    <th className="py-2 pr-4 font-medium">Product ID</th>
                    <th className="py-2 pr-4 font-medium">Product</th>
                    <th className="py-2 pr-4 font-medium">Category</th>
                    <th className="py-2 pr-4 font-medium">Price</th>
                    <th className="py-2 pr-4 font-medium">Stock</th>
                    <th className="py-2 pr-4 font-medium">Rating</th>
                    <th className="py-2 pr-4 font-medium">Status</th>
                  </tr>
                </thead>

                {/* key badalne pe rows ki animation dobara chalti hai */}
                <tbody key={`${currentPage}-${filter}-${sort}`}>
                  {currentPageProducts.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="py-8 text-center text-text-muted"
                      >
                        No products found.
                      </td>
                    </tr>
                  ) : (
                    currentPageProducts.map((elem, idx) => (
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

                        <td className="py-3 pr-4 text-text-primary">
                          <div className="flex items-center gap-3 min-w-48">
                            <img
                              src={elem.image}
                              alt={elem.title}
                              className="size-10 shrink-0 rounded-xl object-cover"
                            />
                            <span>
                              <Highlighted
                                data={highlightText(elem.title, input)}
                                fallback={elem.title}
                              />
                            </span>
                          </div>
                        </td>

                        <td className="py-3 pr-4 text-text-primary capitalize whitespace-nowrap">
                          {elem.category}
                        </td>

                        <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                          ${elem.price}
                        </td>

                        <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                          {elem.stock}
                        </td>

                        <td className="py-3 pr-4 text-text-primary whitespace-nowrap">
                          <span className="inline-flex items-center gap-1">
                            <IoIosStar size={18} className="text-accent" />
                            {elem.rating}
                          </span>
                        </td>

                        <td className="py-3 pr-4 text-text-primary">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold capitalize whitespace-nowrap ${statusStyles[elem.status] ?? statusStyles["In Stock"]}`}
                          >
                            {elem.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination: table se bahar, taake mobile pe scroll ke saath na jaye */}
            {sortProducts.length > 0 && (
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
                  {Math.min(startIndex + productsPerPage, sortProducts.length)}{" "}
                  Of {sortProducts.length}
                </p>

                <motion.button
                  disabled={currentPage === totalPages}
                  onClick={nextPage}
                  whileHover={
                    currentPage === totalPages ? undefined : { scale: 1.05 }
                  }
                  whileTap={
                    currentPage === totalPages ? undefined : { scale: 0.95 }
                  }
                  className="bg-surface-muted text-text-primary rounded-xl px-3 py-3 outline-none flex items-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next
                  <MdOutlineKeyboardArrowRight size={20} />
                </motion.button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Products;