import KeyboardCard from "../components/KeyboardCard";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";

const AllKeyboards = () => {
  const [keyboards, setKeyboards] = useState([]);
  const [search, setSearch] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

  /**
   * DONE 1: get total number of pages
   * DONE 2: number of items per page dynamic eg. 10, 20, 50
   * DONE 3: get the current page
   */

  useEffect(() => {
    fetch(
      `http://localhost:5000/keyboards?search=${search}&page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setKeyboards(data));
  }, [search, currentPage, itemsPerPage]);

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
      <h2 className="text-3xl font-bold text-center mb-2">
        Featured Keyboards
      </h2>
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

      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {keyboards.map((keyboard) => (
          <KeyboardCard
            key={keyboard._id}
            keyboard={keyboard}
            search={search}
          />
        ))}
      </div>

      <div className="text-center space-x-3 py-10 font-mono">
        <p>{currentPage}</p>
        <button onClick={handlePrevPage} className="btn btn-outline btn-sm">
          Prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className={`btn btn-outline btn-sm ${
              currentPage === page && " btn-active"
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
          name=""
          id=""
          className="btn btn-outline btn-sm"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default AllKeyboards;
