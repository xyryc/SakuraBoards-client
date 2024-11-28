import { useLoaderData } from "react-router-dom";
import KeyboardCard from "../components/KeyboardCard";

const AllKeyboards = () => {
  const allKeyboards = useLoaderData();
  console.log(allKeyboards);

  return (
    <div className="my-24 ">
      <h2 className="text-3xl font-bold text-center mb-2">
        Featured Keyboards
      </h2>
      <p className="text-center w-3/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor minus
        voluptatum laborum pariatur inventore cumque
      </p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allKeyboards.map((keyboard) => (
          <KeyboardCard key={keyboard._id} keyboard={keyboard} />
        ))}
      </div>
    </div>
  );
};

export default AllKeyboards;
