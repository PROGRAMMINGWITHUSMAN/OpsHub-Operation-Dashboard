import useAPIData from "../Data/useAPIData.jsx";
import { BsFillBoxSeamFill } from "react-icons/bs";
import Top from "../Components/Products/Top.jsx";
import Stats from "../Components/Products/Stats.jsx";
import { GoDotFill } from "react-icons/go";
import { GoAlertFill } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbXboxXFilled } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import usePagination from "../Hooks/usePagination";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import highlightText from "../Utils/highlightText.js";

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

  const statusStyles = {
    "In Stock": "bg-success/10 text-success border-success/20",
    "Out Of Stock": "bg-danger/10 text-danger border-danger/20",
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
    if (sort === "name-asc") {
      return a.title.localeCompare(b.title);
    }

    if (sort === "name-desc") {
      return b.title.localeCompare(a.title);
    }

    if (sort === "price-asc") {
      return a.price - b.price;
    }

    if (sort === "price-desc") {
      return b.price - a.price;
    }

    if (sort === "stock-asc") {
      return a.stock - b.stock;
    }

    if (sort === "stock-desc") {
      return b.stock - a.stock;
    }

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
    itemsPerPage: usersPerPage,
  } = usePagination(sortProducts, 10);

  // Highlight all displayed fields
  const highlightedproducts = currentPageProducts.map((user) => {
    return {
      title: highlightText(user.title, input),
    };
  });
  console.log(highlightedproducts);

  return (
    <div className="p-6 flex flex-col gap-5 bg-secondary">
      {/* Top Bar */}
      <Top />

      {/* Stats */}
      <div className="flex w-full gap-4">
        <Stats
          value={isProductsPending ? "Loading..." : products.length}
          text="Products"
          icon={<BsFillBoxSeamFill size={40} className="text-primary" />}
        />
        <Stats
          value={isProductsPending ? "Loading..." : inStock.length}
          text="In Stock"
          icon={<GoDotFill size={40} className="text-primary" />}
        />
        <Stats
          value={isProductsPending ? "Loading..." : outOfStock.length}
          text="Out Of Stock"
          icon={<GoAlertFill size={40} className="text-primary" />}
        />
      </div>

      {/* Products Table */}
      <div className="flex flex-col gap-4 bg-surface rounded-2xl p-4">
        <p className="text-text-muted text-2xl font-medium">All Products</p>
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
                <option value="In Stock">In Stock</option>
                <option value="Out Of Stock">Out Of Stock</option>
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
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="stock-asc">Stock ↑</option>
                <option value="stock-desc">Stock ↓</option>
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

        <table className="w-full text-left text-sm">
          <thead className="text-text-muted justify-start">
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

          <tbody>
            {currentPageProducts.map((elem, idx) => {
              const title = highlightedproducts[idx].title;
              
              return (
                <tr key={elem.id}>
                  <td className="py-3 pr-4 font-medium text-text-primary">
                    <span className="flex justify-center items-center gap-1">
                      {elem.id}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-text-primary flex items-center gap-1">
                    <img
                      src={elem.image}
                      alt={elem.title}
                      className="w-10 rounded-xl"
                    />
                    {title.match ? (
                      <>
                        {title.before}

                        <span className="bg-accent/20 text-text-primary font-semibold rounded px-0.5">
                          {title.match}
                        </span>

                        {title.after}
                      </>
                    ) : (
                      elem.title
                    )}
                  </td>
                  <td className="py-3 pr-4 text-text-primary capitalize">
                    {elem.category}
                  </td>
                  <td className="py-3 pr-4 text-text-primary">${elem.price}</td>
                  <td className="py-3 pr-4 text-text-primary">{elem.stock}</td>
                  <td className="py-3 pr-4 text-text-primary">
                    <span className="flex items-center justify-center gap-1">
                      <IoIosStar size={18} />
                      {elem.rating}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-text-primary text-start">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold capitalize ${statusStyles[elem.status]}`}
                    >
                      {elem.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {sortProducts.length > 0 && (
            <tfoot>
              <tr>
                <td colSpan="7" className="py-8 text-center text-text-muted">
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
                      {Math.min(startIndex + usersPerPage, sortProducts.length)} Of{" "}
                      {` ${sortProducts.length}`}
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

export default Products;
