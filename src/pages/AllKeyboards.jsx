import { useLoaderData } from "react-router-dom";
import KeyboardCard from "../components/KeyboardCard";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const AllKeyboards = () => {
  const allKeyboards = useLoaderData();
  const [keyboards, setKeyboards] = useState(allKeyboards);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://mk-shop-server.vercel.app/keyboards?search=${search}`)
      .then((res) => res.json())
      .then((data) => setKeyboards(data));
  }, [search]);

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

      {/* <p className="text-center mt-6">
        <Link
          to={`/addKeyboard`}
          className="bg-blue-100 sm:col-span-2 border-b-gray-200 border py-2 hover:border-blue-500 duration-200 font-medium hover:bg-blue-100 px-6 rounded-md"
        >
          Add Keyboard
        </Link>
      </p> */}

      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {keyboards.map((keyboard) => (
          <KeyboardCard
            key={keyboard._id}
            keyboard={keyboard}
            search={search}
          />
        ))}
      </div>
    </div>
  );
};

export default AllKeyboards;
