import KeyboardCard from "../components/KeyboardCard";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

const AllKeyboards = () => {
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  /**
   * DONE 1: get total number of pages
   * DONE 2: number of items per page dynamic eg. 10, 20, 50
   * DONE 3: get the current page
   */

  const { data: keyboards = [], isLoading } = useQuery({
    queryKey: ["keyboardData", search, currentPage, itemsPerPage],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://mk-shop-server.vercel.app/keyboards?search=${search}&page=${currentPage}&size=${itemsPerPage}`
      );
      return data;
    },
  });

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-2">All Keyboards</h2>
      <p className="text-center sm:w-1/2 mx-auto mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor minus
        voluptatum laborum pariatur inventore cumque
      </p>

      <label className="input input-bordered flex items-center gap-2 max-w-md mx-auto">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="grow text-center"
          placeholder="Search by Name"
        />
        <CiSearch />
      </label>

      {isLoading ? (
        <Loading />
      ) : !keyboards?.length ? (
        <p>
          <img
            src="https://i.ibb.co.com/8zMhZ9d/no-result.png"
            className="mx-auto"
            alt="no result"
            referrerPolicy="no-referrer"
          />
          <p className="text-3xl font-bold text-center py-10">
            No result found with term ` {search} `
          </p>
        </p>
      ) : (
        <div>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center justify-items-center gap-6 min-h-screen">
            {keyboards.map((keyboard) => (
              <KeyboardCard
                key={keyboard._id}
                keyboard={keyboard}
                search={search}
              />
            ))}
          </div>

          <motion.div
            key={currentPage} // Unique key to re-render on page change
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center space-x-3 py-10 font-mono"
          >
            <button onClick={handlePrevPage} className="btn btn-outline btn-sm">
              Prev
            </button>
            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                key={page}
                className={`btn btn-outline btn-sm ${
                  currentPage === page ? "btn-active" : undefined
                }`}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNextPage} className="btn btn-outline btn-sm">
              Next
            </button>

            <select
              onChange={handleItemsPerPage}
              className="btn btn-outline btn-sm"
            >
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="30">30</option>
            </select>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AllKeyboards;
