import { useLoaderData } from "react-router-dom";
import KeyboardCard from "../components/KeyboardCard";
import { useState } from "react";

const AllKeyboards = () => {
  const allKeyboards = useLoaderData();
  const [keyboards, setKeyboards] = useState(allKeyboards);

  return (
    <div className="my-24">
      <h2 className="text-3xl font-bold text-center mb-2">
        Featured Keyboards
      </h2>
      <p className="text-center sm:w-3/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor minus
        voluptatum laborum pariatur inventore cumque
      </p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {keyboards.map((keyboard) => (
          <KeyboardCard
            key={keyboard._id}
            keyboard={keyboard}
            keyboards={keyboards}
            setKeyboards={setKeyboards}
          />
        ))}
      </div>
    </div>
  );
};

export default AllKeyboards;
