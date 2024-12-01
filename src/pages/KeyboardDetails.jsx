import { useLoaderData } from "react-router-dom";

const KeyboardDetails = () => {
  const keyboard = useLoaderData();

  return (
    <div className="container mx-auto p-6 my-20">
      <div className="bg-white rounded-lg overflow-hidden">
        {/* Keyboard Image */}
        <img
          src={keyboard.photo}
          alt={keyboard.name}
          className="w-full h-64 object-scale-down"
        />

        {/* Keyboard Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{keyboard.name}</h1>
          <p className="text-gray-500 mt-2">
            <span className="font-medium">Color:</span> {keyboard.color}
          </p>
          <p className="text-gray-500 mt-2">
            <span className="font-medium">Switch Type:</span>{" "}
            {keyboard.switchType}
          </p>
          <p className="text-gray-500 mt-2">
            <span className="font-medium">Layout:</span> {keyboard.layout}
          </p>
          <p className="text-gray-500 mt-2">
            <span className="font-medium">Connection:</span>{" "}
            {keyboard.connection}
          </p>
          <p className="text-gray-700 text-xl font-semibold mt-4">
            Price: ${keyboard.price}
          </p>

          {/* Action Buttons */}
          {/* <div className="mt-6 flex gap-4">
            <button className="btn btn-outline btn-accent">Add to Cart</button>
            <button className="btn text-neutral">Add to Wishlist</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default KeyboardDetails;
