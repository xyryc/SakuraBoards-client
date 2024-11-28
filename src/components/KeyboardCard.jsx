import { FaRegEye } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";

/* eslint-disable react/prop-types */
const KeyboardCard = ({ keyboard }) => {
  const { color, connection, layout, name, photo, price, switchType, _id } =
    keyboard;

  return (
    <div>
      <img className="h-52 w-full object-scale-down" src={photo} alt={name} />

      <div className="px-4">
        <div>
          <h1 className="text-lg font-semibold">{name}</h1>
          <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm">
            <span>Color: {color}</span>
            <span>Layout: {layout}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm">
          <span>Connection: {connection}</span>
          <span>Switch Type: {switchType}</span>
        </div>

        <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm">
          <span>Price: ${price}</span>

          <div className="space-x-2">
            <button className="btn-xs btn btn-outline">
              <FaRegEye />
            </button>
            <button className="btn-xs btn btn-outline">
              <MdOutlineEdit  />
            </button>
            <button className="btn-xs btn btn-outline">
              <HiOutlineTrash  />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardCard;
