import { Link, useLoaderData } from "react-router-dom";
import KeyboardCard from "../components/KeyboardCard";

const FeaturedKeyboards = () => {
  const keyboards = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-2">
        Featured Keyboards
      </h2>
      <p className="text-center sm:w-1/2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor minus
        voluptatum laborum pariatur inventore cumque
      </p>

      <p className="text-center mt-6">
        <Link
          to={`/addKeyboard`}
          className="bg-blue-100 sm:col-span-2 border-b-gray-200 border py-2 hover:border-blue-500 duration-200 font-medium hover:bg-blue-100 px-6 rounded-md"
        >
          Add Keyboard
        </Link>
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center justify-items-center gap-6">
        {keyboards.map((keyboard) => (
          <KeyboardCard key={keyboard._id} keyboard={keyboard} />
        ))}
      </div>

      <div className="grid place-items-center">
        <Link
          to="/keyboards"
          className="btn btn-neutral btn-wide rounded-full mt-6 bg-blue-400 text-white border-none"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedKeyboards;
