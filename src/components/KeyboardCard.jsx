import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const KeyboardCard = ({ keyboard, search }) => {
  const { color, connection, layout, name, photo, price, switchType, _id } =
    keyboard;

  // Function to highlight matched text
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Link to={`/keyboards/details/${_id}`}>
      <img className="h-52 w-full object-scale-down" src={photo} alt={name} />

      <div className="px-4">
        <div>
          <h1 className="text-lg font-semibold">
            {highlightText(name, search)}
          </h1>
          <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm">
            <span>Color: {color}</span>
            <span>Layout: {layout}%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm">
          <span>Connection: {connection}</span>
          <span>Switch Type: {switchType}</span>
        </div>

        <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm place-items-center justify-items-start">
          <span>
            Price: <span className="text-green-500 text-lg">${price}</span>
          </span>

          <div className="space-x-2"></div>
        </div>
      </div>
    </Link>
  );
};

export default KeyboardCard;
